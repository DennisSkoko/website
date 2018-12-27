import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Container from './Container'

const StyledSection = styled.section`
  padding: ${({ theme }) => `${theme.spacing.xl} ${theme.spacing.lg}`};
`

function Jumbotron ({ children }) {
  return (
    <StyledSection>
      <Container>
        {children}
      </Container>
    </StyledSection>
  )
}

Jumbotron.propTypes = {
  children: PropTypes.node.isRequired
}

export default Jumbotron
