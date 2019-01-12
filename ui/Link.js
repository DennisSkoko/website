import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { transitions } from 'polished'
import NextLink from 'next/link'
import Text from './Text'

const StyledText = styled(Text).attrs({ as: 'a', marginBottom: false })`
  display: inline;
  margin: 0;
  text-decoration: none;
  font-size: inherit;
  background-repeat: no-repeat;
  background-size: 100% 0.2em;
  background-position: 0 88%;
  background-image: ${({ theme }) => `linear-gradient(
    145deg,
    ${theme.color.primary.base} 0%,
    ${theme.color.secondary.base} 100%
  )`};
  ${({ theme }) => transitions(['background-size'], theme.transition.normal)};

  &:hover {
    background-size: 100% 88%;
  }
`

function Link ({ children, target, ...props }) {
  return (
    <NextLink {...props} passHref>
      <StyledText target={target}>
        {children}
      </StyledText>
    </NextLink>
  )
}

Link.propTypes = {
  children: PropTypes.node.isRequired,
  target: PropTypes.string
}

Link.defaultProps = {
  target: null
}

export default Link
