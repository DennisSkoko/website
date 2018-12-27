import React from 'react'
import App, { Container } from 'next/app'
import GlobalStyles from '../style/GlobalStyles'
import ThemeProvider from '../style/ThemeProvider'
import Header from '../ui/Header'
import HeaderTitle from '../ui/HeaderTitle'
import HeaderNav from '../ui/HeaderNav'
import HeaderNavLink from '../ui/HeaderNavLink'
import HeaderNavLinkSocial from '../ui/HeaderNavLinkSocial'

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
                <HeaderNavLink href='/'>About</HeaderNavLink>
                <HeaderNavLink href='/portfolio'>Portfolio</HeaderNavLink>
              </HeaderNav>
              <HeaderTitle>Dennis Skoko</HeaderTitle>
              <HeaderNav>
                <HeaderNavLinkSocial
                  href='https://www.linkedin.com/in/dennis-skoko/'
                  icon={['fab', 'linkedin']}
                  text='LinkedIn Page'
                />
                <HeaderNavLinkSocial
                  href='https://github.com/DennisSkoko/'
                  icon={['fab', 'github']}
                  text='Github Page'
                />
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
