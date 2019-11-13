import React from 'react';
import {render, fireEvent} from '@testing-library/react'
import 'jest-styled-components'

import Backdrop from './backdrop.component'

import * as S from './backdrop.styles'

describe('Backdrop Component Test', () => {
  const props = {
    click: jest.fn()
  }

  test('Should call the click function when clicked', () => {
    const {getByTestId} = render(<Backdrop {...props} />);

    fireEvent.click(getByTestId('backdrop'));

    expect(props.click).toHaveBeenCalled();
  });

  test('Match the snapshot', () => {
    const {asFragment} = render(<S.BackdropContainer />);

    expect(asFragment()).toMatchSnapshot();
  });
});
