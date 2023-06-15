import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

//boostrap layout styling
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import TransactionHistoryEntry from './TransactionHistoryEntry.jsx';


function TransactionHistoryList() {
  const [userTransactions, setUserTransactions] = useState([]);
  const [slice, setSlice] = useState(15);
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
<div>
      <Stack gap={1}>
        {userTransactions.slice(0, slice).map((entry) => <TransactionHistoryEntry key={entry.id} userId={userId} entry={entry} />)}
      </Stack>
      {slice < userTransactions.length ? <Button variant="link" size="sm" onClick={() => setSlice(slice+10)}>Show More</Button> : null}
      </div>

  );
}

export default TransactionHistoryList;
