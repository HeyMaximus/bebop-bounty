import React from 'react';
import {
  StyledBountyCard,
  StyledTitle,
  StyledCategory,
  StyledDeadline,
  StyledDescription,
  StyledPreferredPayment,
  StyledRatingBox,
  StyledMakeOfferButton,
  StyledCurrentOffers,
} from './StyledBountyBoard';

export default function BountyCardBack({ Context }) {
  console.log(Context);

  return (
    <StyledBountyCard>
      BountyCard
      <StyledTitle>Title</StyledTitle>
      <StyledCategory>Category</StyledCategory>
      <StyledDeadline>Deadline</StyledDeadline>
      <StyledDescription>Description</StyledDescription>
      <StyledPreferredPayment>Preferred Payment</StyledPreferredPayment>
      <StyledRatingBox>Rating Box</StyledRatingBox>
      <StyledMakeOfferButton>Make an Offer</StyledMakeOfferButton>
      <StyledCurrentOffers>Current Offers</StyledCurrentOffers>
    </StyledBountyCard>
  );
}
