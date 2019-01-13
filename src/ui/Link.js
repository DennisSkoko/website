import { Link as RouterLink } from 'react-router-dom'
import styled from 'styled-components'
import { transitions } from 'polished'
import Text from './Text'

const Link = styled(Text).attrs({ as: RouterLink, marginBottom: false })`
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

export default Link
