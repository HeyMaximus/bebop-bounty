import React, { useContext, useState, useEffect } from 'react';
import moment from 'moment';
import axios from 'axios';
import { Host, TransactionList, TransactionEntry, TransactionTop } from './RightContainerStyles';

function TransactionHistory({ transactions }) {
  return (
    <Host>
      <TransactionList>
        {transactions.map((transaction) => (
          <TransactionEntry key={transaction.id}>
            <TransactionTop>
              {transaction.item && <div>{transaction.item.title}</div>}
              <div>{moment(transaction.transaction_date).format('YYYY-MM-DD')}</div>
            </TransactionTop>
            <div>{transaction.type}</div>
            {transaction.item && (
              <img src={transaction.item.imageUrl} alt={transaction.item.title} />
            )}
            <div>
              Completed with {transaction.buyer_id} {moment(transaction.transaction_date).fromNow()}
            </div>
          </TransactionEntry>
        ))}
      </TransactionList>
    </Host>
  );
}

export default TransactionHistory;
