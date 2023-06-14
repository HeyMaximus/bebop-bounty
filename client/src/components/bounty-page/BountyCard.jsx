import React from 'react';
import BountyCardBack from './BountyCardBack.jsx';
import { OpenOfferModal } from './helpers.js';
import coinGoldImage from '../../assets/coin-gold.png'; // Import the image

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

export default function BountyCardFront({ Context, flipCard, isFlipped }) {
  const { id, buyer_id, name, price, deadline, image } = Context;
  return (
    <StyledBountyCard onClick={flipCard} isFlipped={isFlipped}>
      <StyledImageContainer>
        <StyledImage src={image} />
        <StyledPrice>${price}</StyledPrice>
        <StyledWanted>WANTED</StyledWanted>
      </StyledImageContainer>
      <StyledMidcardContainer>
        <div>
          <StyledTitle>{name}</StyledTitle>
          <StyledBuyerName>BuyerName</StyledBuyerName>
        </div>
        <StyledMakeOfferButton onClick={OpenOfferModal}>Make an Offer</StyledMakeOfferButton>
      </StyledMidcardContainer>
      <StyledBottomCardContainer>
        <StyledCurrentOffers>Current Offers: ###</StyledCurrentOffers>
        <StyledDeadline>{deadline}</StyledDeadline>
      </StyledBottomCardContainer>
    </StyledBountyCard>
  );
}