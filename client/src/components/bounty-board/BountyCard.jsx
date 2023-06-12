import React from 'react';
import BountyCardBack from './BountyCardBack.jsx';
import { OpenOfferModal } from './helpers.js';
import {
  StyledBountyCard,
  StyledImageContainer,
  StyledImage,
  StyledPrice,
  StyledMidcardContainer,
  StyledTitle,
  StyledWanted,
  StyledBuyerName,
  StyledMakeOfferButton,
  StyledCurrentOffers,
  StyledDeadline,
  StyledBottomCardContainer,
} from './StyledBountyBoard';

export default function BountyCardFront({ Context }) {
  console.log(Context);

  return (
    <StyledBountyCard>
      <StyledImageContainer>
        <StyledImage src="" />
        <StyledPrice>$10,000</StyledPrice>
        <StyledWanted>WANTED</StyledWanted>
      </StyledImageContainer>
      <StyledMidcardContainer>
        <div>
          <StyledTitle>Title</StyledTitle>
          <StyledBuyerName>BuyerName</StyledBuyerName>
        </div>
        <StyledMakeOfferButton onClick={OpenOfferModal}>Make an Offer</StyledMakeOfferButton>
      </StyledMidcardContainer>
      <StyledBottomCardContainer>
        <StyledCurrentOffers>Current Offers: ###</StyledCurrentOffers>
        <StyledDeadline>Deadline</StyledDeadline>
      </StyledBottomCardContainer>
    </StyledBountyCard>
  );
}
