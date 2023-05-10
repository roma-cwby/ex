import './profile.scss';
import { NavLink, Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';

export const Profile = () => {
  const dispatch = useDispatch();
  const name = useSelector(state => state.auth.user.name);
  const email = useSelector(state => state.auth.user.email);
  const avatar = useSelector(state => state.auth.user.avatar);

  const onLogout = e => {
    dispatch(logOut());
  };

  return (
    <div className="container profile__contailer">
      <div className="profile__info">
        <img src={avatar} alt="user" />
        <h2>{name}</h2>
        <h3>{email}</h3>
        <div className="profile__info-nav">
          <NavLink to="/profile/posts">My posts</NavLink>
          <NavLink to="/profile/add">Add post</NavLink>
        </div>
      </div>
      <button onClick={onLogout} className="profile__logout-btn" type="button">
        Logout
      </button>
      <Outlet />
    </div>
  );
};
