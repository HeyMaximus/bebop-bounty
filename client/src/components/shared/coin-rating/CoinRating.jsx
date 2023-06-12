import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import CoinIcon from '../../../assets/coin-icon.svg';

const Host = styled.div`
  display: flex;
  width: fit-content;
  margin: 0;
  height: fit-content;
  background: ${(props) => `linear-gradient(90deg, gold ${props.rating}, grey ${props.rating})`};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Coin = styled.img`
  height: 30px;
  width: 30px;
`;

function CoinRating({ rating }) {
  return (
    <Host rating={rating}>
      <Coin src={CoinIcon} />
      <Coin src={CoinIcon} />
      <Coin src={CoinIcon} />
      <Coin src={CoinIcon} />
      <Coin src={CoinIcon} />
    </Host>
  );
}

export default CoinRating;

// background: linear-gradient(90deg, gold var(--ratings), var(--star-background) var(--ratings));
