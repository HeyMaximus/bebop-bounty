import React from 'react';
import { GlobalContextProvider } from './GlobalContext.jsx';

function App() {
  return (
    <GlobalContextProvider>
      <div>Bebop Bounty</div>
    </GlobalContextProvider>
  );
}

export default App;
