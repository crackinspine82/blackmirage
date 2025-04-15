'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';

interface HoverContextType {
  isHovered: boolean;
  setGlobalHover: (value: boolean) => void;
}

const HoverContext = createContext<HoverContextType | undefined>(undefined);

export function HoverProvider({ children }: { children: React.ReactNode }) {
  const [isHovered, setIsHovered] = useState(false);

  const setGlobalHover = useCallback((value: boolean) => {
    setIsHovered(value);
  }, []);

  return (
    <HoverContext.Provider value={{ isHovered, setGlobalHover }}>
      {children}
    </HoverContext.Provider>
  );
}

export function useHover() {
  const context = useContext(HoverContext);
  if (context === undefined) {
    throw new Error('useHover must be used within a HoverProvider');
  }
  return context;
}
