export type ISpreadsheet = {
  fileName: string;
  headers: Array<string>;
  rows: Array<Array<string | number>>;
  refinedData: Array<Record<string, number>>;
  originalData: Array<Array<string | number>>;
};
