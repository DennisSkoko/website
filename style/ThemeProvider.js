import React from 'react'
import { ThemeProvider as Provider } from 'styled-components'
import theme from './theme'

function ThemeProvider ({ children }) {
  return (
    <Provider theme={theme}>
      {children}
    </Provider>
  )
}

export default ThemeProvider
