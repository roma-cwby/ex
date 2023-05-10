import './postDetails.scss';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState, useEffect, useRef } from 'react';
import { Post } from '../../components/Post/Post';
import { Commentary } from '../../components/Commentary/Commentary';
import { AddCommentary } from '../../components/addCommentary/AddCommentary';
import { getPostById } from '../../api/api';
import { addCommentary, deleteCommentary, updateCommentary } from '../../api/api';
import { errorNotify, loading } from '../../helpers/notifications';

export const PostDetails = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const { id } = useParams();
  const [postData, setPostData] = useState(null);
  const [editCommentaryId, setEditCommentaryId] = useState(null);
  const CommentaryRef = useRef();

  const sendCommentary = async e => {
    try {
      loading();
      if (editCommentaryId) {
        await updateCommentary(id, editCommentaryId, { text: e.target.text.value });
        setEditCommentaryId(null);
      } else {
        await addCommentary(id, { text: e.target.text.value });
      }
      console.log('Ok');
    } catch (error) {
      errorNotify(error.response.data.message);
    } finally {
      loading(true);
    }
  };

  const handleDelete = async e => {
    try {
      loading();
      await deleteCommentary(id, e.target.closest('li').id);
      const data = await getPostById(id).then(data => data.data);
      setPostData(data);
    } catch (error) {
      errorNotify(error.response.data.message);
    } finally {
      loading(true);
    }
  };

  const setEdit = (id, text) => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    CommentaryRef.current.textContent = text;
    setEditCommentaryId(id);
  };

  useEffect(() => {
    const fetch = async () => {
      try {
        loading();
        const data = await getPostById(id).then(data => data.data);
        setPostData(data);
      } catch (error) {
        errorNotify(error.response.data.message);
      } finally {
        loading(true);
      }
    };
    fetch();
  }, [id]);

  return (
    <div className="container post-details__container">
      <ul className="post-details__list">{postData && <Post data={postData} />}</ul>
      {isLoggedIn && <AddCommentary commentRef={CommentaryRef} clickSend={sendCommentary} />}
      <ul className="post-details__commentary-list">
        {postData?.comments?.map(item => {
          const CommentaryOwner = postData.reactionsOwners.find(user => user._id === item.owner);
          return (
            <Commentary
              key={item._id}
              owner={CommentaryOwner}
              text={item.text}
              commentaryId={item._id}
              delCommentary={handleDelete}
              editCommentary={setEdit}
            />
          );
        })}
      </ul>
    </div>
  );
};
