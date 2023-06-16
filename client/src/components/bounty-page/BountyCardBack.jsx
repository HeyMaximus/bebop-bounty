
import React from 'react';
import Button from 'react-bootstrap/Button';
import { OpenOfferModal } from './helpers.js';
import CoinRating from '../common/coin-rating/CoinRating.jsx';
import { StyledBountyCardBack } from '../../theme';

import {
  StyledTitle,
  StyledRatingBox,
  StyledMakeOfferButton,
  StyledCurrentOffers,
  FlipToFront,
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

      <StyledCategory>Category: {category}</StyledCategory>
      <StyledDescription>Description: {description}</StyledDescription>
      <StyledPreferredPayment>Preferred Payment: {preferred_payment}</StyledPreferredPayment>

      <OfferLayoutCenter>
        <Button onClick={showOfferModal} variant="success" size="sm">
          Make An Offer!
        </Button>
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
