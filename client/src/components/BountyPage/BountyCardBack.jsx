import React from 'react';
import styled from 'styled-components';

export default function BountyCardBack({ Context }) {
  return (
    <div className="bounty-card">
      BountyCard
      <div className="title">Title</div>
      <div className="category">category</div>
      <div className="deadlin">deadline</div>
      <div className="description">Description</div>
      <div className="preferrec-payment">PreferredPayment</div>
      <div className="ratingbox">RatingBox</div>
      <button className="make-offer">Make an Offer</button>
      <div className="current-offers">Current Offers</div>
    </div>
  );
}
