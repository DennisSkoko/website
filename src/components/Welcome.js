import React from 'react'
import Heading from '../ui/Heading'
import Jumbotron from '../ui/Jumbotron'
import Link from '../ui/Link'
import Text from '../ui/Text'

function Welcome () {
  return (
    <Jumbotron>
      <Heading as='h2'>Welcome</Heading>
      <Text type='lead'>
        My name is Dennis Skoko and I'm a full stack developer. Right now my
        focus is at front-end development, mainly with{' '}
        <Link as='a' href='https://reactjs.org/' target='_blank'>React</Link>.
        But I love learning other stuff all the time so chaning technologies is
        not a problem for me. Right now I spend most of my focus on work but I
        sometimes spend time on personal projects at home after work. I rarley
        do freelancing but when I do it, it is mostly for family related people
        I do it for. But it's not like doing freelancing for other people is not
        an option, I would love to do some freelancing aside.
      </Text>
    </Jumbotron>
  )
}

export default Welcome
