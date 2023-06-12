import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Host = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-between;
`;

function Landing() {
  const [isSignIn, setIsSignIn] = React.useState(false);
  return (
    <Host>
      <div>Landing</div>
      {/* <>
        {!isSignIn && <Link to="/login">Log in</Link>}
        {isSignIn && (
          <div>
            Sign in page
            <button onClick={() => setIsSignIn(false)}>sign out</button>
          </div>
        )}
      </> */}
      <ul>
        <li>
          <Link to="/signup">Sign up</Link>
          <Link to="/login">Log in</Link>
        </li>
      </ul>
    </Host>
  );
}

export default Landing;
