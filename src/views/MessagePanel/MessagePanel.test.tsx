import { render } from '@test/testUtils';

import MessagePanel from './MessagePanel';

describe('MessagePanel', () => {
  it('should render the heading', () => {
    const { getByRole } = render(<MessagePanel />);

    expect(getByRole('heading', { name: /MessagePanel/i })).toBeInTheDocument();
  });
});
