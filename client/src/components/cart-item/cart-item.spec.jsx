import React from 'react'
import { fireEvent, render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import CartItem from './cart-item.component'
import 'jest-styled-components'

afterEach(cleanup);

describe('Cart item Test', () => {
  const testItem = {
    index: 1,
    imageUrl: 'some-img.jpg',
    name: 'name',
    price: 200,
    quantity: 2
  }

  let wrapper;
  const functions = {
    addItemToCart: jest.fn(),
    removeItemFromCart: jest.fn()
  }

  beforeEach(() => {
    wrapper = render(<CartItem {...functions} item={testItem} />);
  })

  it('Should renders the props', () => {
    const {getByTestId} = wrapper;
    expect(getByTestId('name')).toHaveTextContent(testItem.name)
    expect(getByTestId('quantity')).toHaveTextContent(testItem.quantity)
  });

  it('Should render the component', () => {
    const { asFragment } = wrapper;
    expect(asFragment()).toMatchSnapshot()
  });

  it('Should call add function', () => {
    const {getByTestId} = wrapper;
    fireEvent.click(getByTestId('addItemToCart'));
    expect(functions.addItemToCart).toHaveBeenCalledTimes(1);
    expect(functions.addItemToCart).toHaveBeenCalledWith(testItem);
  });

  it('Should call remove function', () => {
    const {getByTestId} = wrapper;
    fireEvent.click(getByTestId('removeItemFromCart'));
    expect(functions.removeItemFromCart).toHaveBeenCalledTimes(1);
    expect(functions.removeItemFromCart).toHaveBeenCalledWith(testItem);
  });

});