import React from 'react';
import SignUp from './signup/SignUp.jsx';
import { GlobalContextProvider } from './GlobalContext.jsx';

function App() {
  return (
    <GlobalContextProvider>
      <div>
        Bebop Bounty
        <SignUp />
      </div>
    </GlobalContextProvider>
  );
}

export default App;
