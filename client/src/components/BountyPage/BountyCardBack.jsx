import React from 'react';
import {
  BountyCard,
  Title,
  Category,
  Deadline,
  Description,
  PreferredPayment,
  RatingBox,
  MakeOfferButton,
  CurrentOffers,
} from './StyledBountyBoard';

export default function BountyCardBack({ Context }) {
  console.log(Context);

  return (
    <BountyCard>
      BountyCard
      <Title>Title</Title>
      <Category>Category</Category>
      <Deadline>Deadline</Deadline>
      <Description>Description</Description>
      <PreferredPayment>Preferred Payment</PreferredPayment>
      <RatingBox>Rating Box</RatingBox>
      <MakeOfferButton>Make an Offer</MakeOfferButton>
      <CurrentOffers>Current Offers</CurrentOffers>
    </BountyCard>
  );
}
