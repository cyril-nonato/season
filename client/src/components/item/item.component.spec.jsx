import React from 'react'
import {render, cleanup} from '@testing-library/react'
import renderer from 'react-test-renderer'
import '@testing-library/jest-dom/extend-expect'
import 'jest-styled-components'

import * as S from './item.styles'

import Item from './item.component'

afterEach(cleanup);

describe('Item Component Test', () => {
  const item = {
    name: 'name', 
    imageUrl: 'url', 
    status: 'release', 
    battery: '550', 
    memory: 'some-gb', 
    price: 1000
  }
  const shopCleanupError =  jest.fn()

  let wrapper;

  beforeEach(() => {
    wrapper = render(<Item item={item} shopCleanUpError={shopCleanupError} />)
  })

  test('Should render props correctly', () => {
    const {getByTestId} = wrapper;

    expect(getByTestId('h3')).toHaveTextContent(item.name);
    expect(getByTestId('image')).toHaveAttribute('src', item.imageUrl)
  });

  test('Should call shopCleanupError on unmount ', () => {
    const {unmount} = wrapper;
    unmount();
    expect(shopCleanupError).toHaveBeenCalled();
  });
});

describe('Item Styles Test', () => {
  let tree;
  afterEach(() => {
    expect(tree).toMatchSnapshot();
  })
  test('Container should match the snapshot ', () => {
    tree = renderer.create(<S.Container />).toJSON();
  });

  test('Grid should match the snapshot ', () => {
    tree = renderer.create(<S.Grid />).toJSON();
  });

  test('Image should match the snapshot ', () => {
    tree = renderer.create(<S.Image />).toJSON();
  });

  test('Status should match the snapshot ', () => {
    tree = renderer.create(<S.Status />).toJSON();
  });
});