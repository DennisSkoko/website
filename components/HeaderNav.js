import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
`

function HeaderNav ({ children }) {
  return (
    <nav>
      <StyledUl>
        {children}
      </StyledUl>
    </nav>
  )
}

HeaderNav.propTypes = {
  children: PropTypes.node.isRequired
}

export default HeaderNav
