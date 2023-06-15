/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword, AuthErrorCodes } from 'firebase/auth';
import axios from 'axios';
import { GlobalContext } from '../GlobalContext.jsx';
import { firebaseApp } from '../../firebase';

function Login() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState(null);
  const auth = getAuth(firebaseApp);
  const navigate = useNavigate();
  const { setUserData } = useContext(GlobalContext);

  const sendUserDataToServer = (user) => {
    axios
      .get(`http://54.176.108.13:8080/api/users/${user.uid}?auth=true`)
      .then((response) => {
        setUserData(response.data[0]);
        navigate('/bounty-page');
      })
      .catch((err) => console.log('Err in sendUserDataToServer: ', err));
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    setError(null);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const { user } = userCredential;
        console.log('user', user);
        sendUserDataToServer(user);
      })
      .catch((err) => {
        if (
          err.code === AuthErrorCodes.INVALID_PASSWORD ||
          err.code === AuthErrorCodes.USER_DELETED
        ) {
          setError('* The email address or password is incorrect');
        } else {
          console.log(err.message);
        }
      });
  };

  return (
    <div className="auth-container">
      <span className="auth-nav">
        <Link to="/login">Login</Link>
        <Link to="/signUp">Sign Up</Link>
      </span>
      <div className="auth-form-container">
        <p className="auth-form-title">Bebop Bounty</p>
        <form className="auth-form" onSubmit={handleSignIn}>
          <div className="auth-form-input">
            <label>
              E-mail:
              <input
                required
                type="email"
                name="email"
                htmlFor="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>
          <div className="auth-form-input">
            <label>
              Password:
              <input
                required
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>
          {error ? <small className="login-error">{error}</small> : null}
          <button type="submit" className="auth-form-submit-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
