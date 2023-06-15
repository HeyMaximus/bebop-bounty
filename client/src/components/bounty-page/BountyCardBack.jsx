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

export default function BountyCardBack({ Bounty, flipCard, showOfferModal }) {
  const { name, category, description, preferred_payment } = Bounty;
  let { deadline } = Bounty;
  [deadline] = deadline.split(' ');
  deadline = deadline.substring(5, 10);
  deadline = deadline.replaceAll('-', '/');
  if (deadline.charAt(0) === '0') {
    deadline = deadline.slice(1);
  }
  return (
    <StyledBountyCardBack onClick={flipCard}>
      <StyledTitle>{name}</StyledTitle>
      <StyledCategory>Category: {category}</StyledCategory>
      <StyledDeadline>Deadline: {deadline}</StyledDeadline>
      <StyledDescription>Description: {description}</StyledDescription>
      <StyledPreferredPayment>Preferred Payment Option:{preferred_payment}</StyledPreferredPayment>
      <OfferLayout>
        <StyledMakeOfferButton onClick={showOfferModal}>Make an Offer</StyledMakeOfferButton>
      </OfferLayout>
      <OfferLayout>
        {/* <StyledRatingBox>
          <CoinRating />
        </StyledRatingBox> */}
        <StyledRatingBox>Coin Rating</StyledRatingBox>
        <StyledCurrentOffers>Current Offers</StyledCurrentOffers>
        {/* <FlipToFront onClick={flipCard}> Flip to Front</FlipToFront> */}
      </OfferLayout>
    </StyledBountyCardBack>
  );
}
