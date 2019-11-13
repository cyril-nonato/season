import React from 'react'
import {cleanup, render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import 'jest-styled-components'

import * as S from './directory.styles'

jest.mock('../directory-item/directory-item.component', () => {
  return (
    <div data-testid='directory-item'>
      Directory Item
    </div>
  )
});

afterEach(cleanup);

describe('Directory styles Test', () => {
  
  test('Should match the snapspshot', () => {
    const {asFragment} = render(<S.Container />);

    expect(asFragment()).toMatchSnapshot();
  })

});