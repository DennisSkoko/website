import React from 'react'
import App, { Container } from 'next/app'
import TheHeader from '../components/TheHeader'
import GlobalStyles from '../style/GlobalStyles'
import ThemeProvider from '../style/ThemeProvider'

class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <ThemeProvider>
          <>
            <GlobalStyles />
            <TheHeader />
            <Component {...pageProps} />
          </>
        </ThemeProvider>
      </Container>
    )
  }
}

export default MyApp
