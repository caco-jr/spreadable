import { render } from '@test/testUtils';

import MessageAssembly from './MessageAssembly';

describe('MessageAssembly', () => {
  it('should render the heading', () => {
    const { getByRole } = render(<MessageAssembly />);

    expect(
      getByRole('heading', { name: /MessageAssembly/i })
    ).toBeInTheDocument();
  });
});
