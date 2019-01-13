import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { transitions } from 'polished'

const HeaderNavLink = styled(NavLink)`
  display: block;
  margin: 0 ${({ theme }) => theme.spacing.xs};
  padding: ${({ theme }) => theme.spacing.sm};
  text-decoration: none;
  color: inherit;
  font-family: ${({ theme }) => theme.font.family.body};
  ${({ theme }) => transitions(['color', 'transform'], theme.transition.normal)};

  &:active {
    transform: scale(.95);
    transition: none;
  }

  &:hover, &.active {
    color: ${({ theme }) => theme.color.primary.base};
  }
`

export default HeaderNavLink
