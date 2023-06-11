import React from 'react';
import {
  BountyCard,
  Image,
  Price,
  Title,
  Wanted,
  BuyerName,
  MakeOfferButton,
  CurrentOffers,
  Deadline,
} from './StyledComponents';

export default function BountyCardFront({ context }) {
  console.log(context);
  return (
    <BountyCard>
      BountyCard
      <Image src="" />
      <Price>$10,000</Price>
      <Title>Title</Title>
      <Wanted>WANTED</Wanted>
      <BuyerName>BuyerName</BuyerName>
      <MakeOfferButton>Make an Offer</MakeOfferButton>
      <CurrentOffers>Current Offers</CurrentOffers>
      <Deadline>Deadline</Deadline>
    </BountyCard>
  );
}
