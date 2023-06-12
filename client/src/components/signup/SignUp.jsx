/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';

function SignUp() {
  return (
    <div className="sign-up-container">
      <div className="form-container">
        <p className="title">Sign Up</p>
        <form className="form">
          <div className="input-group">
            <label>
              Username
              <input type="text" name="username" id="username" placeholder="" />
            </label>
          </div>
          <div className="input-group">
            <label>
              Email
              <input type="email" name="email" id="email" placeholder="" />
            </label>
          </div>
          <div className="input-group">
            <label>
              Password
              <input type="password" name="password" id="password" placeholder="" />
            </label>
          </div>
          <div className="input-group">
            <label>
              Confirm Password
              <input type="password" name="confirm-password" id="confirm-password" placeholder="" />
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
