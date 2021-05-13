import { render } from '@test/testUtils';

import MessageAssembly from './MessageAssembly';

jest.mock('@hooks/Spreadsheet/use-spreadsheet', () => ({
  useSpreadsheet: () => ({ selectedItems: [], spreadsheet: null }),
}));

describe('MessageAssembly', () => {
  it('should render the heading', () => {
    const { getByRole } = render(<MessageAssembly />);

    expect(
      getByRole('heading', { name: /Monte a mensagem/i })
    ).toBeInTheDocument();
  });
});
