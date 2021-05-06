import { render } from '@test/testUtils';

import Header from './Header';

describe('Header', () => {
  it('should render the heading', () => {
    const { getByRole } = render(<Header />);

    expect(getByRole('heading', { name: /Header/i })).toBeInTheDocument();
  });
});
