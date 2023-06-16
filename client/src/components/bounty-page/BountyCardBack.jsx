import React from 'react';
import Button from 'react-bootstrap/Button';
import { OpenOfferModal } from './helpers.js';
import CoinRating from '../common/coin-rating/CoinRating.jsx';
import { StyledBountyCardBack } from '../../theme';

import {
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
  OfferLayoutCenter,
} from './StyledBountyBoard';

export default function BountyCardBack({ Bounty, flipCard, showOfferModal }) {

  const { name, category, description, preferred_payment, offer_count } = Bounty;

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
      <StyledDescription>Description: {description}</StyledDescription>
      <StyledPreferredPayment>Preferred Payment: {preferred_payment}</StyledPreferredPayment>
      <OfferLayoutCenter>
        <Button onClick={showOfferModal} variant="success" size="sm">
          Make An Offer!
        </Button>
        {/* <StyledMakeOfferButton onClick={showOfferModal}>Make an Offer</StyledMakeOfferButton> */}
      </OfferLayoutCenter>
      <OfferLayout>

        <StyledRatingBox>
          {/* <CoinRating user={buyer_id} size="20px" /> */}
        </StyledRatingBox>
        {/* <StyledCurrentOffers>Current Offers</StyledCurrentOffers> */}
        {/* <FlipToFront onClick={flipCard}> Flip to Front</FlipToFront> */}
      </OfferLayout>
    </StyledBountyCardBack>
  );
}
