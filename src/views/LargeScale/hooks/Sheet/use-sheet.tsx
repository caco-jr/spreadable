import React, {
  useState,
  useContext,
  createContext,
  ReactNode,
  useEffect,
} from 'react';

import { ISheet } from '@interfaces/Sheet';

type ISheetHookContext = {
  sheet: ISheet;
  setSheet: (data: ISheet) => void;
};

const sheetContext = createContext<ISheetHookContext>({} as ISheetHookContext);

export function SheetProvider({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const sheet = useProvideSheet();

  return (
    <sheetContext.Provider value={sheet}>{children}</sheetContext.Provider>
  );
}

export const useSheet = (): ISheetHookContext => {
  return useContext(sheetContext);
};

const useProvideSheet = (): ISheetHookContext => {
  const [sheet, setSheet] = useState(null);
  const SHEET_CACHE_KEY = 'sheet';

  const handleSheet = (sheetObject: ISheet): void => {
    sessionStorage.setItem(SHEET_CACHE_KEY, JSON.stringify(sheetObject));

    setSheet(sheetObject);
  };

  useEffect(() => {
    const cache = sessionStorage.getItem(SHEET_CACHE_KEY);

    cache && setSheet(JSON.parse(cache));
  }, []);

  return { sheet, setSheet: handleSheet };
};
