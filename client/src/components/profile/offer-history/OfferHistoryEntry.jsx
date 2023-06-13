import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Host = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

function OfferHistoryEntry({ offer }) {
  const handleBuyClick = (e) => {
    // axios
    //   .post('/transaction', {offerID: e.target.id} )
    //   .then((r) => console.log('Bought!'))
    //   .catch((e) => console.log(e));
  };

  return (
    <Host>
      <div> Seller: {offer.seller} | Condition: {offer.condition} | ${offer.price}</div>
      <button id={offer.id} onClick={(e) => handleBuyClick(e)}>Buy</button>
    </Host>
  );
}

export default OfferHistoryEntry;
