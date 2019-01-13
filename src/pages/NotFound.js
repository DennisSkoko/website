import React from 'react'
import Container from '../ui/Container'
import Heading from '../ui/Heading'
import Link from '../ui/Link'
import Text from '../ui/Text'

function NotFound () {
  return (
    <Container>
      <Heading as='h2' marginTop centered>Page not found</Heading>
      <Text centered>
        The page you are looking for doesn't exists. <Link to='/'>Click here</Link>
        {' '}to return to the homepage.
      </Text>
    </Container>
  )
}

export default NotFound
