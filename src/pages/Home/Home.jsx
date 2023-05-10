import './home.scss';
import { Post } from '../../components/Post/Post';
import { getAllPosts } from '../../api/api';
import { useState, useEffect } from 'react';
import { errorNotify, loading } from '../../helpers/notifications';

export const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        loading();
        const data = await getAllPosts().then(data => data.data);
        setPosts(data);
      } catch (error) {
        errorNotify(error.response.data.message);
      } finally {
        loading(true);
      }
    };

    fetch();
  }, []);

  return (
    <div className="container home__container">
      <ul className="home__list">
        {posts.map(item => (
          <Post key={item._id} data={item} />
        ))}
      </ul>
    </div>
  );
};
