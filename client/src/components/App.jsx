/* eslint-disable import/extensions */
/* eslint-disable react/button-has-type */
import React from 'react';
import SignUp from './signup/SignUp.jsx';
// import { GlobalContextProvider } from './GlobalContext';

function App() {
  const [isSignIn, setIsSignIn] = React.useState(false);
  return (
    // <GlobalContextProvider>
    <div>
      Bebop Bounty
      {!isSignIn && <SignUp setIsSignIn={setIsSignIn} />}
      {isSignIn && (
        <div>
          Sign in page
          <button onClick={() => setIsSignIn(false)}>sign out</button>
        </div>
      )}
    </div>
    // </GlobalContextProvider>
  );
}

export default App;
