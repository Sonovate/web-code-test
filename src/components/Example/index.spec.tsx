import { render } from '@testing-library/react';

import Example from '.';

describe('Example', () => {
  it('renders text that we expect to expect', () => {
    const { queryByText } = render(<Example />);
    expect(queryByText('This is an Example Component')).toBeInTheDocument();
  });
});