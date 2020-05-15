import { Home } from './home';
import { render, waitFor } from '@testing-library/react';
import React from 'react';

describe('Home', () => {
  it('should make a request to the API', async () => {
    spyOn(window, 'fetch').and.returnValue(
      Promise.resolve({ json: () => Promise.resolve({ taskList: [] }) })
    );

    const { queryByRole } = render(<Home />);

    await waitFor(() => queryByRole('listitem'));

    expect(queryByRole('listitem')).toBeGreaterThan(0);
  });
});
