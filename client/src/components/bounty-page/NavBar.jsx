import React, { useContext, useState } from 'react';
import { StyledNavBar, StyledNavLogo, StyledListBountyBtn, StyledProfilePic } from './styled-components/navbar.styled';
import SearchBar from './SearchBar.jsx';

export default function NavBar() {
  const imgURL = 'https://i.pinimg.com/736x/5b/91/44/5b914448091084b6aa3dc005fad52eba.jpg';
  return (
    <StyledNavBar>
      <StyledNavLogo>Bebop Bounty</StyledNavLogo>
      <SearchBar />
      <StyledListBountyBtn>List Bounty</StyledListBountyBtn>
      <StyledProfilePic>
        <img src={imgURL} alt="profile pic" />
      </StyledProfilePic>
    </StyledNavBar>
  );
}
