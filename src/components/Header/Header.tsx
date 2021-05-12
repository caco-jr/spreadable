import { HiOutlineDocumentRemove } from 'react-icons/hi';
import { Tooltip } from 'antd';

import * as S from './Header.styles';
import { useSpreadsheet } from '@hooks/Spreadsheet/use-spreadsheet';

const Header = (): JSX.Element => {
  const { spreadsheet, removeSpreadsheet } = useSpreadsheet();

  return (
    <S.Wrapper>
      <section className="container">
        {spreadsheet && (
          <S.Tag>
            <Tooltip placement="topLeft" title="Remover arquivo">
              <S.TagButtonClose type="button" onClick={removeSpreadsheet}>
                <HiOutlineDocumentRemove />
              </S.TagButtonClose>
            </Tooltip>

            <S.TagText>{spreadsheet?.fileName}</S.TagText>
          </S.Tag>
        )}
      </section>
    </S.Wrapper>
  );
};

export default Header;
