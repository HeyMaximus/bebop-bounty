import React from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

function OfferHistoryEntry({ offer, getOffers }) {
  const handleBuyClick = () => {
    axios
      .post(`http://${process.env.REACT_APP_SERVER_IP}:${process.env.SERVER_PORT}/api/transactions`, { offerID: offer.id })
      .then(getOffers())
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Button onClick={handleBuyClick} variant="success" size="sm">
        Buy
      </Button>{' '}
      {'  '}{offer.condition} condition from {offer.seller_name} for ${offer.offer_amount}
    </div>
  );
}

export default OfferHistoryEntry;
