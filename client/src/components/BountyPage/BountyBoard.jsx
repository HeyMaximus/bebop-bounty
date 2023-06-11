import React, { useContext } from 'react';
import GlobalContext from '../GlobalContext.jsx';
import BountyCard from './BountyCard.jsx';

export default function BountyBoard() {
  const Context = useContext(GlobalContext);

  const cards = <BountyCard Context={Context} />;
  return (
    <div id="bounty-board">
      <div className="dropdown">SORT BY</div>
      {cards}
    </div>
  );
}
