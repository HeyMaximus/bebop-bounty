import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import Reviews from './Reviews.jsx';
import TransactionHistory from './TransactionHistory.jsx';
import CoinRating from '../common/coin-rating/CoinRating.jsx';
import NavBar from '../common/nav-bar/NavBar.jsx';
import {
  Host,
  UserProfileContainer,
  UserInfoContainer,
  ProfileImage,
  UserDetails,
  RightContainer,
  ReviewContainer,
  TransactionContainer,
} from './ProfileStyles';

const userID = 1;

function UserProfile() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios
      .get('/api/transactions', {
        params: {
          userID: 1,
        },
      })
      .then((result) => {
        console.log(transactions);
        setTransactions(result.data);
      })
      .catch((err) => console.error('Error getting transactions', err));
  }, []);

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
          <div>
            Rating: <CoinRating />
          </div>
          <ReviewContainer>
            <Reviews />
          </ReviewContainer>
          <TransactionContainer>
            <TransactionHistory transactions={transactions} />
          </TransactionContainer>
        </RightContainer>
      </UserProfileContainer>
    </Host>
  );
}

export default UserProfile;
