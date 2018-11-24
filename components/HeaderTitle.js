import styled from 'styled-components'
import Heading from './Heading'

const HeaderTitle = styled(Heading).attrs({ marginBottom: false })`
  font-size: ${({ theme }) => theme.font.h4.size};
`

export default HeaderTitle
