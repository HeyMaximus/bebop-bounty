/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getAuth, signInWithEmailAndPassword, AuthErrorCodes } from 'firebase/auth';
import { firebaseApp } from '../../firebase';

const Host = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

function Login() {
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

  const handleSignIn = (e) => {
    e.preventDefault();
    setError(null);
    if (password !== confirmPassword) {
      setError('Passwords do not match');
    } else {
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
            setError('The email address or password is incorrect');
          } else {
            console.log(err.message);
          }
        });
    }
  };

  return (
    <Host>
      <div className="sign-up-container">
        <div className="form-container">
          <p className="title">Login</p>
          <form className="form" onSubmit={handleSignIn}>
            <div className="input-group">
              <label>
                Email
                <input
                  required
                  type="email"
                  name="email"
                  htmlFor="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
            </div>
            <div className="input-group">
              <label>
                Password
                <input
                  required
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
            </div>
            <div className="input-group">
              <label>
                Confirm Password
                <input
                  required
                  type="password"
                  name="confirm-password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </label>
            </div>
            {error ? <p className="login-error">{error}</p> : null}
            <br />
            <button className="sign">Login</button>
          </form>
          <p className="signup">
            Don't have an account?
            <Link to="/signUp">Sign Up</Link>
          </p>
        </div>
      </div>
    </Host>
  );
}

export default Login;
