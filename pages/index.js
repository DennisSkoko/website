import React from 'react'
import Container from '../components/Container'
import Header from '../components/Header'
import HeaderTitle from '../components/HeaderTitle'
import Heading from '../components/Heading'
import HeaderNav from '../components/HeaderNav'
import HeaderNavLink from '../components/HeaderNavLink'

function Index () {
  return (
    <>
      <Header>
        <HeaderTitle>Dennis Skoko</HeaderTitle>
        <HeaderNav>
          <HeaderNavLink href='/'>Home</HeaderNavLink>
          <HeaderNavLink href='/portfolio'>Portfolio</HeaderNavLink>
          <HeaderNavLink href='/contact'>Contact</HeaderNavLink>
        </HeaderNav>
      </Header>
      <Container>
        <main>
          <Heading>Welcome</Heading>
        </main>
      </Container>
    </>
  )
}

export default Index
