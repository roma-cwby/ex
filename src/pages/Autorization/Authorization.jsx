import { NavLink, Outlet } from 'react-router-dom';
import './authorization.scss';

export const Authorization = () => {
  return (
    <div className="container authorization__container">
      <div className="authorization__wrapper">
        <div className="authorization__nav">
          <NavLink to="/authorization/register">Sign up</NavLink>
          <NavLink to="/authorization/login">Log in</NavLink>
        </div>
        <Outlet />
      </div>
    </div>
  );
};
