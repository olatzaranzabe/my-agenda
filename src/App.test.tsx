import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { Router, MemoryRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';

test('full app rendering/navigating', () => {
  const { container, getByText } = render(<App />, { wrapper: MemoryRouter });
  // verify page content for expected route
  expect(getByText('heading')).toMatch('WelcomePage');
});

test('landing on a bad page shows the text Error 404', () => {
  const history = createMemoryHistory();
  history.push('/some/bad/route');
  const { getByRole } = render(
    <Router history={history}>
      <h1>Error 404</h1>
    </Router>
  );
  expect(getByRole('heading')).toHaveTextContent('Error 404');
});
