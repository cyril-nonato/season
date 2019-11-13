import React from 'react'
import { cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Toolbar from './toolbar.component';
import renderWithRouter from '../../test-utils/renderWithRouter';

const currentUser = null;
afterEach(cleanup)

describe('Name of the group', () => {
  let wrapper;
  const navigation = {
    noUserNavLinks: [
      {
        name: 'route-1',
        route: '/route-1',
        user: 'neutral',
      },
    ],
    userNavLinks: [
      {
        name: 'route-1',
        route: '/route-1',
        user: 'neutral',
      },
    ],
  }
  const windowWidth = 800;
  const toggleSidedrawer = jest.fn();

  it('Should expect toggleSidedrawer to be called when clicked', () => {
    const { getByTestId } = renderWithRouter(
      <Toolbar
        toggleSidedrawer={toggleSidedrawer}
        {...navigation}
        windowWidth={600}
        currentUser={currentUser} />
    );

    fireEvent.click(getByTestId('toggle-icon'));
    expect(toggleSidedrawer).toHaveBeenCalledTimes(1);
  });

  it('Should show the expected props', () => {
    const { getByTestId } = renderWithRouter(
      <Toolbar
        toggleSidedrawer={toggleSidedrawer}
        {...navigation}
        windowWidth={windowWidth}
        currentUser={currentUser} />
    );

    expect(getByTestId('route-1')).toHaveTextContent('route-1');
  });
});