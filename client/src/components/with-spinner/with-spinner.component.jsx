import React from 'react'
import Spinner from '../spinner/spinner.component';

const WithSpinner = WrappedComponent => ({ loading, ...otherProps }) => {

  if (loading) {
    return (
      <Spinner />
    )
  }

  return (
    <WrappedComponent {...otherProps} />
  )
}

export default WithSpinner;

