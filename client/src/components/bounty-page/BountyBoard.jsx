import React, { useContext } from 'react';
import GlobalContext from '../GlobalContext.jsx';
// import CardFlip from './CardFlip.jsx';
import BountyCard from './BountyCard.jsx';

import NewOfferModal from './NewOfferModal.jsx';

import {
  StyledBountyBoardWrapper,
  StyledDropdown,
  StyledCardFlip,
  StyledBountyCollection,
} from './StyledBountyBoard';


const fakeContext = [
  {
    id: 1,
    buyer_id: 1,
    name: 'Red Eye',
    description: 'Rare drug',
    condition: 'like new',
    category: 'gadget',
    city: 'Mars',
    state: 'Venus',
    completed: false,
    price: 300,
    deadline: '2023-06-20 0:00:00',
    preferred_payment: 'paypal',
    image:
      'https://static.wikia.nocookie.net/cowboybebop/images/a/a2/Be.png/revision/latest/scale-to-width-down/250?cb=20131205144347',
    created_at: '2023-01-01 00:00:00',
  },
  {
    id: 2,
    buyer_id: 2,
    name: 'Beta Tape',
    description: 'Classic show',
    condition: 'new',
    category: 'clothing',
    city: 'Ganymede',
    state: 'Jupiter',
    completed: false,
    price: 100,
    deadline: '2023-06-25 0:00:00',
    preferred_payment: 'venmo',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Betamax-blank-rear.jpg/220px-Betamax-blank-rear.jpg',
    created_at: '2023-01-02 00:00:00',
  },
  {
    id: 3,
    buyer_id: 3,
    name: 'Data Dog',
    description: 'Special breed dog',
    condition: 'good',
    category: 'gadget',
    city: 'Mars',
    state: 'Earth',
    completed: false,
    price: 500,
    deadline: '2023-06-30 0:00:00',
    preferred_payment: 'zelle',
    image:
      'https://static.wikia.nocookie.net/cowboybebop/images/d/d1/2_Ein2.png/revision/latest?cb=20090316153743',
    created_at: '2023-01-03 00:00:00',
  },
  {
    id: 4,
    buyer_id: 4,
    name: 'iPhone 12',
    description: 'Smartphone',
    condition: 'like new',
    category: 'gadget',
    city: 'Earth',
    state: 'Saturn',
    completed: false,
    price: 800,
    deadline: '2023-06-22 0:00:00',
    preferred_payment: 'paypal',
    image: 'https://i.insider.com/5f8f4178dace450018a3e489?width=700',
    created_at: '2023-01-04 00:00:00',
  },
];

export default function BountyBoard() {
  // const Context = useContext(GlobalContext);

  // const cards = <BountyCard Context={Context} />;

  const Cards = fakeContext.map((bounty) => <StyledCardFlip key={bounty.id} Context={bounty} />);

  return (
    <StyledBountyBoardWrapper>
      <StyledDropdown>
        <option name="Clothing">Clothing</option>
        <option name="Clothing">Clothing</option>
        <option name="Decor">Decor</option>
        <option name="Furniture">Furniture</option>
        <option name="Gadgets">Gadgets</option>
      </StyledDropdown>

      {/* <NewOfferModal /> */}
      {/* <StyledCardFlip Context={'Context'} />
      <StyledCardFlip Context={'Context'} />
      <StyledCardFlip Context={'Context'} />
      <StyledCardFlip Context={'Context'} /> */}
      {Cards}

    </StyledBountyBoardWrapper>
  );
}
