import { render } from '@test/testUtils';

import Table from './Table';

describe('Table', () => {
  it('should render the heading', () => {
    const { getByRole } = render(<Table />);

    expect(getByRole('heading', { name: /Table/i })).toBeInTheDocument();
  });
});
