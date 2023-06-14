import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Host = styled.div``;

const TransactionList = styled.div``;

const TransactionEntry = styled.div`
  width: 80%;
  margin-bottom: 1em;
  display: flex;
  flex-direction: column;
  padding: 1em;
  img {
    width: 60px;
    height: 60px;
    object-fit: cover;
  }
`;

const TransactionTop = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

function TransactionHistory({ transactions }) {
  return (
    <Host>
      <TransactionList>
        {transactions.map((transaction) => (
          <TransactionEntry key={transaction.id}>
            <TransactionTop>
              <div>{transaction.item.title}</div>
              <div>{transaction.transaction_date}</div>
            </TransactionTop>
            <div>{transaction.type}</div>
            <img src={transaction.item.imageUrl} alt={transaction.item.title} />
            <div>
              Completed with {transaction.buyer_id} on {transaction.transaction_date}
            </div>
          </TransactionEntry>
        ))}
      </TransactionList>
    </Host>
  );
}

export default TransactionHistory;
