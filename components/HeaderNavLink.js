import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { withRouter } from 'next/router'
import styled from 'styled-components'
import { transitions } from 'polished'

const StyledA = styled.a`
  display: block;
  margin: 0 ${({ theme }) => theme.spacing.xs};
  padding: ${({ theme }) => theme.spacing.sm};
  text-decoration: none;
  color: inherit;
  font-family: ${({ theme }) => theme.font.family.body};
  ${transitions(['color', 'transform'], '250ms')};

  &:active {
    transform: scale(.95);
    transition: none;
  }

  &:hover, &.selected {
    color: ${({ theme }) => theme.color.primary.base};
  }
`

function HeaderNavLink ({ router, children, target, className, ...props }) {
  return (
    <li>
      <Link {...props} passHref>
        <StyledA
          className={`${className} ${router.pathname === props.href && 'selected'}`}
          target={target}
        >
          {children}
        </StyledA>
      </Link>
    </li>
  )
}

HeaderNavLink.propTypes = {
  children: PropTypes.node.isRequired
}

export default withRouter(HeaderNavLink)
