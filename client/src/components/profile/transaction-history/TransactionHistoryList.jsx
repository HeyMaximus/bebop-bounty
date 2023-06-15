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

function TransactionHistoryList() {
  const [userTransactions, setUserTransactions] = useState([]);

//mock data
  const mockUserTransaction = [
    { seller_id: 123, sale_amount: 12.12, item: 'Berkin Bag', transaction_date: '01/01/23' },
    { seller_id: 123, sale_amount: 12.12, item: 'Berkin Shoe', transaction_date: '01/02/23' },
    { seller_id: 1, sale_amount: 12.12, item: 'Berkin Belt', transaction_date: '01/01/23' },
  ];
  const userId = 1;

  const getUserTransactions = () => {

    axios
      .get(`http://${process.env.REACT_APP_SERVER_IP}:${process.env.SERVER_PORT}/api/transactions`, {params: {userID: 1}})
      .then((r) => setUserTransactions(r.data))
      .catch((e) => console.log(e));
  };

useEffect(()=> {
  getUserTransactions()
}, [])

  return (
    <Host>
      <Stack gap={3}>
        {userTransactions.map((entry) => <TransactionHistoryEntry userId={userId} entry={entry} />)}
      </Stack>
    </Host>
  );
}

export default TransactionHistoryList;
