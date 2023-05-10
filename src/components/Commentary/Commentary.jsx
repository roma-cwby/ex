import './commentary.scss';
import { RiEdit2Fill } from 'react-icons/ri';
import { AiFillDelete } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { useRef } from 'react';
import { getRandomHexColor } from '../../helpers/randomColor';

export const Commentary = ({ owner, text, commentaryId, delCommentary, editCommentary }) => {
  const userId = useSelector(state => state.auth.user.id);
  const textRef = useRef();

  return (
    <li
      id={commentaryId}
      className="commentary__item"
      style={{ boxShadow: `5px 5px 10px ${getRandomHexColor()}` }}
    >
      <img src={owner.avatarURL} alt="user" />
      <div>
        <h3>{owner.name}</h3>
      </div>
      <p ref={textRef}>{text}</p>

      {userId === owner._id && (
        <div className="commentary__item-edit">
          <RiEdit2Fill
            onClick={e => editCommentary(e.target.closest('li').id, textRef.current.textContent)}
          />
          <AiFillDelete onClick={delCommentary} />
        </div>
      )}
    </li>
  );
};
