import React, { useState } from 'react';

export default function NewOfferModal() {
  console.log('ahoyhoy');
  const [newOfferInputs, setNewOfferInputs] = useState({
    bounty_id: '',
    seller_id: '',
    condition: '',
    offer_amount: '',
    complete: false,
    image: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewOfferInputs((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      Condition:
      <input
        type="text"
        name="condition"
        value={newOfferInputs.condition}
        onChange={handleChange}
      />
      <br />
      Offer Amount:
      <input
        type="text"
        name="offer_amount"
        value={newOfferInputs.offer_amount}
        onChange={handleChange}
      />
      <br />
      Upload An Image{' '}
      <input type="text" name="image" value={newOfferInputs.image} onChange={handleChange} />
    </div>
  );
}
