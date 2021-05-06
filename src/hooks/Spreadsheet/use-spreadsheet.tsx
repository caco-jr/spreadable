import React, {
  useState,
  useContext,
  createContext,
  ReactNode,
  useEffect,
} from 'react';

import { ISpreadsheet } from '@interfaces/Spreadsheet';

type ISpreadsheetHookContext = {
  spreadsheet: ISpreadsheet;
  setSpreadsheet: (data: ISpreadsheet) => void;
  removeSpreadsheet: () => void;
  selectedItems: Record<string, number>[];
  setSelectedItems: (selectedList: Record<string, number>[]) => void;
};

const spreadsheetContext = createContext<ISpreadsheetHookContext>(
  {} as ISpreadsheetHookContext
);

export function SpreadsheetProvider({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const sheet = useProvideSpreadsheet();

  return (
    <spreadsheetContext.Provider value={sheet}>
      {children}
    </spreadsheetContext.Provider>
  );
}

export const useSpreadsheet = (): ISpreadsheetHookContext => {
  return useContext(spreadsheetContext);
};

const useProvideSpreadsheet = (): ISpreadsheetHookContext => {
  const [spreadsheet, setSpreadsheet] = useState(null);
  const [selectedItems, setSelectedItems] = useState<Record<string, number>[]>(
    []
  );

  const SHEET_CACHE_KEY = 'spreadsheet';

  const handleSheet = (sheetObject: ISpreadsheet): void => {
    sessionStorage.setItem(SHEET_CACHE_KEY, JSON.stringify(sheetObject));

    setSpreadsheet(sheetObject);
  };

  const removeSpreadsheet = (): void => {
    sessionStorage.removeItem(SHEET_CACHE_KEY);
    setSpreadsheet(null);
  };

  useEffect(() => {
    const cache = sessionStorage.getItem(SHEET_CACHE_KEY);

    cache && setSpreadsheet(JSON.parse(cache));
  }, []);

  return {
    spreadsheet,
    setSpreadsheet: handleSheet,
    removeSpreadsheet,
    selectedItems,
    setSelectedItems,
  };
};
