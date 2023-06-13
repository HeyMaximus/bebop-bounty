import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';

const Host = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em;
`;

const TransactionList = styled.div`
  width: 60vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TransactionEntry = styled.div`
  width: 100%;
  border: 1px solid black;
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
const mockTransactions = [
  {
    id: 1,
    offer_id: 1,
    bounty_id: 'bob',
    seller_id: 1,
    buyer_id: 2,
    sale_amount: 20.0,
    transaction_date: '2023-06-01',
    buyer_rating: 'good',
    seller_rating: 'good',
    buyer_feedback: 'Great service. Fast delivery. I would highly recommend.',
    seller_feedback: 'Excellent buyer. Prompt payment. Would love to deal with again.',
    item: {
      title: 'T-shirt',
      imageUrl:
        'https://i5.walmartimages.com/asr/d94edfb1-531b-4d23-8992-174069b0e4f9.de39179e00b7e25a98b09c1fec9f98da.jpeg',
    },
    type: 'item sold',
  },
  {
    id: 2,
    offer_id: 2,
    bounty_id: 2,
    seller_id: 3,
    buyer_id: 'steve',
    sale_amount: 15.0,
    transaction_date: '2023-06-02',
    buyer_rating: 'bad',
    seller_rating: 'good',
    buyer_feedback: 'The product was not as described. Disappointed.',
    seller_feedback: 'Buyer had unrealistic expectations. Still, a smooth transaction.',
    item: {
      title: 'Laptop',
      imageUrl:
        'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4LJcl?ver=3fd0&q=90&m=6&h=705&w=1253&b=%23FFFFFFFF&f=jpg&o=f&p=140&aim=true',
    },
    type: 'bounty posted',
  },
];

function TransactionHistory() {
  const [transactions, setTransactions] = useState(mockTransactions);

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
