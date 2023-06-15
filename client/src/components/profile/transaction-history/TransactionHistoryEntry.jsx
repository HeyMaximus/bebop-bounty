import React from 'react';
import { TransEntry } from '../BountyHistoryStyles';

function TransactionHistoryEntry({ userID, entry }) {
  const date = new Date(entry.transaction_date).toLocaleDateString('en-us', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <TransEntry>
      {entry.seller_id === userID ? 'Earned' : 'Paid'} {entry.sale_amount} for{' '}
      {entry.item || 'pizza'} on {date}
    </TransEntry>
  );
}

export default TransactionHistoryEntry;
