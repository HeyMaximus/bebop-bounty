import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Host = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-between;
`;

function Landing() {
  return (
    <Host>
      <div>Landing</div>
      <ul>
        <li>
          <Link to="/signup">Sign up</Link>
          <Link to="/login">Log in</Link>
          <Link to="/user-profile">User Profile</Link>
        </li>
      </ul>
    </Host>
  );
}

export default Landing;
