import React from 'react'
import App, { Container } from 'next/app'
import Header from '../components/Header'
import HeaderTitle from '../components/HeaderTitle'
import HeaderNav from '../components/HeaderNav'
import HeaderNavLink from '../components/HeaderNavLink'
import HeaderNavLinkSocial from '../components/HeaderNavLinkSocial'
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
