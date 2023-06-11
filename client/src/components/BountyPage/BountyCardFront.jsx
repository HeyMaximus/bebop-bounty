import React from 'react';
import styled from 'styled-components';

export default function BountyCardFront({ Context }) {
  console.log(context);
  return (
    <div className="bounty-card">
      BountyCard
      <img src="" />
      <div className="price">$10,000</div>
      <div className="title">Title</div>
      <div className="wanted">WANTED</div>
      <div className="buyer-name"> BuyerName</div>
      <button className="make-offer">Make an Offer</button>
      <div className="current-offers">Current Offers</div>
      <div className="deadlin">deadline</div>
    </div>
  );
}
