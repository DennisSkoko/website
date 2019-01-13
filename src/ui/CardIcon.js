import styled from 'styled-components'
import Icon from './Icon'

const CardIcon = styled(Icon).attrs({ size: 'lg' })`
  display: block;
  color: ${({ theme }) => theme.color.black.light};
  margin: ${({ theme }) => `0 auto ${theme.spacing.md}`};
`

export default CardIcon
