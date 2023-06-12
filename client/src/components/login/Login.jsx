import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Host = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

function Login() {
  return (
    <Host>
      <div className="sign-up-container">
        <div className="form-container">
          <p className="title">Login</p>
          <form className="form">
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
            Don't have an account?
            <Link to="/signUp">Sign Up</Link>
          </p>
        </div>
      </div>
    </Host>
  );
}

export default Login;
