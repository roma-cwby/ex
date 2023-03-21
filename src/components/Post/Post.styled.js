import styled from 'styled-components';

export const PostWrapper = styled.li`
  max-width: 100%;
  padding: 10px;
  border-radius: 20px;
  box-shadow: 5px 5px 10px var(--accent-color);
  overflow: hidden;

  .post__item-head {
    display: flex;
    align-items: center;
    padding-bottom: 10px;
    border-bottom: 1px solid silver;

    img {
      width: 7vh;
      height: 7vh;

      margin-right: 20px;

      border-radius: 50%;
      background-color: white;
    }

    h3 {
      color: var(--text-color);
      transition: color 300ms linear;

      &:hover,
      &:focus {
        color: var(--accent-color);
      }
    }
  }
  article {
    padding: 10px;
    border-bottom: 1px solid silver;

    h2 {
      color: var(--text-color);
      margin-bottom: 5px;
    }

    h3 {
      display: inline-block;
      margin-bottom: 10px;
      color: orange;
    }

    p {
      color: var(--text-color);
    }
  }

  .post__item-icons {
    display: flex;
    align-items: center;
    margin-top: 10px;
    svg {
      height: 3vh;
      width: 3vh;

      margin-right: 5px;

      transition: fill 300ms linear;

      fill: var(--text-color);
      cursor: pointer;

      &:hover,
      &:focus {
        fill: var(--accent-color);
      }
    }

    a {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    span {
      font-size: 3vh;
      color: var(--text-color);
      margin-right: 10px;
    }
  }
`;
