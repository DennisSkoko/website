import { createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'

const GlobalStyles = createGlobalStyle`
  ${normalize()}

  html {
    font-size: ${({ theme }) => theme.font.baseSize};
    background-color: ${({ theme }) => theme.color.white.base};
    scrollbar-width: thin;
  }

  * {
    box-sizing: border-box;
  }
`

export default GlobalStyles
