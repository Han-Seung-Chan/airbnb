import React, { createContext, useCallback, useState } from 'react';

export const OpenModalContext = createContext();

function OpenModalProvider({ children }) {
  const [selectedContent, setSelectedContent] = useState(null);

  const handleClickSearchBarBtn = useCallback(
    (contentType) => {
      if (!contentType) setSelectedContent(null);
      else if (selectedContent === contentType)
        setSelectedContent(selectedContent);
      else {
        setSelectedContent(contentType);
      }
    },
    [selectedContent],
  );

  return (
    <OpenModalContext.Provider
      value={{ selectedContent, handleClickSearchBarBtn }}
    >
      {children}
    </OpenModalContext.Provider>
  );
}

export default OpenModalProvider;
