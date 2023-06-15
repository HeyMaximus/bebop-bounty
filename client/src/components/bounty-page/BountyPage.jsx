import React, { useContext, useState } from 'react';
import { FilterBar, FilterSelector } from './styled-components/bountypage.styled';
import { BountyPageBorder } from '../../theme';
import NavBar from '../common/nav-bar/NavBar.jsx';
import BountyBoard from './BountyBoard.jsx';

export default function BountyPage({ toggleTheme }) {
  const [filter, setFilter] = useState('All items');
  const [allBounties, setAllBounties] = useState([]);

  return (
    <BountyPageBorder>
      <NavBar toggleTheme={toggleTheme} />
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
