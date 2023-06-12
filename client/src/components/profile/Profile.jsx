import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import CoinRating from '../shared/coin-rating/CoinRating.jsx';

const Host = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

function Profile() {
  return (
    <Host>
      <div>Profile</div>
      <CoinRating rating="75%" />
    </Host>
  );
}

export default Profile;
