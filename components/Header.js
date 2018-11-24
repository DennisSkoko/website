import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Container from './Container'

const StyledHeader = styled.header`
  padding: .75rem 0;
  box-shadow: 0 5px 5px ${({ theme }) => theme.color.white.dark};
  background-color: ${({ theme }) => theme.color.white.light};
  color: ${({ theme }) => theme.color.black.base};
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
