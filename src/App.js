import React from 'react'
import TheHeader from './components/TheHeader'
import RouterOutlet from './routing/RouterOutlet'
import RouterProvider from './routing/RouterProvider'
import GlobalStyles from './style/GlobalStyles'
import ThemeProvider from './style/ThemeProvider'

function App () {
  return (
    <ThemeProvider>
      <RouterProvider>
        <>
          <GlobalStyles />
          <TheHeader />
          <RouterOutlet />
        </>
      </RouterProvider>
    </ThemeProvider>
  )
}

export default App
