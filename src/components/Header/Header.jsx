import { useRef, useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';
import { MobileMenu } from '../MobileMenu/MobileMenu';
import { NavLink } from 'react-router-dom';
import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher';
import './header.scss';
import { useSelector } from 'react-redux';

export const Header = () => {
  const [isShowMobileMenu, setIsShowMobileMenu] = useState(false);
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const mobileMenuRef = useRef();

  function showMenu(e) {
    setIsShowMobileMenu(!isShowMobileMenu);
    mobileMenuRef.current.classList.toggle('hidden');
  }

  return (
    <header>
      <div className="container header__container">
        <a className="header__logo" href="/">
          ex
        </a>
        <nav className="header__nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/explore">Explore</NavLink>
          {isLoggedIn ? (
            <NavLink to="/profile">Profile</NavLink>
          ) : (
            <NavLink to="/authorization/register">Authorization</NavLink>
          )}
          <ThemeSwitcher />
        </nav>
        {isShowMobileMenu ? (
          <IoMdClose className="header__icon" onClick={showMenu} />
        ) : (
          <HiMenuAlt3 className="header__icon" onClick={showMenu} />
        )}
        <MobileMenu click={showMenu} menuRef={mobileMenuRef} />
      </div>
    </header>
  );
};
