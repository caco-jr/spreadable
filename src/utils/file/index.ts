import XLSX from 'xlsx';

import { toCamelCase } from '@utils/strings/index';
import { ISpreadsheet } from '@interfaces/Spreadsheet';

export const sheetToObject = (
  blob: Blob,
  callback: (sheet: ISpreadsheet) => void
): void => {
  const reader = new FileReader();

  reader.onload = function (e) {
    const data = e.target.result;
    const dataRead = XLSX.read(data, { type: 'binary' });
    const workSpaceName = dataRead.SheetNames[0];
    const ws = dataRead.Sheets[workSpaceName];

    /* Convert array to json*/
    const dataParse = XLSX.utils.sheet_to_json<Array<string | number>>(ws, {
      header: 1,
    });

    callback(builder(blob, dataParse));
  };

  reader.readAsBinaryString(blob);
};

const builder = (
  file,
  sheetList: Array<Array<string | number>>
): ISpreadsheet => {
  const headers = sheetList[0].map(item => toCamelCase(`${item}`));
  const rows = sheetList.slice(1);

  const buildObject = (list: Array<string | number>) =>
    list.reduce(
      (accumulator, item, index) => ({
        ...accumulator,
        [headers[index]]: item,
      }),
      {}
    );

  const refinedData = rows.map(item => buildObject(item));

  return {
    fileName: file.name,
    headers,
    rows,
    refinedData,
    originalData: sheetList,
  };
};
