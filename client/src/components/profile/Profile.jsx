import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import CoinRating from '../common/coin-rating/CoinRating.jsx';

const Host = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

function Profile() {
  const user = {
    rating_thumbs_up: 10,
    rating_thumbs_down: 20,
  };
  return (
    <Host>
      <div>Profile</div>
      <CoinRating user={user} />
    </Host>
  );
}

export default Profile;
