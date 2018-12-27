import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledNav = styled.nav`
  z-index: 1;
`

const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
`

function HeaderNav ({ children }) {
  return (
    <StyledNav>
      <StyledUl>
        {children}
      </StyledUl>
    </StyledNav>
  )
}

HeaderNav.propTypes = {
  children: PropTypes.node.isRequired
}

export default HeaderNav
