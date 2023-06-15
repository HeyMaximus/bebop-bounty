import React, { useState, createContext, useMemo } from 'react';

export const GlobalContext = createContext();

export function GlobalContextProvider({ children }) {
  const [userData, setUserData] = useState({});
  const [userBounties, setUserBounties] = useState([]);
  const [userTransactions, setUserTransactions] = useState([]);

  const globalContextMemo = useMemo(
    () => ({
      userBounties,
      setUserBounties,
      userData,
      setUserData,
      userTransactions,
      setUserTransactions,
    }),
    [userBounties]
  );

  return <GlobalContext.Provider value={globalContextMemo}>{children}</GlobalContext.Provider>;
}
