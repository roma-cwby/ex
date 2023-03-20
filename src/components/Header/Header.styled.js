import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderWrapper = styled.header`
  position: relative;
  background-color: inherit;
  box-shadow: 0 5px 10px var(--accent-color);

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 50px;
    a {
      color: var(--text-color);
      font-size: 25px;

      transition: color 200ms linear;

      span {
        color: var(--accent-color);
      }

      &:hover,
      &:focus {
        color: var(--accent-color);
      }
    }

    & .header__icon {
      height: 30px;
      width: 30px;

      transition: all 200ms linear;
      fill: var(--text-color);

      cursor: pointer;

      &:hover,
      &:focus {
        fill: var(--accent-color);
      }

      @media (min-width: 1200px) {
        display: none;
      }
    }

    .header__nav {
      display: none;
      align-items: center;
      a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50%;
        padding: 20px 0;

        margin-left: 10px;
        font-size: 25px;

        &.active {
          color: var(--accent-color);
          fill: var(--accent-color);
        }
      }

      @media (min-width: 1200px) {
        display: flex;
      }
    }
  }
`;

export const HeaderLink = styled(NavLink)``;
