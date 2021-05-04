import React, { useState, useContext, createContext, ReactNode } from 'react';

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

  return { sheet, setSheet };
};
