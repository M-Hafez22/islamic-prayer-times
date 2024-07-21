import React, { createContext, ReactNode } from "react";
import { useFetch } from '../hooks/useFetch';
import { useLocation } from '../hooks/useLocation';
import { FetchedData } from '../../types';

interface FetchedDataContextType {
  loaded: boolean;
  data: FetchedData | null;
}

export const FetchedDataContext = createContext<FetchedDataContextType | undefined>(undefined);

interface FetchedDataProviderProps {
  children: ReactNode;
}

export function FetchedDataProvider({ children }: FetchedDataProviderProps) {
  const [latitude, longitude] = useLocation();
  const date = Math.floor(Date.now() / 1000);
  const [loaded, data] = useFetch(`https://api.aladhan.com/v1/timings/${date}?latitude=${latitude}&longitude=${longitude}`);

  return (
    <FetchedDataContext.Provider value={{ loaded: loaded ?? false, data }}>
      {children}
    </FetchedDataContext.Provider>
  );
}
