import React from 'react'
import MyWork from '../components/MyWork'
import Welcome from '../components/Welcome'
import Container from '../ui/Container'

function Index () {
  return (
    <Container>
      <main>
        <Welcome />
        <MyWork />
      </main>
    </Container>
  )
}

export default Index
