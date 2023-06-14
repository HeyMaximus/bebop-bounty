import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Host = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

function TransactionHistoryEntry({ userId, entry }) {

  const date = new Date(entry.transaction_date).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"});
  return (
    <Host>
      <div>{entry.seller_id === userId ? 'Earned' : 'Paid'} {entry.sale_amount} for {entry.item || 'pizza'} on {date}</div>
    </Host>
  );
}

export default TransactionHistoryEntry;
