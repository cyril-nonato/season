import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import CustomButton from './custom-button.component';
import renderWithRouter from '../../test-utils/renderWithRouter';

afterEach(cleanup);

describe('Custom Button Test', () => {

  it('Should render default button', () => {
    const { getByTestId } = render(<CustomButton type='button' text='button' />)
    expect(getByTestId('default')).toHaveTextContent('BUTTON');
  })

  it('Should render isLink', () => {
    const { getByTestId } = render(<CustomButton isLink to="/" text='button' />, { wrapper: MemoryRouter })
    expect(getByTestId('isLink')).toHaveTextContent('button');
  })

  it('Should match the specific href route', () => {
    const route = '/sign-up';

    const { getByTestId } = renderWithRouter(<CustomButton isLink text='button' to={route} />);
    expect(getByTestId('isLink')).toHaveAttribute('href', route);

  });

});