import styled from 'styled-components';

export const PostWrapper = styled.li`
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  box-shadow: 5px 5px 10px var(--accent-color);
  overflow: hidden;

  div {
    display: flex;
    align-items: center;
    padding-bottom: 10px;
    border-bottom: 1px solid var(--text-color);

    img {
      width: 7vh;
      height: 7vh;

      margin-right: 20px;

      border-radius: 50%;
      background-color: white;
    }

    h3 {
      color: var(--text-color);
    }
  }
`;
