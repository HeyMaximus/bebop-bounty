import React from 'react';
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
  console.log(Context);

  return (
    <StyledBountyCardBack>
      <StyledTitle>Title</StyledTitle>
      <StyledCategory>Category</StyledCategory>
      <StyledDeadline>Deadline</StyledDeadline>
      <StyledDescription>Description</StyledDescription>
      <StyledPreferredPayment>Preferred Payment</StyledPreferredPayment>
      <OfferLayout>
        <StyledMakeOfferButton>Make an Offer</StyledMakeOfferButton>
        <StyledCurrentOffers>Current Offers</StyledCurrentOffers>
      </OfferLayout>
      <OfferLayout>
        <StyledRatingBox>Rating Box</StyledRatingBox>
        <FlipToFront onClick={flipCard}> Flip to Front</FlipToFront>
      </OfferLayout>
    </StyledBountyCardBack>
  );
}
