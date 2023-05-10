import { NavLink } from 'react-router-dom';
import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher';
import './mobileMenu.scss';
import { useSelector } from 'react-redux';

export const MobileMenu = ({ menuRef, click }) => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <div
      onClick={e => {
        if (e.target.classList[0] === 'mobile-menu__item') click();
      }}
      ref={menuRef}
      className="mobile-menu hidden"
    >
      <div className="container mobile-menu__container">
        <nav>
          <NavLink className="mobile-menu__item" to="/">
            Home
          </NavLink>
          <NavLink className="mobile-menu__item" to="/explore">
            Explore
          </NavLink>
          {isLoggedIn ? (
            <NavLink className="mobile-menu__item" to="/profile">
              Profile
            </NavLink>
          ) : (
            <NavLink className="mobile-menu__item" to="/authorization/register">
              Authorization
            </NavLink>
          )}
          <ThemeSwitcher />
        </nav>
      </div>
    </div>
  );
};
