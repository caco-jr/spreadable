import { render } from '@test/testUtils';

import DataTable from './DataTable';

describe('Table', () => {
  it('should render the heading', () => {
    const { getByRole } = render(<DataTable />);

    expect(getByRole('heading', { name: /Table/i })).toBeInTheDocument();
  });
});
