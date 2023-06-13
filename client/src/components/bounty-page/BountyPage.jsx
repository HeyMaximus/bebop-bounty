import React, { useContext, useState } from 'react';
import { StyledBountyPageBorder } from './styled-components/bountypage.styled';
import NavBar from './NavBar.jsx';

export default function BountyPage() {
  return (
    <StyledBountyPageBorder>
      <NavBar />
    </StyledBountyPageBorder>
  );
}
