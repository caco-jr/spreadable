import { render } from '@test/testUtils';

import Header from './Header';

describe('Header', () => {
  it('should render without error', () => {
    const { container } = render(<Header />);

    expect(container.firstChild).toBeInTheDocument();
  });
});
