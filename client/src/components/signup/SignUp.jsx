/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';
import { getAuth, createUserWithEmailAndPassword, AuthErrorCodes } from 'firebase/auth';
import { firebaseApp } from '../../firebase';

function SignUp() {
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [error, setError] = React.useState(null);
  const auth = getAuth(firebaseApp);

  const sendUserDataToServer = (user) => {
    const userData = {
      uid: user.uid,
      email: user.email,
    };
    console.log('userData', userData);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    setError(null);
    if (password !== confirmPassword) {
      setError('* Passwords do not match');
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const { user } = userCredential;
          console.log('user', user);
          sendUserDataToServer(user);
        })
        .catch((err) => {
          if (err.code === AuthErrorCodes.WEAK_PASSWORD) {
            setError('* The password is too weak');
          } else if (err.code === AuthErrorCodes.EMAIL_EXISTS) {
            setError('* The email address is already in use');
          } else {
            console.log(err.message);
          }
        });
    }
  };
  return (
    <div className="auth-container">
      <span className="auth-nav">
        <Link to="/login">Login</Link>
        <Link to="/signUp">Sign Up</Link>
      </span>
      <div className="auth-form-container">
        <p className="auth-form-title">Bebop Bounty</p>
        <form className="auth-form" onSubmit={handleSignUp}>
          <div className="auth-form-input">
            <label>
              Username:
              <input
                required
                type="text"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
          </div>
          <div className="auth-form-input">
            <label>
              E-mail:
              <input
                required
                type="email"
                htmlFor="email"
                name="email"
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
          <div className="auth-form-input">
            <label>
              Confirm Password:
              <input
                required
                type="confirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </label>
          </div>
          {error ? <small className="login-error">{error}</small> : null}
          <button type="submit" className="auth-form-submit-btn">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
