import { SearchWrapper } from './Search.styled';
import { RiSearch2Line } from 'react-icons/ri';

export const Search = () => {
  return (
    <SearchWrapper>
      <form>
        <input type="text" placeholder="search" />
        <button type="submit">
          <RiSearch2Line />
        </button>
        <div className="genre__list">
          <fieldset>
            <legend>Genres</legend>
            <input type="radio" id="genre1" value="fantasy" />
            <label for="genre1">Fantasy</label>

            <input type="radio" id="genre2" value="comedy" />
            <label for="genre2">Comedy</label>

            <input type="radio" id="genre3" value="crime" />
            <label for="genre3">Crime</label>
          </fieldset>
        </div>
      </form>
    </SearchWrapper>
  );
};
