import styled from 'styled-components'
import Heading from './Heading'

const HeaderTitle = styled(Heading).attrs({ marginBottom: false })`
  position: absolute;
  width: 100%;
  left: 0;
  text-align: center;
  font-size: ${({ theme }) => theme.font.h2.size};
  font-family: ${({ theme }) => theme.font.family.title};
`

export default HeaderTitle
