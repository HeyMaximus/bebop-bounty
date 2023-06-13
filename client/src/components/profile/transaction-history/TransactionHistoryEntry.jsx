import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Host = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

function TransactionHistoryEntry({ userId, entry }) {

  return (
    <Host>
  <div>{entry.seller_id === userId ? 'Earned' : 'Paid'} {entry.sale_amount} for (entry.item) on {entry.transaction_date}</div>
    </Host>
  );
}

export default TransactionHistoryEntry;