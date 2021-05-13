import { render } from '@test/testUtils';

import MessageBuilder from './MessageBuilder';

describe('MessageBuilder', () => {
  it('should render the heading', () => {
    const { container } = render(<MessageBuilder />);

    expect(container.firstChild).toBeInTheDocument();
  });
});
