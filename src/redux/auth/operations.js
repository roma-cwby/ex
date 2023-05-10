import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const { REACT_APP_API_URL: API_URL } = process.env;

axios.defaults.baseURL = API_URL;

const setAuthToken = token => {
  axios.defaults.headers.common.Authorization = token ? `Bearer ${token}` : '';
};

export const register = createAsyncThunk('auth/register', async (data, thunkAPI) => {
  try {
    const res = await axios.post('/api/users/register', data);
    setAuthToken(res.data.token);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});

export const logIn = createAsyncThunk('auth/login', async (data, thunkAPI) => {
  try {
    const res = await axios.post('/api/users/login', data);
    setAuthToken(res.data.token);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('api/users/logout');
    setAuthToken();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});

export const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;

  if (persistedToken === null) {
    return thunkAPI.rejectWithValue('Unable to fetch user');
  }

  try {
    setAuthToken(persistedToken);
    const res = await axios.get('api/users/current');
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});
