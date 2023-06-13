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

export default function ListBountyModal({ showListBountyModal }) {
  return (
    <StyledListBountyContainer>
      <StyledListBountyOverlay />
      <StyledListBountyBody>

        {/* ====== INSERT UNIQUE CONTENT BELOW HERE ====== */}
        <StyledListBountyCloseBtn type="button" onClick={() => showListBountyModal()}>
          X
        </StyledListBountyCloseBtn>
        <h2>Bounty</h2>
        <StyledListBountyContentContainer>
          <StyledListBountyTitle>
            Bounty Title:
            <StyledListBountyTitleInput />
          </StyledListBountyTitle>
          <div>
            <select>Catgory
              <option>-- Select Category --</option>
              <option>Gadget</option>
              <option>Clothing</option>
              <option>Furniture</option>
              <option>Miscelleneous</option>
            </select>
            <select>Condition</select>
            <div>Deadline <input type="date"></input></div>
          </div>
          <div>Preferred Payment</div>
          <div>
            Upload An Image <input type="file" accept="image/png, image/jpeg, image/jpg" />
          </div>
          <div>
            Description <textarea type="text" />
          </div>
        </StyledListBountyContentContainer>
        <StyledSubmitListBounty className="list-bounty-btn" type="button">
          List Button
        </StyledSubmitListBounty>
        {/* ====== INSERT UNIQUE CONTENT ABOVE HERE ====== */}

      </StyledListBountyBody>
    </StyledListBountyContainer>
  );
}
