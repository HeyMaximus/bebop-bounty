import React, { useState, useEffect } from 'react';
import { OpenOfferModal } from './helpers.js';
import CoinRating from '../common/coin-rating/CoinRating.jsx';
import axios from 'axios';

import Button from 'react-bootstrap/Button';

import {
  StyledBountyCardBack,
  StyledTitle,
  StyledRatingBox,
  StyledMakeOfferButton,
  StyledCurrentOffers,
  FlipToFront,
  OfferLayout,
  StyledCardBackText,
  OfferLayoutCenter,
  StyledCardBackBottom,
} from './StyledBountyBoard';

export default function BountyCardBack({ Bounty, flipCard, showOfferModal }) {
  const { name, category, description, preferred_payment, offer_count, buyer_id } = Bounty;
  const [user, setUser] = useState(null);

  let { deadline } = Bounty;
  [deadline] = deadline.split(' ');
  deadline = deadline.substring(5, 10);
  deadline = deadline.replaceAll('-', '/');
  if (deadline.charAt(0) === '0') {
    deadline = deadline.slice(1);
  }

  useEffect(() => {
    axios
      .get(`http://54.176.108.13:8080/api/users/${buyer_id}?auth=false`)
      .then((response) => {
        setUser(response.data[0]);
      })
      .catch((err) => console.log('Err in sendUserDataToServer: ', err));
  }, []);

  return (
    <StyledBountyCardBack onClick={flipCard}>
      <StyledTitle>{name}</StyledTitle>

      <StyledCardBackText>Category: {category}</StyledCardBackText>
      <StyledCardBackText>Deadline: {deadline}</StyledCardBackText>
      <StyledCardBackText>Description: {description}</StyledCardBackText>
      <StyledCardBackText>Preferred Payment:{preferred_payment}</StyledCardBackText>

      <OfferLayoutCenter>
        <Button onClick={showOfferModal} variant="success" size="sm">
          Make An Offer!
        </Button>
      </OfferLayoutCenter>
      <StyledCardBackBottom>
        <StyledRatingBox>{user && <CoinRating size="20px" user={user} />}</StyledRatingBox>
        <StyledCurrentOffers>Current Offers</StyledCurrentOffers>
      </StyledCardBackBottom>

    </StyledBountyCardBack>
  );
}
