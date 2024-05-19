import React, { createContext, useContext, useState } from 'react';

const GlassEffectContext = createContext();

export const GlassEffectProvider = ({ children }) => {
  const [isGlassEffectEnabled, setIsGlassEffectEnabled] = useState(true);

  return (
    <GlassEffectContext.Provider value={{ isGlassEffectEnabled, setIsGlassEffectEnabled }}>
      {children}
    </GlassEffectContext.Provider>
  );
};

export const useGlassEffect = () => useContext(GlassEffectContext);