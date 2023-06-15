import React, { useContext, useState } from 'react';
import GlobalContext from '../GlobalContext.jsx';
// import CardFlip from './CardFlip.jsx';
import BountyCard from './BountyCard.jsx';
import OfferModal from './OfferModal.jsx';

import NewOfferModal from './OfferInputs.jsx';

import {
  StyledBountyBoardWrapper,
  StyledDropdown,
  StyledCardFlip,
  StyledBountyCollection,
  StyledSeeMore,
} from './StyledBountyBoard';

export default function BountyBoard({ Context, allBounties }) {
  const Cards = allBounties.map((bounty) => <StyledCardFlip key={bounty.id} Bounty={bounty} />);

  return (
    <>
      <StyledBountyBoardWrapper>
        <StyledBountyCollection>{Cards}</StyledBountyCollection>
        {/* <NewOfferModal /> */}
      </StyledBountyBoardWrapper>
    </>
  );
}
