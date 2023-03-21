import styled from 'styled-components';

export const MobileMenuWrapper = styled.div`
  position: absolute;
  top: 50px;
  left: 0;
  width: 100%;

  background-color: #999999;

  animation: menu 200ms linear;
  z-index: 99;

  nav {
    display: flex;
    flex-wrap: wrap;
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50%;
      padding: 20px 0;
      div {
        display: flex;
        align-items: center;

        h2 {
          margin-left: 10px;
          font-size: 25px;
        }
      }

      &.active {
        color: var(--accent-color);
        fill: var(--accent-color);
      }
    }
  }

  @keyframes menu {
    0% {
      transform: translateX(101%);
    }
    100% {
      transform: translateX(0);
    }
  }
`;
