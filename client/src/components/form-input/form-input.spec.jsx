import React from 'react'
import {render, fireEvent, cleanup} from '@testing-library/react'
import renderer from 'react-test-renderer'
import '@testing-library/jest-dom/extend-expect'
import 'jest-styled-components'

import FormInput from './form-input.component'

import * as S from './form-input.styles'

afterEach(cleanup)

describe('Form Input Styled Test', () => {
  
  test('should match the snapshot', () => {
    const tree = renderer.create(<S.Container />).toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toHaveStyleRule('margin', '1.5rem 0');
  });

  test('should match the snapshot', () => {
    const tree = renderer.create(<S.Input />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Form input test component', () => {
  const props = {
    name: 'name',
    type: 'text',
    label: 'some-label',
    onChange: jest.fn()
  }

  test('check for props', () => {
    const {getByTestId } = render(<FormInput {...props} />);
    const input = getByTestId('input');
    const label = getByTestId('label');
    fireEvent.change(input, {
      target: { value: 'some-test'}
    });
    expect(input).toHaveValue('some-test');
    expect(input).toHaveAttribute('name', props.name);
    expect(label).toHaveTextContent(props.label);
  });
});

