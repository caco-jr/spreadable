import { render } from '@test/testUtils';

import Single from './Single';

describe('Single', () => {
  it('should render the heading', () => {
    const { getByRole } = render(<Single />);

    expect(getByRole('heading', { name: /Single/i })).toBeInTheDocument();
  });
});
