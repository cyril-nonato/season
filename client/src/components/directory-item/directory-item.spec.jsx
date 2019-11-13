import React from 'react'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import DirectoryItem from './directory-item.component';
import renderWithRouter from '../../test-utils/renderWithRouter';
import 'jest-styled-components'
import * as S from './directory.styles';

afterEach(cleanup);

describe('Directory Item test', () => {
  const item = {
    logo: 'some-logo',
    name: 'some-name',
    linkUrl: 'url'
  }

  test('Should render the props correctly', () => {
    const { getByTestId, asFragment } = renderWithRouter(<DirectoryItem item={item} />)
    expect(getByTestId('link')).toHaveAttribute('href', `/${item.linkUrl}`);
    expect(getByTestId('image')).toHaveAttribute('src', item.logo);
    expect(getByTestId('h3')).toHaveTextContent(item.name);
  });

  test('Should match the snapshot', () => {
    const { asFragment } = renderWithRouter(<DirectoryItem item={item} />)

    expect(asFragment()).toMatchSnapshot();
  })
});
