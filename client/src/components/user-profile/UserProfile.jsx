import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import Reviews from './Reviews.jsx';
import TransactionHistory from './TransactionHistory.jsx';
import CoinRating from '../common/coin-rating/CoinRating.jsx';
import NavBar from '../common/nav-bar/NavBar.jsx';

const Host = styled.div`
  margin-top: 50px;
`;

const UserProfileContainer = styled.div`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  border: 2px solid white;
  padding: 20px;
  box-sizing: border-box;
  width: 93%;
  height: 80vh;
  margin: 10px auto;
`;

const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ProfileImage = styled.img`
  width: 400px;
  height: 400px;
  object-fit: cover;
`;

const UserDetails = styled.div`
  h2 {
    font-size: 1.5em;
    margin-bottom: 10px;
  }

  p {
    font-size: 1em;
  }
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  gap: 10px;
  margin-right: 70px;
`;

const ReviewContainer = styled.div`
  flex: 1 1 0%;
  overflow: auto;
  width: 400px;
  padding: 10px;
  border: 1px solid white;
`;

const TransactionContainer = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  border: 1px solid white;
  width: 400px;
  align-items: center;
  overflow: auto;
`;

function UserProfile() {
  return (
    <Host>
      <NavBar />
      <UserProfileContainer>
        <UserInfoContainer>
          <UserDetails>
            <h2>Spike123</h2>
            <p>SpiegMaster@yahoo.com</p>
          </UserDetails>
          <ProfileImage
            src="https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/774a5e05e3cd3c64e61d6f7e6e5a7e6a.png"
            alt="Profile"
          />
        </UserInfoContainer>
        <RightContainer>
          <CoinRating />
          <ReviewContainer>
            <Reviews />
          </ReviewContainer>
          <TransactionContainer>
            <TransactionHistory />
          </TransactionContainer>
        </RightContainer>
      </UserProfileContainer>
    </Host>
  );
}

export default UserProfile;
