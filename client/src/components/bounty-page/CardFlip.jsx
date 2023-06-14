import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import BountyCardFront from './BountyCard.jsx';
import BountyCardBack from './BountyCardBack.jsx';
import OfferModal from './OfferModal.jsx';

export default function CardFlip({ Context }) {
  const [isFlipped, setIsFlipped] = useState(false);
  console.log(Context);
  const flipCard = (e) => {
    console.log('flip it!');
    e.preventDefault();
    isFlipped ? setIsFlipped(false) : setIsFlipped(true);
  };

  const [offerModal, setOfferModal] = useState(false);

  const showOfferModal = () => {
    console.log(offerModal);

    setOfferModal(!offerModal);
  };

  return (
    <>
      {offerModal && (
        <OfferModal offerModal={offerModal} showOfferModal={showOfferModal} Context={Context} />
      )}
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <BountyCardFront Context={Context} flipCard={flipCard} showOfferModal={showOfferModal}>
          FRONT of card
        </BountyCardFront>

        <BountyCardBack Context={Context} flipCard={flipCard} showOfferModal={showOfferModal}>
          BACK of card
        </BountyCardBack>
      </ReactCardFlip>
    </>
  );
}
