import React, { useContext, useState } from 'react';
import { BountyPageBorder, FilterBar, FilterSelector } from './styled-components/bountypage.styled';
import NavBar from '../common/nav-bar/NavBar.jsx';
import BountyBoard from './BountyBoard.jsx';

export default function BountyPage() {
  const [filter, setFilter] = useState('All items');

  return (
    <BountyPageBorder>
      <NavBar />
      <FilterBar>
        <FilterSelector value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option>All Items</option>
          <option>Price</option>
          <option>Category</option>
          <option>Location</option>
        </FilterSelector>
      </FilterBar>
      <BountyBoard />
    </BountyPageBorder>
  );
}
