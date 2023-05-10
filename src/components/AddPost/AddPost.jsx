import { GenreFilter } from '../GenreFilter/GenreFilter';
import './addPost.scss';
import { getGenres } from '../GenreFilter/GenreFilter';
import { useState, useEffect } from 'react';
import { addPost, updatePost, getPostById } from '../../api/api';
import { useParams } from 'react-router-dom';
import { useRef } from 'react';
import { errorNotify, loading } from '../../helpers/notifications';

export const AddPost = () => {
  const { id } = useParams();
  const [postData, setPostData] = useState(null);
  const textRef = useRef();

  const setTextareaHeight = () => {
    textRef.current.style.height = `${textRef.current.scrollHeight}px`;
  };

  const submitPost = async e => {
    e.preventDefault();
    const data = {
      title: e.target.title.value,
      genres: getGenres(e.target.children[1]),
      text: e.target.text.value,
    };
    try {
      loading();
      if (!id) await addPost(data);
      else await updatePost(id, data);
    } catch (error) {
      errorNotify(error.response.data.message);
    } finally {
      loading(true);
    }
    e.target.title.value = '';
    e.target.text.value = '';
  };

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        loading();
        const data = await getPostById(id).then(data => [data.data.title, data.data.text]);
        setPostData(data);
        setTextareaHeight();
      } catch (error) {
        errorNotify(error.response.data.message);
      } finally {
        loading(true);
      }
    };
    if (id) {
      fetchPostData();
    }
  }, [id]);

  return (
    <div className="container add-post__container">
      <form onSubmit={submitPost} className="add-post__form">
        <input
          className="add-post__form-title"
          type="text"
          name="title"
          placeholder="Title"
          defaultValue={postData ? postData[0] : ''}
          required
        />
        <GenreFilter />
        <textarea
          onChange={setTextareaHeight}
          className="add-post__form-text"
          type="textarea"
          name="text"
          placeholder="Text"
          defaultValue={postData ? postData[1] : ''}
          ref={textRef}
          required
        />
        <button className="add-post__button" type="submit">
          {id ? 'Update' : 'Add'}
        </button>
      </form>
    </div>
  );
};
