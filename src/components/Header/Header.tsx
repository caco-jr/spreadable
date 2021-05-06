import * as S from './Header.styles';
import { useSpreadsheet } from '@hooks/Spreadsheet/use-spreadsheet';

const Header = (): JSX.Element => {
  const { spreadsheet, removeSpreadsheet } = useSpreadsheet();

  return (
    <S.Wrapper>
      <section className="container">
        <span>{spreadsheet?.fileName}</span>

        <button type="button" onClick={removeSpreadsheet}>
          Remover
        </button>
      </section>
    </S.Wrapper>
  );
};

export default Header;
