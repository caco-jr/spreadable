import { render } from '@test/testUtils';

import FileUpload from './FileUpload';

describe('FileUpload', () => {
  it('should render', () => {
    const { getByRole } = render(
      <FileUpload accept=".xlsx" onFileUpload={() => 'Hello World'}>
        <h2>Hello</h2>
      </FileUpload>
    );

    expect(getByRole('heading', { name: /Hello/i })).toBeInTheDocument();
  });
});
