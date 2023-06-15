/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import moment from 'moment';
import {
  ReviewContainer,
  TransactionContainer,
  ReviewList,
  ReviewEntry,
  ReviewTop,
  ReviewBottom,
  TransactionList,
  TransactionEntry,
  TransactionTop,
  TransactionBottom,
} from './RightContainerStyles';

function UserProfileDetails({ userId, transactions }) {
  return (
    <>
      <ReviewContainer>
        <h2>Reviews:</h2>
        <ReviewList>
          {userId &&
            transactions &&
            transactions.map((transaction) => (
              <ReviewEntry key={transaction.bounty_name + transaction.id}>
                <ReviewTop>
                  <div>
                    {userId === transaction.buyer_id ? ' Seller: ' : 'Buyer: '}
                    {userId === transaction.buyer_id
                      ? transaction.seller_name
                      : transaction.buyer_name}
                  </div>
                </ReviewTop>
                <ReviewBottom>
                  <div>
                    {userId === transaction.buyer_id
                      ? transaction.feedback_to_buyer || 'No review provided.'
                      : transaction.feedback_to_seller || 'No review provided.'}
                  </div>
                  <div>{moment(transaction.transaction_date).fromNow()}</div>
                </ReviewBottom>
              </ReviewEntry>
            ))}
        </ReviewList>
      </ReviewContainer>
      <TransactionContainer>
        <h2>Transaction History:</h2>
        <TransactionList>
          {userId &&
            transactions &&
            transactions.map((transaction) => (
              <TransactionEntry key={transaction.bounty_name + transaction.id}>
                <TransactionTop>
                  <div>Bouty: {transaction.bounty_name}</div>
                </TransactionTop>
                <TransactionBottom>
                  <div>
                    Completed with{' '}
                    {userId === transaction.buyer_id
                      ? transaction.seller_name
                      : transaction.buyer_name}
                    {' as '}
                    {userId === transaction.buyer_id ? ' buyer ' : 'seller'}
                  </div>
                  <div>{moment(transaction.transaction_date).format('YYYY-MM-DD')}</div>
                </TransactionBottom>
              </TransactionEntry>
            ))}
        </TransactionList>
      </TransactionContainer>
    </>
  );
}

export default UserProfileDetails;
