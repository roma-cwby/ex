import { Post } from 'components/Post/Post';

export const Home = () => {
  return (
    <div className="container">
      <ul style={{ paddingTop: '20px' }}>
        <Post />
      </ul>
    </div>
  );
};
