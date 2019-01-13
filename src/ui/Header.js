import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Container from './Container'

const StyledHeader = styled.header`
  position: relative;
  padding: ${({ theme }) => theme.spacing.md} 0;
  background-color: ${({ theme }) => theme.color.black.base};
  color: ${({ theme }) => theme.color.white.base};
  line-height: ${({ theme }) => theme.font.baseLineHeight};
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
