import styled from 'styled-components';

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid silver;

  form {
    position: relative;
    display: inline;

    input {
      height: 3vh;
      width: 30vh;
      border-radius: 1.5vh;

      padding: 0 3vh;
      font-size: 2vh;

      margin-bottom: 10px;

      background-color: transparent;
      border: 1px solid var(--accent-color);

      color: var(--text-color);
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 0;
      right: 0;

      background-color: transparent;
      height: 3vh;
      width: 3vh;

      padding: 0;
      border: none;
      cursor: pointer;

      svg {
        height: 2vh;
        width: 2vh;
        fill: var(--text-color);
      }
    }

    .genre__list {
      fieldset {
        padding: 5px 10px;
        border-radius: 10px;
        overflow-x: auto;
        legend {
          color: var(--text-color);
        }

        input {
          display: none;
          width: auto;
          height: auto;

          &:checked + label {
            background-color: orangered;
          }
        }

        label {
          color: var(--text-color);
          padding: 2px 5px;
          border-radius: 5px;
          cursor: pointer;

          &:hover,
          &:focus {
            background-color: orangered;
          }
        }
      }
    }
  }
`;
