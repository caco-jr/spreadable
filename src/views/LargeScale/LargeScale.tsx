import { useState } from 'react';

import * as S from './LargeScale.styles';
import Layout from '@components/Layout';
import FileUpload from '@components/FileUpload';
import { sheetToObject } from '@utils/file';

export const LargeScalePage = (): JSX.Element => {
  const [sheetResult, setSheetResult] = useState();

  return (
    <Layout title="Large scale">
      <S.Wrapper className="container">
        <h1>LargeScale</h1>
        <FileUpload
          accept=".xls, .xlsx"
          onFileUpload={({ file }) => {
            sheetToObject(file.originFileObj, setSheetResult);
          }}
        />

        {sheetResult && 'olá'}
      </S.Wrapper>
    </Layout>
  );
};

export default LargeScalePage;
