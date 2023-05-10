import { useRef } from 'react';
import './genreFilter.scss';

const genresList = [
  'Literary Fiction',
  'Mystery',
  'Thriller',
  'Horror',
  'Historical',
  'Romance',
  'Western',
  'Bildungsroman',
  'Speculative Fiction',
  'Science Fiction',
  'Fantasy',
  'Dystopian',
  'Magical Realism',
  'Realist Literature',
];

export const getGenres = list => {
  let res = [];
  Object.values(list.children).map(item => {
    if (item.classList.contains('genre-list__item--current')) res.push(item.textContent);
  });
  return res;
};

export const GenreFilter = () => {
  const genresRef = useRef();

  function onFilter(e) {
    if (e.target.textContent === 'All') {
      Object.values(genresRef.current.children).map(item =>
        item.textContent !== 'All'
          ? item.classList.remove('genre-list__item--current')
          : item.classList.add('genre-list__item--current')
      );
    } else {
      genresRef.current.firstElementChild.classList.remove('genre-list__item--current');
      e.target.classList.toggle('genre-list__item--current');
    }
  }

  return (
    <ul ref={genresRef} onClick={onFilter} name="genres" className="genre-filter">
      <li className="genre-list__item genre-list__item--current">All</li>
      {genresList.map(item => (
        <li key={item} className="genre-list__item">
          {item}
        </li>
      ))}
    </ul>
  );
};
