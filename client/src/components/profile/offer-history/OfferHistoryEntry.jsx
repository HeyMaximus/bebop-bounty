import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Button from 'react-bootstrap/Button';

function OfferHistoryEntry({ offer, getOffers }) {

  const handleBuyClick = (e) => {
    console.log('buy clicked on offerID:', offer.id);
    axios
      .post(`http://${process.env.REACT_APP_SERVER_IP}:${process.env.SERVER_PORT}/api/transactions`, {offerID: offer.id} )
      .then((r) => {getOffers(); console.log('Bought!')})
      .catch((e) => console.log(e));
  };

  return (
    <div>
      <Button onClick={handleBuyClick} variant="success" size="sm">Buy</Button> {'  '}| Seller: {offer.seller} | Condition: {offer.condition} | ${offer.offer_amount}

    </div>
  );
}

export default OfferHistoryEntry;
