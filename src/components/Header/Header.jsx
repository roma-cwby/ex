import { HeaderWrapper } from './Header.styled';
import { HeaderLink } from './Header.styled';
import { Switcher } from 'components/Switcher/Switcher';
import { MobileMenu } from 'components/MobileMenu/MobileMenu';
import { HiMenuAlt4 } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';
import { useState } from 'react';

export const Header = () => {
  let [isHiddenMenu, setIsHiddenMenu] = useState(true);
  let isLoggined = false;

  function toggleMobMenu() {
    setIsHiddenMenu(!isHiddenMenu);
  }

  return (
    <HeaderWrapper>
      <div className="container">
        <a href="/ex">
          <span>L</span>ogo.
        </a>

        {isHiddenMenu ? (
          <HiMenuAlt4 className="header__icon" onClick={toggleMobMenu} />
        ) : (
          <IoMdClose className="header__icon" onClick={toggleMobMenu} />
        )}
        {!isHiddenMenu && <MobileMenu />}
        <nav className="header__nav">
          <HeaderLink to="/">Home</HeaderLink>
          <HeaderLink to="/explore">Explore</HeaderLink>
          {isLoggined ? (
            <>
              <HeaderLink to="/notifications">Notifications</HeaderLink>
              <HeaderLink to="/profile">Profile</HeaderLink>
            </>
          ) : (
            <>
              <HeaderLink to="/register">Register</HeaderLink>
              <HeaderLink to="/login">Login</HeaderLink>
            </>
          )}
        </nav>
        <Switcher />
      </div>
    </HeaderWrapper>
  );
};
