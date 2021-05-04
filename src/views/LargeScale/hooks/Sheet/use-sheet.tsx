import React, { useState, useContext, createContext, ReactNode } from 'react';

type ISheetHookContext = {
  sheet: any;
  setSheet: (data: any) => void;
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
