import { Link } from 'react-router-dom';
import { BsFillHeartFill } from 'react-icons/bs';
import { BiComment } from 'react-icons/bi';
import { RiEdit2Fill } from 'react-icons/ri';
import './post.scss';
import { useState, useRef } from 'react';
import { toggleLike } from '../../api/api';
import { useSelector } from 'react-redux';
import { errorNotify } from '../../helpers/notifications';
import { NavLink } from 'react-router-dom';

const POST_SIZE = 1500;

export const Post = ({ data, ownPost, deleteClick, allText }) => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  const userId = useSelector(store => store.auth.user.id);
  const [isDelete, setIsDelete] = useState(false);
  const [likesCounter, setLikesCounter] = useState(data.likes.length);
  const likesRef = useRef();

  const likeClick = async e => {
    try {
      await toggleLike(e.target.closest('li').id);
      if (e.target.closest('svg').classList.contains('current')) {
        e.target.closest('svg').classList.remove('current');
        setLikesCounter(likesCounter - 1);
      } else {
        e.target.closest('svg').classList.add('current');
        setLikesCounter(likesCounter + 1);
      }
    } catch (error) {
      errorNotify(error.response.data.message);
    }
  };

  return (
    <li id={data._id} className="post">
      <div className="post__head">
        <Link to={`/post/${data._id}`}>
          <img src={data.owner.avatarURL} alt="user" />
          <h3>{data.owner.name}</h3>
        </Link>
        <p>{data.createdAt.slice(0, 10)}</p>
      </div>
      <Link to={`/post/${data._id}`}>
        <article className="post__article">
          <h2>{data.title}</h2>
          <h3>{data.genres.join(', ')}</h3>
          <p>
            {allText
              ? data.text
              : data.text.length > POST_SIZE
              ? `${data.text.slice(0, POST_SIZE)}...`
              : data.text}
          </p>
        </article>
      </Link>
      <div className="post__reactions">
        <BsFillHeartFill className={data.likes.includes(userId) && 'current'} onClick={likeClick} />
        <span ref={likesRef}>{likesCounter}</span>
        {isLoggedIn ? (
          <Link to={`/post/${data._id}`}>
            <BiComment />
          </Link>
        ) : (
          <NavLink to="/authorization/login">
            <BiComment />
          </NavLink>
        )}
        <span>{data.comments.length}</span>
        {ownPost && (
          <Link className="post__edit-link" to={`/profile/add/${data._id}`}>
            <RiEdit2Fill className="post__edit-icon" />
          </Link>
        )}
        {ownPost && (
          <button onClick={() => setIsDelete(true)} className="post__delete-btn" type="button">
            Delete
          </button>
        )}
      </div>

      {isDelete && (
        <div
          onClick={e => {
            if (e.target === e.currentTarget || e.target.textContent === 'Cancel')
              setIsDelete(false);
          }}
          className="post__delete-modal"
        >
          <button onClick={deleteClick} type="button">
            Delete
          </button>
          <button type="button">Cancel</button>
        </div>
      )}
    </li>
  );
};
