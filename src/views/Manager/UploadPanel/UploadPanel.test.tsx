import { render } from '@test/testUtils';

import UploadPanel from './UploadPanel';

describe('UploadPanel', () => {
  it('should render the heading', () => {
    const { getByRole } = render(<UploadPanel />);

    expect(getByRole('heading', { name: /LargeScale/i })).toBeInTheDocument();
  });
});
