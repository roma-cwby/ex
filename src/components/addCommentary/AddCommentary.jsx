import './addCommentary.scss';
import { useSelector } from 'react-redux';

export const AddCommentary = ({ clickSend, commentRef }) => {
  const userAvatar = useSelector(state => state.auth.user.avatar);

  return (
    <div className="commentary">
      <form onSubmit={clickSend}>
        <img src={userAvatar} alt="user" />
        <textarea
          onChange={e => (e.target.style.height = `${e.target.scrollHeight}px`)}
          onFocus={e => (e.target.style.height = `${e.target.scrollHeight}px`)}
          className="commentary__text"
          type="textarea"
          name="text"
          placeholder="Type something"
          ref={commentRef}
          required
        />
        <button className="commentary__send-btn" type="submit">
          Send
        </button>
      </form>
    </div>
  );
};
