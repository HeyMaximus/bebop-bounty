import React from 'react';
import BountyCardBack from './BountyCardBack.jsx';
import { OpenOfferModal } from './helpers.js';
import {
  StyledBountyCard,
  StyledImage,
  StyledPrice,
  StyledTitle,
  StyledWanted,
  StyledBuyerName,
  StyledMakeOfferButton,
  StyledCurrentOffers,
  StyledDeadline,
} from './StyledBountyBoard';

export default function BountyCardFront({ Context }) {
  console.log(Context);

  return (
    <StyledBountyCard>
      BountyCard
      <StyledImage src="" />
      <StyledPrice>$10,000</StyledPrice>
      <StyledTitle>Title</StyledTitle>
      <StyledWanted>WANTED</StyledWanted>
      <StyledBuyerName>BuyerName</StyledBuyerName>
      <StyledMakeOfferButton onClick={OpenOfferModal}>Make an Offer</StyledMakeOfferButton>
      <StyledCurrentOffers>Current Offers</StyledCurrentOffers>
      <StyledDeadline>Deadline</StyledDeadline>
    </StyledBountyCard>
  );
}
