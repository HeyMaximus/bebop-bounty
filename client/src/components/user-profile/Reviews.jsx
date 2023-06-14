import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Host = styled.div``;

const ReviewList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ReviewEntry = styled.div`
  width: 80%;
  margin-bottom: 1em;
  display: flex;
  flex-direction: column;
`;

const ReviewTop = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const mockReviews = [
  {
    id: 1,
    reviewer: 'John Doe',
    comment: 'Great service. Fast delivery. I would highly recommend.',
    date: '2023-06-01',
  },
  {
    id: 2,
    reviewer: 'Jane Smith',
    comment: 'The product was not as described. Disappointed.',
    date: '2023-06-03',
  },
  {
    id: 3,
    reviewer: 'Charlie Brown',
    comment: 'The product arrived on time and in perfect condition.',
    date: '2023-06-05',
  },
  {
    id: 4,
    reviewer: 'Alice Williams',
    comment: 'Excellent service. Product is of high quality.',
    date: '2023-06-07',
  },
  {
    id: 5,
    reviewer: 'Bob Johnson',
    comment: 'Had some issues with delivery, but customer service was helpful.',
    date: '2023-06-09',
  },
];

function Reviews() {
  const [reviews, setReviews] = useState(mockReviews);

  return (
    <Host>
      <ReviewList>
        {reviews.map((review) => (
          <ReviewEntry key={review.id}>
            <ReviewTop>
              <div>{review.reviewer}</div>
              <div>{review.date}</div>
            </ReviewTop>
            <div>{review.comment}</div>
          </ReviewEntry>
        ))}
      </ReviewList>
    </Host>
  );
}

export default Reviews;
