import React from 'react';
import styled from 'styled-components';

import { TransEntry } from '../BountyHistoryStyles';

function TransactionHistoryEntry({ userId, entry }) {
  const date = new Date(entry.transaction_date).toLocaleDateString('en-us', { year: "numeric", month: "long", day: "numeric" });
  return (
    <TransEntry>
      {entry.seller_id === userId ? 'Earned' : 'Paid'} {entry.sale_amount} for{' '}
      {entry.item || 'pizza'} on {date}
    </TransEntry>
  );
}

export default TransactionHistoryEntry;
