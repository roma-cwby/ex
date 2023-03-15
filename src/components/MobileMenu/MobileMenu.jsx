import { MobileMenuWrapper } from './MobileMenu.styled';
import { HeaderLink } from 'components/Header/Header.styled';
import { HiHome } from 'react-icons/hi';
import { MdOutlineExplore } from 'react-icons/md';
import { MdNotificationAdd } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';

export const MobileMenu = () => {
  return (
    <MobileMenuWrapper>
      <nav>
        <HeaderLink to="/">
          <div>
            <HiHome />
            <h2>Home</h2>
          </div>
        </HeaderLink>
        <HeaderLink to="/explore">
          <div>
            <MdOutlineExplore />
            <h2>Explore</h2>
          </div>
        </HeaderLink>
        <HeaderLink to="/notifications">
          <div>
            <MdNotificationAdd />
            <h2>Home</h2>
          </div>
        </HeaderLink>
        <HeaderLink to="/profile">
          <div>
            <CgProfile />
            <h2>Profile</h2>
          </div>
        </HeaderLink>
      </nav>
    </MobileMenuWrapper>
  );
};
