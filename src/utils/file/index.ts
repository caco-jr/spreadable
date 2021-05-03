import XLSX from 'xlsx';

import { toCamelCase } from '@utils/strings/index';

export const sheetToObject = (file, callback) => {
  const reader = new FileReader();

  reader.onload = function (e) {
    const data = e.target.result;
    const dataRead = XLSX.read(data, { type: 'binary' });
    const workSpaceName = dataRead.SheetNames[0];
    const ws = dataRead.Sheets[workSpaceName];

    /* Convert array to json*/
    const dataParse = XLSX.utils.sheet_to_json(ws, { header: 1 });

    callback(builder(dataParse));
  };

  reader.readAsBinaryString(file);
};

const builder = sheetList => {
  const headers = sheetList[0].map(item => toCamelCase(item));
  const rows = sheetList.slice(1);

  const buildObject = list =>
    list.reduce(
      (accumulator, item, index) => ({
        ...accumulator,
        [headers[index]]: item,
      }),
      {}
    );

  const refinedData = rows.map(item => buildObject(item));

  return { headers, rows, refinedData, originalData: sheetList };
};
