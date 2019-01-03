import styled from 'styled-components'
import { transitions } from 'polished'

const Card = styled.div`
  padding: ${({ theme }) => `${theme.spacing.md}`};
  display: block;
  text-decoration: none;
  position: relative;
  top: 0;
  ${({ theme }) => transitions(['top'], theme.transition.normal)};

  &:hover {
    top: ${({ theme }) => `-${theme.spacing.xs}`};
  }
`

export default Card
