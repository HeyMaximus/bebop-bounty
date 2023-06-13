import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import BountyCardFront from './BountyCard.jsx';
import BountyCardBack from './BountyCardBack.jsx';

export default function CardFlip({ Context }) {
  const [isFlipped, setIsFlipped] = useState(false);
  console.log(Context);
  const flipCard = (e) => {
    console.log('flip it!');
    e.preventDefault();
    isFlipped ? setIsFlipped(false) : setIsFlipped(true);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      <BountyCardFront Context={Context} flipCard={flipCard}>
        FRONT of card
      </BountyCardFront>

      <BountyCardBack Context={Context} flipCard={flipCard}>
        BACK of card
      </BountyCardBack>
    </ReactCardFlip>
  );
}
