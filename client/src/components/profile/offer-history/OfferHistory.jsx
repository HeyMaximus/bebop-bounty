import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';

const Host = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

function OfferHistory() {
  return (
    <Host>
      <div>Offer history</div>
    </Host>
  );
}

export default OfferHistory;
