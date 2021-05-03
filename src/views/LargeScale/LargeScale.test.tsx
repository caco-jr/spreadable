import { render } from '@test/testUtils';

import LargeScale from './LargeScale';

describe('LargeScale', () => {
  it('should render the heading', () => {
    const { getByRole } = render(<LargeScale />);

    expect(getByRole('heading', { name: /LargeScale/i })).toBeInTheDocument();
  });
});
