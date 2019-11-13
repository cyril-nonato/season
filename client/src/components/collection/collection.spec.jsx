import React from 'react'
import { render, cleanup } from '@testing-library/react'
import Collection from './collection.component';
import '@testing-library/jest-dom/extend-expect';

jest.mock('../collection-item/collection-item.container', () => {
  const CollectionItemContainer = () => <div></div>;
  return CollectionItemContainer;
});

afterEach(cleanup);

describe('Collection Test', () => {
  let wrapper;
  const collection = {
    brand: 'some brand',
    items: [
      {
        id: 1,
        model: 'some model'
      }
    ]
  }
  beforeEach(() => {
    wrapper = render(<Collection collection={collection} />)
  });

  it('Should render the props', () => {
    const { getByTestId } = wrapper;
    expect(getByTestId('brand')).toHaveTextContent(collection.brand)
  });

  it('Should match the snapshot', () => {
    const { asFragment } = wrapper;
    expect(asFragment()).toMatchSnapshot();
  })

});