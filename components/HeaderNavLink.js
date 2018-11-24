import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import styled from 'styled-components'

const StyledA = styled.a`
  display: block;
  margin: 0 .375rem;
  padding: .75rem;
`

function HeaderNavLink ({ children, ...props }) {
  return (
    <li>
      <Link {...props} passHref>
        <StyledA>{children}</StyledA>
      </Link>
    </li>
  )
}

HeaderNavLink.propTypes = {
  children: PropTypes.node.isRequired
}

export default HeaderNavLink
