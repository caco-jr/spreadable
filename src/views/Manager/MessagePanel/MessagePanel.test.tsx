import { render } from '@test/testUtils';

import MessagePanel from './MessagePanel';

jest.mock('@hooks/Spreadsheet/use-spreadsheet', () => ({
  useSpreadsheet: () => ({ selectedItems: [], spreadsheet: null }),
}));

describe('MessagePanel', () => {
  it('should render', () => {
    const { container } = render(<MessagePanel />);

    expect(container.firstChild).toBeInTheDocument();
  });
});
