import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const PublicRoute = ({ component, redirect = '/' }) => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return isLoggedIn ? <Navigate to={redirect} /> : component;
};
