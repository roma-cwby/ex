import { PostWrapper } from './Post.styled';
import { Link } from 'react-router-dom';
import { BsFillHeartFill } from 'react-icons/bs';
import { FaRegCommentAlt } from 'react-icons/fa';

export const Post = () => {
  return (
    <PostWrapper>
      <div className="post__item-head">
        <img href="" alt="user" />
        <Link to="/user/0001">
          <h3>Some User</h3>
        </Link>
      </div>
      <Link to="/post/001">
        <article>
          <h2>Some title</h2>
          <h3>Some genre, Some another genre</h3>
          <p>fhryfggy</p>
        </article>
      </Link>
      <div className="post__item-icons">
        <BsFillHeartFill />
        <span>30</span>
        <Link to="/post/001">
          <FaRegCommentAlt />
        </Link>
        <span>2</span>
      </div>
    </PostWrapper>
  );
};
