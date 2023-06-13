import React from 'react';
import { ProfileMenuContainer, ProfileMenuHeader, UpArrow, ProfileMenuProperties } from './navbar.styled';

export default function ProfileMenu() {
  const exampleImgURL = 'https://i.pinimg.com/736x/5b/91/44/5b914448091084b6aa3dc005fad52eba.jpg';

  return (
    <>
      <UpArrow />
      <ProfileMenuContainer>
        <ProfileMenuHeader>
          <img src={exampleImgURL} alt="profile pic" />
          <div>
            <p>Spike Spiegal</p>
            <p>spacecowboy@gmail.com</p>
          </div>
        </ProfileMenuHeader>
        <ProfileMenuProperties>
          <button>Notifications</button>
          <button>Your Bounties</button>
          <button>Settings</button>
          <button>Dark Mode</button>
          <button>Sign Out</button>
        </ProfileMenuProperties>
      </ProfileMenuContainer>
    </>
  );
}
