<<<<<<< HEAD
import React from 'react';
import {
  StyledProfileMenuContainer,
  StyledProfileMenuHeader,
  StyledUpArrow,
  StyledProfileMenuProperties,
} from './navbar.styled';
=======
import React, { useContext } from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { ProfileMenuContainer, ProfileMenuHeader, UpArrow, ProfileMenuProperties } from './navbar.styled';
import { firebaseApp } from '../../../firebase';
import { GlobalContext } from '../../GlobalContext.jsx';
>>>>>>> main

export default function ProfileMenu() {
  const exampleImgURL = 'https://i.pinimg.com/736x/5b/91/44/5b914448091084b6aa3dc005fad52eba.jpg';
  const auth = getAuth(firebaseApp);
  const navigate = useNavigate();
  const { setUserData } = useContext(GlobalContext);

  const handleSignOut = (e) => {
    e.preventDefault();
    signOut(auth)
      .then(() => {
        console.log('Sign out successful.');
        setUserData({}); // clear current user data after sign out
        navigate('/login');
      })
      .catch((error) => {
        console.error('Error occurrs during sign out:', error);
      });
  };
  return (
    <>
      <StyledUpArrow />
      <StyledProfileMenuContainer>
        <StyledProfileMenuHeader>
          <img src={exampleImgURL} alt="profile pic" />
          <div>
            <p>Spike Spiegal</p>
            <p>spacecowboy@gmail.com</p>
          </div>
<<<<<<< HEAD
        </StyledProfileMenuHeader>
        <StyledProfileMenuProperties>
          <button type="button">Notifications</button>
          <button type="button">Your Bounties</button>
          <button type="button">Settings</button>
          <button type="button">Dark Mode</button>
          <button type="button">Sign Out</button>
        </StyledProfileMenuProperties>
      </StyledProfileMenuContainer>
=======
        </ProfileMenuHeader>
        <ProfileMenuProperties>
          <button>Notifications</button>
          <button>Your Bounties</button>
          <button>Settings</button>
          <button>Dark Mode</button>
          <button onClick={handleSignOut}>Sign Out</button>
        </ProfileMenuProperties>
      </ProfileMenuContainer>
>>>>>>> main
    </>
  );
}
