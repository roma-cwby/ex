import { Search } from 'components/Search/Search';
import { Post } from 'components/Post/Post';

export const Explore = () => {
  return (
    <div className="container">
      <Search />
      <ul style={{ paddingTop: '10px' }}>
        <Post />
      </ul>
    </div>
  );
};
