import React from 'react'
import NextLink from 'next/link'
import Card from '../ui/Card'
import CardIcon from '../ui/CardIcon'
import Grid from '../ui/Grid'
import GridColumn from '../ui/GridColumn'
import Heading from '../ui/Heading'
import Section from '../ui/Section'
import Text from '../ui/Text'

function MyWork () {
  return (
    <Section>
      <Heading as='h2' centered>My work</Heading>

      <Grid columns={3}>
        <GridColumn>
          <Card
            as='a'
            href='https://www.linkedin.com/in/dennis-skoko/'
            target='_blank'
          >
            <CardIcon icon={['fab', 'linkedin']} />
            <Text marginBottom={false}>
              If you want to see what I've been working on at my job then
              LinkedIn is the place to check it. Here I write about the projects
              I've contributed at. Some may have little information and other
              may have more, it depends on whether I'm allowed to give
              information or not.
            </Text>
          </Card>
        </GridColumn>

        <GridColumn>
          <Card
            as='a'
            href='https://github.com/DennisSkoko/'
            target='_blank'
          >
            <CardIcon icon={['fab', 'github']} />
            <Text marginBottom={false}>
              If you are interested on what technologies I love and use then you
              can check my personal projects that I work with at my sparetime.
              Most of my personal projects that I do end up in Github.
            </Text>
          </Card>
        </GridColumn>

        <GridColumn>
          <NextLink href='/portfolio' passHref>
            <Card as='a'>
              <CardIcon icon='suitcase' />
              <Text marginBottom={false}>
                Sometimes I do some freelancing for people that I know. This
                rarely happens but when it does happen, I keep the source
                hidden. The way I can showcase these projects is on my portfolio
                page where I provide a brief description and information on how
                to find the project so you can take a look.
              </Text>
            </Card>
          </NextLink>
        </GridColumn>
      </Grid>
    </Section>
  )
}

export default MyWork
