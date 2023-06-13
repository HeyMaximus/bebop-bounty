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

export default function BountyCardBack({ Context, flipCard }) {
  return (
    <StyledBountyCardBack>
      <StyledTitle>Title</StyledTitle>
      <StyledCategory>Category</StyledCategory>
      <StyledDeadline>Deadline</StyledDeadline>
      <StyledDescription>Description</StyledDescription>
      <StyledPreferredPayment>Preferred Payment</StyledPreferredPayment>
      <OfferLayout>
        <StyledMakeOfferButton onClick={OpenOfferModal}>Make an Offer</StyledMakeOfferButton>
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
