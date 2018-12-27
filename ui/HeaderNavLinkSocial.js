import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { hideVisually } from 'polished'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import HeaderNavLink from './HeaderNavLink'

library.add(faGithub, faLinkedin)

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
      <FontAwesomeIcon icon={icon} />
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
