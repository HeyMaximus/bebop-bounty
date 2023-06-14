import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import OfferHistoryEntry from './OfferHistoryEntry.jsx';
import Stack from 'react-bootstrap/Stack';

const Host = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

function OfferHistoryList({ bountyId }) {
  const [bountyOffers, setBountyOffers] = useState([]);

  const mockBountyOffers = [
    { id: 123, seller: 'Person1', condition: 'Good', price: 123.45 },
    { id: 456, seller: 'Person1', condition: 'New', price: 65.17 },
    { id: 789, seller: 'Person1', condition: 'Fair', price: 12.12 },
  ];

  // useEffect(() => {
  //   axios
  //     .get('/offers', {param: {bountyID: bountyId, sellerID: ''}})
  //     .then((r) => setBountyOffers(r.data))
  //     .catch((e) => console.log(e));
  // }, [bountyId]);

  return (
    <Host>
      <div>Total Offers: {mockBountyOffers.length}</div>
      <Stack gap={3}>
        {mockBountyOffers.map((offer) => {return <OfferHistoryEntry offer={offer} />})}
      </Stack>
    </Host>
  );
}

export default OfferHistoryList;
