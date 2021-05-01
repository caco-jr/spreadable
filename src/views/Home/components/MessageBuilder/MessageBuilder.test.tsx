import { render } from '@test/testUtils';

import MessageBuilder from './MessageBuilder';

describe('MessageBuilder', () => {
  it('should render the heading', () => {
    const { getByRole } = render(<MessageBuilder />);

    expect(
      getByRole('heading', { name: /MessageBuilder/i })
    ).toBeInTheDocument();
  });
});
