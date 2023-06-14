import React from 'react';
import {
  StyledProfileMenuContainer,
  StyledProfileMenuHeader,
  StyledUpArrow,
  StyledProfileMenuProperties,
} from './navbar.styled';

export default function ProfileMenu() {
  const exampleImgURL = 'https://i.pinimg.com/736x/5b/91/44/5b914448091084b6aa3dc005fad52eba.jpg';

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
        </StyledProfileMenuHeader>
        <StyledProfileMenuProperties>
          <button type="button">Notifications</button>
          <button type="button">Your Bounties</button>
          <button type="button">Settings</button>
          <button type="button">Dark Mode</button>
          <button type="button">Sign Out</button>
        </StyledProfileMenuProperties>
      </StyledProfileMenuContainer>
    </>
  );
}
