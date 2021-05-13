import { render } from '@test/testUtils';

import DataTable from './DataTable';

describe('Table', () => {
  it('should render', () => {
    const { container } = render(<DataTable />);

    expect(container.firstChild).toBeInTheDocument();
  });
});
