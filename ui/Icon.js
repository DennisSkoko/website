import PropTypes from 'prop-types'
import styled from 'styled-components'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSuitcase } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

library.add(faGithub, faLinkedin, faSuitcase)

const Icon = styled(FontAwesomeIcon)`
  &&& {
    height: ${({ theme, size }) => theme.icon[size].size};
    width: ${({ theme, size }) => theme.icon[size].size};
  }
`

Icon.propTypes = {
  size: PropTypes.oneOf(['md', 'lg'])
}

Icon.defaultProps = {
  size: 'md'
}

export default Icon
