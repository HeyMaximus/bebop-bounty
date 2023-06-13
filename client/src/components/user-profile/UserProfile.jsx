import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import Reviews from './Reviews.jsx';
import TransactionHistory from './TransactionHistory.jsx';
import CoinRating from '../common/coin-rating/CoinRating.jsx';

const Host = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
`;

const UserProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 80%;
  margin: auto;
  border: 2px solid white;
  padding: 20px;
  box-sizing: border-box;
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const UserDetails = styled.div``;

const ReviewsContainer = styled.div``;

const TransactionContainer = styled.div``;

function UserProfile() {
  return (
    <Host>
      <UserProfileContainer>
        <UserDetails>
          <h2>Spike123</h2>
          <p>SpiegMaster@yahoo.com</p>
          <ProfileImage
            src="https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/774a5e05e3cd3c64e61d6f7e6e5a7e6a.png"
            alt="Profile"
          />
        </UserDetails>
        <ReviewsContainer>
          <h1>Reviews</h1>
          <Reviews />
        </ReviewsContainer>
        <TransactionContainer>
          <h1>Transaction History</h1>
          <TransactionHistory />
        </TransactionContainer>
      </UserProfileContainer>
    </Host>
  );
}

export default UserProfile;
