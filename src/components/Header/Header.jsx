import { HeaderWrapper } from './Header.styled';
import { HeaderLink } from './Header.styled';
import { MobileMenu } from 'components/MobileMenu/MobileMenu';
import { HiMenuAlt4 } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';
import { HiHome } from 'react-icons/hi';
import { MdOutlineExplore } from 'react-icons/md';
import { MdNotificationAdd } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import { useState } from 'react';

export const Header = () => {
  let [isHiddenMenu, setIsHiddenMenu] = useState(true);
  let [isLoggined, setIsLoggined] = useState(true);

  function toggleMobMenu() {
    setIsHiddenMenu(!isHiddenMenu);
  }

  return (
    <HeaderWrapper>
      <div className="container">
        <a href="/">
          <span>L</span>ogo
        </a>

        {isHiddenMenu ? (
          <HiMenuAlt4 onClick={toggleMobMenu} />
        ) : (
          <IoMdClose onClick={toggleMobMenu} />
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
      </div>
    </HeaderWrapper>
  );
};
