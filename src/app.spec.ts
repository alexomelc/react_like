/**
 * @jest-environment jsdom
 */

import { getByTestId } from '@testing-library/dom';
import { render } from './app';

describe('App', () => {
  afterEach(() => jest.clearAllMocks());

  it('should render heading properly', () => {
    const app = render();
    const heading = getByTestId(app, 'title');

    expect(heading).toHaveTextContent('Glorders');
  });

  it('should reload the list if we click on the reload button', () => {});
});
