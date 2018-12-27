import { createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'

const GlobalStyles = createGlobalStyle`
  ${normalize()}

  @import url('https://fonts.googleapis.com/css?family=Caveat:400,700|Montserrat:400,400i,700');

  html {
    font-size: ${({ theme }) => theme.font.baseSize};
    background-color: ${({ theme }) => theme.color.white.base}
  }

  * {
    box-sizing: border-box;
  }
`

export default GlobalStyles
