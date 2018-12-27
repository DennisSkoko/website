import styled from 'styled-components'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

library.add(faGithub, faLinkedin)

const Icon = styled(FontAwesomeIcon)`
  &&& {
    height: 1.5rem;
    width: 1.25rem;
  }
`

export default Icon
