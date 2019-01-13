import React from 'react'
import Header from '../ui/Header'
import HeaderTitle from '../ui/HeaderTitle'
import HeaderNav from '../ui/HeaderNav'
import HeaderNavLink from '../ui/HeaderNavLink'
import HeaderNavLinkSocial from '../ui/HeaderNavLinkSocial'

function TheHeader () {
  return (
    <Header>
      <HeaderNav>
        <HeaderNavLink to='/' exact>About</HeaderNavLink>
        <HeaderNavLink to='/portfolio'>Portfolio</HeaderNavLink>
      </HeaderNav>
      <HeaderTitle>Dennis Skoko</HeaderTitle>
      <HeaderNav>
        <HeaderNavLinkSocial
          as='a'
          href='https://www.linkedin.com/in/dennis-skoko/'
          icon={['fab', 'linkedin']}
          text='LinkedIn Page'
        />
        <HeaderNavLinkSocial
          as='a'
          href='https://github.com/DennisSkoko/'
          icon={['fab', 'github']}
          text='Github Page'
        />
      </HeaderNav>
    </Header>
  )
}

export default TheHeader
