import React from 'react'
import App, { Container } from 'next/app'
import Header from '../components/Header'
import HeaderTitle from '../components/HeaderTitle'
import HeaderNav from '../components/HeaderNav'
import HeaderNavLink from '../components/HeaderNavLink'
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

            <Header>
              <HeaderNav>
                <HeaderNavLink href='/'>Home</HeaderNavLink>
                <HeaderNavLink href='/portfolio'>Portfolio</HeaderNavLink>
                <HeaderNavLink href='/contact'>Contact</HeaderNavLink>
              </HeaderNav>
              <HeaderTitle>Dennis Skoko</HeaderTitle>
              <HeaderNav>
                <HeaderNavLink href='https://www.linkedin.com/in/dennis-skoko/'>
                  LinkedIn
                </HeaderNavLink>
                <HeaderNavLink href='https://github.com/DennisSkoko/'>
                  Github
                </HeaderNavLink>
              </HeaderNav>
            </Header>

            <Component {...pageProps} />
          </>
        </ThemeProvider>
      </Container>
    )
  }
}

export default MyApp
