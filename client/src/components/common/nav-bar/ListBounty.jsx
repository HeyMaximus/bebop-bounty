import React, { useState } from 'react';
import {
  ListBountyContainer,
  ListBountyOverlay,
  ListBountyBody,
  ListBountyContentContainer,
  ListBountyBtn,
} from './navbar.styled';

export default function ListBounty({ showListBountyModal }) {
  return (
    <ListBountyContainer>
      <ListBountyOverlay />
      <ListBountyBody>
        <button type="submit" onClick={() => showListBountyModal()}>X</button>
        <h2>Bounty</h2>
        <ListBountyContentContainer />
        <ListBountyBtn className="list-bounty-btn" type="submit">
          List Button
        </ListBountyBtn>
      </ListBountyBody>
    </ListBountyContainer>
  );
}
