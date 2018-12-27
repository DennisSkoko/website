import styled from 'styled-components'
import { transitions } from 'polished'

const Card = styled.div`
  padding: ${({ theme }) => `${theme.spacing.md}`};
  border: 0.1875rem solid transparent;
  display: block;
  text-decoration: none;
  ${({ theme }) => transitions(['border-color', theme.transition.normal])};

  &:hover {
    border-color: ${({ theme }) => theme.color.primary.base};
  }
`

export default Card
