import React from 'react'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import renderer from 'react-test-renderer'


export default function rendererWithRouter(
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
    ...renderer(component, { wrapper: Wrapper }),
    history
  }
}