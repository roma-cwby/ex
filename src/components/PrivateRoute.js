import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const PrivateRoute = ({ component, redirect = '/' }) => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const isRefreshing = useSelector(state => state.auth.isRefreshing);
  return !isLoggedIn && !isRefreshing ? <Navigate to={redirect} /> : component;
};
