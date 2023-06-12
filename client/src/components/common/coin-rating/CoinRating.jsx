import React from 'react';
import styled from 'styled-components';
import FilledCoinIcon from '../../../assets/filled-coin-icon.svg';
import EmptyCoinIcon from '../../../assets/empty-coin-icon.png';

const Host = styled.div`
  display: flex;
  width: fit-content;
  margin: 0;
  height: fit-content;
  position: relative;
  color: #ccc;
  width: 150px;
  height: 30px;
`;

const FilledCoinContainer = styled.div`
  position: absolute;
  z-index: 1;
  display: flex;
  overflow: hidden;
  width: ${(props) => props.rating};
`;

const FilledCoin = styled.img`
  height: 30px;
  width: 30px;
`;

const EmptyCoinContainer = styled.div`
  position: absolute;
  z-index: 0;
  display: flex;
`;

const EmptyCoin = styled.img`
  height: 30px;
  width: 30px;
`;

function CoinRating({ user }) {
  const rating = `${Math.round(
    (user.rating_thumbs_up / (user.rating_thumbs_up + user.rating_thumbs_down)) * 100
  ).toFixed(2)}%`;
  return (
    <Host>
      <FilledCoinContainer rating={rating}>
        {[...Array(5)].map((i) => (
          <FilledCoin src={FilledCoinIcon} key={i} />
        ))}
      </FilledCoinContainer>
      <EmptyCoinContainer>
        {[...Array(5)].map((i) => (
          <EmptyCoin src={EmptyCoinIcon} key={i} />
        ))}
      </EmptyCoinContainer>
    </Host>
  );
}

export default CoinRating;

// background: linear-gradient(90deg, gold var(--ratings), var(--star-background) var(--ratings));
