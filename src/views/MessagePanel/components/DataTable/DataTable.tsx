import { useState } from 'react';
import { Table } from 'antd';

import { useSpreadsheet } from '@hooks/Spreadsheet/use-spreadsheet';
import * as S from './DataTable.styles';

const DataTable = (): JSX.Element => {
  const { spreadsheet } = useSpreadsheet();
  const [selectedRowKeys, setSelectedRowKeys] = useState<Array<number>>([]);

  const onSelectChange = (selectedRows: number[]): void => {
    setSelectedRowKeys(selectedRows);
  };

  const getDataSource = () => {
    if (!spreadsheet) {
      return [];
    }

    return spreadsheet.refinedData.map((data, index) => ({
      ...data,
      key: index,
    }));
  };

  const getColumns = () => {
    if (!spreadsheet) {
      return [];
    }

    const { originalData, headers } = spreadsheet;
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

      <Table
        rowSelection={{ selectedRowKeys, onChange: onSelectChange }}
        dataSource={getDataSource()}
        columns={getColumns()}
      />
    </S.Wrapper>
  );
};

export default DataTable;
