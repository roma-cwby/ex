import { FiSearch } from 'react-icons/fi';
import { GenreFilter } from '../../components/GenreFilter/GenreFilter';
import { Post } from '../../components/Post/Post';
import { getGenres } from '../../components/GenreFilter/GenreFilter';
import { search } from '../../api/api';
import { useState } from 'react';
import { errorNotify, loading } from '../../helpers/notifications';
import './explore.scss';

export const Explore = () => {
  const [searchData, setSearchData] = useState([]);

  const onSearch = async e => {
    e.preventDefault();
    let genresList = getGenres(e.target.children[2]);
    if (genresList[0] === 'All') genresList = '';
    try {
      loading();
      const data = await search(e.target.text.value, genresList).then(data => data.data);
      setSearchData(data);
    } catch (error) {
      errorNotify(error.response.data.message);
    } finally {
      loading(true);
    }
  };

  return (
    <div className="container explore__container">
      <form onSubmit={onSearch} className="explore__form">
        <input type="text" name="text" placeholder="Title search" />
        <button type="submit">
          <FiSearch />
        </button>
        <GenreFilter />
      </form>
      <ul className="explore__list">
        {searchData.map(item => (
          <Post key={item._id} data={item} />
        ))}
      </ul>
    </div>
  );
};
