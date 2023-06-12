/* eslint-disable import/extensions */
/* eslint-disable react/button-has-type */
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { GlobalContextProvider } from './GlobalContext.jsx';
import SignUp from './signup/SignUp.jsx';
import Landing from './landing/Landing.jsx';
import Profile from './profile/Profile.jsx';
import Login from './login/Login.jsx';
import BountyHistory from './profile/bounty-history/BountyHistory.jsx';
import BountyBoard from './bounty-board/BountyBoard.jsx';
import OfferHistory from './profile/offer-history/OfferHistory.jsx';

function App() {
  const [isSignIn, setIsSignIn] = React.useState(false);
  return (
    <GlobalContextProvider>
      <div>Bebop Bounty</div>
      <BrowserRouter>
        <Routes>
          <>
            {!isSignIn && <SignUp setIsSignIn={setIsSignIn} />}
            {isSignIn && (
              <div>
                Sign in page
                <button onClick={() => setIsSignIn(false)}>sign out</button>
              </div>
            )}
          </>
          <Route index element={<Navigate to="landing" />} />
          <Route path="landing" element={<Landing />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
          <Route path="bounty-board" element={<BountyBoard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="profile/bounty-history" element={<BountyHistory />} />
          <Route path="profile/offer-history" element={<OfferHistory />} />
          <Route path="/*" element={<Navigate to="landing" />} />
        </Routes>
      </BrowserRouter>
      <Outlet />
    </GlobalContextProvider>
  );
}

export default App;
