import React, { useState, createContext, useMemo } from 'react';

export const GlobalContext = createContext();

export function GlobalContextProvider({ children }) {
  const [allBounties, setAllBounties] = useState([]);
  const [userBounties, setUserBounties] = useState([]);
  const globalContextMemo = useMemo(
    () => ({
      allBounties,
      setAllBounties,
      userBounties,
      setUserBounties,
    }),
    [allBounties, userBounties]
  );

  return <GlobalContext.Provider value={globalContextMemo}>{children}</GlobalContext.Provider>;
}