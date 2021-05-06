import { Table } from 'antd';

import { useSheet } from '@hooks/Sheet/use-sheet';
import * as S from './DataTable.styles';

const DataTable = (): JSX.Element => {
  const { sheet } = useSheet();

  const getDataSource = () => {
    if (!sheet) {
      return [];
    }

    return sheet.refinedData.map((data, index) => ({ ...data, key: index }));
  };

  const getColumns = () => {
    if (!sheet) {
      return [];
    }

    const { originalData, headers } = sheet;
    const headerList = originalData[0];

    return headers.map((item, index) => ({
      title: headerList[index],
      dataIndex: item,
      key: item,
    }));
  };

  return (
    <S.Wrapper>
      <h2>Table</h2>

      <Table dataSource={getDataSource()} columns={getColumns()} />
    </S.Wrapper>
  );
};

export default DataTable;
