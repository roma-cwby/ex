import './myPosts.scss';
import { Post } from '../Post/Post';
import { getOwnPost, deletePost } from '../../api/api';
import { useEffect, useState } from 'react';
import { errorNotify, loading } from '../../helpers/notifications';

export const MyPosts = () => {
  const [posts, setPosts] = useState([]);

  const delPost = async e => {
    try {
      loading();

      await deletePost(e.target.closest('li').id);

      setPosts([]);

      if (posts.length > 1) await fetch();
    } catch (error) {
      errorNotify(error.response.data.message);
    } finally {
      loading(true);
    }
  };

  const fetch = async () => {
    try {
      loading();
      const data = await getOwnPost().then(data => data.data);
      setPosts(data);
    } catch (error) {
      errorNotify(error.response.data.message);
    } finally {
      loading(true);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div className="container my-posts__container">
      <ul className="my-posts__list">
        {posts.map(item => (
          <Post key={item._id} data={item} ownPost deleteClick={delPost} />
        ))}
      </ul>
    </div>
  );
};
