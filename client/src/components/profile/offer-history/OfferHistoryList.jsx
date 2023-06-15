import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Stack from 'react-bootstrap/Stack';
import OfferHistoryEntry from './OfferHistoryEntry.jsx';

function OfferHistoryList({ bountyId }) {
  const [bountyOffers, setBountyOffers] = useState([]);

  const getOffers = () => {
    axios
      .get(`http://${process.env.REACT_APP_SERVER_IP}:${process.env.SERVER_PORT}/api/offers`, {
        params: { sellerID: 1 },
      })
      .then((r) => setBountyOffers(r.data))
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getOffers();
  }, []);

  return (
    <div>
      <h2>Total Offers: {bountyOffers.length}</h2>
      <Stack gap={3}>
        {bountyOffers.map((offer) => (
          <OfferHistoryEntry offer={offer} getOffers={getOffers} />
        ))}
      </Stack>
    </div>
  );
}

export default OfferHistoryList;
