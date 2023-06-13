import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

//boostrap layout styling
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import TransactionHistoryEntry from './TransactionHistoryEntry.jsx';

const Host = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

function TransactionHistoryList({ userId }) {
  const [userTransactions, setUserTransactions] = useState([]);


  const getUserTransactions = (e) => {
    axios
      .post()
      .then()
      .catch((e) => console.log(e));
  };

  return (
    <Host>
      <Stack gap={3}>
      {userTransactions.map((entry) => <TransactionHistoryEntry entry={entry} />)}
      </Stack>
    </Host>
  );
}

export default TransactionHistoryList;
