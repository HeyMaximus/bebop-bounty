import React from 'react';
import { OpenOfferModal } from './helpers.js';
import CoinRating from '../common/coin-rating/CoinRating.jsx';

import {
  StyledBountyCardBack,
  StyledTitle,
  StyledCategory,
  StyledDeadline,
  StyledDescription,
  StyledPreferredPayment,
  StyledRatingBox,
  StyledMakeOfferButton,
  StyledCurrentOffers,
  FlipToFront,
  OfferLayout,
} from './StyledBountyBoard';

export default function BountyCardBack({ Context, flipCard, showOfferModal }) {
  const { name, category, description, preferred_payment } = Context;
  let { deadline } = Context;
  [deadline] = deadline.split(' ');
  return (
    <StyledBountyCardBack>
      <StyledTitle>{name}</StyledTitle>
      <StyledCategory>Category: {category}</StyledCategory>
      <StyledDeadline>Deadline: {deadline}</StyledDeadline>
      <StyledDescription>Description: {description}</StyledDescription>
      <StyledPreferredPayment>Preferred Payment Option:{preferred_payment}</StyledPreferredPayment>
      <OfferLayout>
        <StyledMakeOfferButton onClick={showOfferModal}>Make an Offer</StyledMakeOfferButton>
        <StyledCurrentOffers>Current Offers</StyledCurrentOffers>
      </OfferLayout>
      <OfferLayout>
        {/* <StyledRatingBox>
          <CoinRating />
        </StyledRatingBox> */}
        <StyledRatingBox>Coin Rating</StyledRatingBox>
        <FlipToFront onClick={flipCard}> Flip to Front</FlipToFront>
      </OfferLayout>
    </StyledBountyCardBack>
  );
}
