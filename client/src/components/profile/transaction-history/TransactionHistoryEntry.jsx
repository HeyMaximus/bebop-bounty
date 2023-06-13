import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Host = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

function TransactionHistoryEntry({ entry }) {
  
  return (
    <Host>
  <div>[entry.role] {entry.amount} for (entry.item) on {entry.date}</div>
  <div>Earned {entry.amount} for (entry.item) on {entry.date}</div>
    </Host>
  );
}

export default TransactionHistoryEntry;