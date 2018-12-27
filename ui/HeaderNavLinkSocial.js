import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { hideVisually } from 'polished'
import HeaderNavLink from './HeaderNavLink'
import Icon from './Icon'

const StyledHeaderNavLink = styled(HeaderNavLink)`
  padding: ${({ theme }) => theme.spacing.sm};
  margin: 0;
`

const SrOnly = styled.span`
  ${hideVisually()};
`

function HeaderNavLinkSocial ({ icon, text, ...props }) {
  return (
    <StyledHeaderNavLink {...props} target='_blank'>
      <Icon icon={icon} />
      <SrOnly>{text}</SrOnly>
    </StyledHeaderNavLink>
  )
}

HeaderNavLinkSocial.propTypes = {
  icon: PropTypes
    .oneOfType([
      PropTypes.string.isRequired,
      PropTypes
        .arrayOf(
          PropTypes.string.isRequired
        )
        .isRequired
    ])
    .isRequired
}

export default HeaderNavLinkSocial
