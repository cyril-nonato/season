import React from 'react'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import {render} from '@testing-library/react'

export default function renderWithRouter(
  component,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
  } = {}
) {
  const Wrapper = ({ children }) => (
    <Router history={history}>{children}</Router>
  )

  return {
    ...render(component, { wrapper: Wrapper }),
    history
  }
}