import { FaUser } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { FaLock } from 'react-icons/fa';
import './authorizationForm.scss';
import { useDispatch, useSelector } from 'react-redux';
import { register, logIn } from '../../redux/auth/operations';

export const AuthorizationForm = ({ login }) => {
  const dispatch = useDispatch();
  const error = useSelector(state => state.auth.error);

  const onRegister = e => {
    e.preventDefault();

    dispatch(
      register({
        name: e.target.name.value,
        email: e.target.email.value,
        password: e.target.password.value,
      })
    );
  };

  const onLogIn = e => {
    e.preventDefault();

    dispatch(
      logIn({
        email: e.target.email.value,
        password: e.target.password.value,
      })
    );
  };

  return login ? (
    <form className="authorization-form" onSubmit={onLogIn}>
      <div className="authorization-form__field">
        <input type="email" name="email" placeholder="Email" required />
        <IoMdMail />
      </div>
      <div className="authorization-form__field">
        <input type="password" name="password" placeholder="Password" required />
        <FaLock />
      </div>
      <button type="submit">Log in</button>
      {error && <h3>{error}</h3>}
    </form>
  ) : (
    <form className="authorization-form" onSubmit={onRegister}>
      <div className="authorization-form__field">
        <input type="text" name="name" placeholder="Name" required />
        <FaUser />
      </div>
      <div className="authorization-form__field">
        <input type="email" name="email" placeholder="Email" required />
        <IoMdMail />
      </div>
      <div className="authorization-form__field">
        <input type="password" name="password" placeholder="Password" required />
        <FaLock />
      </div>
      <button type="submit">Register</button>
      {error && <h3>{error}</h3>}
    </form>
  );
};
