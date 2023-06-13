import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import OfferHistoryEntry from './OfferHistoryEntry.jsx'

const Host = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

function OfferHistoryList({ bountyId }) {
  const [bountyOffers, setBountyOffers] = useState([]);

  useEffect(() => {
    axios
      .get() //get the array of bountyOffers with a specific bountyId
      .then((r) => setBountyOffers(r.data))
      .catch((e) => console.log(e));
  }, [bountyId]);

  return (
    <Host>
      <div>Total Offers: {bountyOffers.length}</div>
      {bountyOffers.map((offer) => (
        <OfferHistoryEntry offer={offer} />
      ))}
    </Host>
  );
}

export default OfferHistoryList;
