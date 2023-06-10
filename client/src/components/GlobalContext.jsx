import React, { useState, createContext, useMemo } from 'react';

export const GlobalContext = createContext();

export function GlobalContextProvider({ children }) {
  const [productID, setProductID] = useState(40344);
  const [product, setProduct] = useState({});
  const [metadata, setMetadata] = useState({});
  const globalContextMemo = useMemo(
    () => ({
      productID,
      setProductID,
      product,
      metadata,
    }),
    [productID, product, metadata]
  );

  return <GlobalContext.Provider value={globalContextMemo}>{children}</GlobalContext.Provider>;
}
