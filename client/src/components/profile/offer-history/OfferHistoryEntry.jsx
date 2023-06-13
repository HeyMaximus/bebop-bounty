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
    axios
      .post()
      .then()
      .catch((e) => console.log(e));
  };

  return (
    <Host>
      <div>{offer.seller}, {offer.condition}, {offer.price}</div>
      <button onClick={(e) => handleBuyClick(e)}>Buy</button>
    </Host>
  );
}

export default OfferHistoryEntry;
