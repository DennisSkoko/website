import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Container from './Container'

const StyledHeader = styled.header`
  border-bottom: 1px solid black;
  padding: .75rem 0;
`

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

function Header ({ children }) {
  return (
    <StyledHeader>
      <StyledContainer>
        {children}
      </StyledContainer>
    </StyledHeader>
  )
}

Header.propTypes = {
  children: PropTypes.node.isRequired
}

export default Header
