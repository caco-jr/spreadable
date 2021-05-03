import { render } from '@test/testUtils';

import FileUpload from './FileUpload';

describe('FileUpload', () => {
  it('should render the heading', () => {
    const { getByRole } = render(<FileUpload />);

    expect(getByRole('heading', { name: /FileUpload/i })).toBeInTheDocument();
  });
});
