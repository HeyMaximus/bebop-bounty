import React, { useState } from 'react';
import axios from 'axios';
import {
  StyledListBountyContainer,
  StyledListBountyOverlay,
  StyledListBountyBody,
  StyledListBountyContentContainer,
  StyledSubmitListBounty,
  StyledListBountyCloseBtn,
  StyledListBountyTitleInput,
  StyledListBountyTitle,
} from './navbar.styled';

export default function ListBounty({ showListBountyModal }) {
  return (
    <StyledListBountyContainer>
      <StyledListBountyOverlay />
      <StyledListBountyBody>
        <StyledListBountyCloseBtn type="button" onClick={() => showListBountyModal()}>
          X
        </StyledListBountyCloseBtn>
        <h2>Bounty</h2>
        <StyledListBountyContentContainer>
          <StyledListBountyTitle>
            Bounty Title:
            <StyledListBountyTitleInput />
          </StyledListBountyTitle>
        </StyledListBountyContentContainer>
        <StyledSubmitListBounty className="list-bounty-btn" type="button">
          List Button
        </StyledSubmitListBounty>
      </StyledListBountyBody>
    </StyledListBountyContainer>
  );
}
