/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
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
      setError('Passwords do not match');
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const { user } = userCredential;
          console.log('user', user);
          sendUserDataToServer(user);
        })
        .catch((err) => {
          if (err.code === AuthErrorCodes.WEAK_PASSWORD) {
            setError('The password is too weak');
          } else if (err.code === AuthErrorCodes.EMAIL_EXISTS) {
            setError('The email address is already in use');
          } else {
            console.log(err.message);
          }
        });
    }
  };
  return (
    <div className="sign-up-container">
      <div className="form-container">
        <p className="title">Sign Up</p>
        <form className="form" onSubmit={handleSignUp}>
          <div className="input-group">
            <label>
              Username
              <input
                required
                type="text"
                name="username"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
          </div>
          <div className="input-group">
            <label>
              Email
              <input
                required
                type="email"
                htmlFor="email"
                name="email"
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
          <br />
          <button className="sign">Sign up</button>
        </form>
        <p className="signup">
          Already have an account?
          <Link to="/login">Log in</Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
