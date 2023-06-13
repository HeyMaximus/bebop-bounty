import React, { useContext, useState } from 'react';
import { StyledNavBar, StyledNavLogo, StyledListBountyBtn, StyledProfilePic } from './styled-components/navbar.styled';
import SearchBar from './SearchBar.jsx';

export default function NavBar() {
  const imgURL =
    'https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Spike-Spiegel.Cowboy-Bebop.webp';
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
