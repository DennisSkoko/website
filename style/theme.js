import { darken, lighten } from 'polished'

const color = {
  primary: 'cyan',
  secondary: 'lightgreen'
}

const theme = {
  container: {
    width: '1280px'
  },

  color: {
    primary: {
      dark: darken(0.1, color.primary),
      base: color.primary,
      light: lighten(0.1, color.primary)
    },

    secondary: {
      dark: darken(0.1, color.secondary),
      base: color.secondary,
      light: lighten(0.1, color.secondary)
    },

    black: {
      dark: 'rgb(0, 0, 0)',
      base: 'rgb(15, 15, 15)',
      light: 'rgb(30, 30, 30)'
    },

    white: {
      dark: 'rgb(245, 245, 245)',
      base: 'rgb(250, 250, 250)',
      light: 'rgb(255, 255, 255)'
    }
  },

  font: {
    baseSize: '1.1rem',

    family: {
      title: '\'Caveat\', cursive',
      heading: '\'Montserrat\', sans-serif',
      body: '\'Montserrat\', sans-serif'
    },

    h1: { size: '2.5rem' },
    h2: { size: '2rem' },
    h3: { size: '1.75rem' },
    h4: { size: '1.5rem' },
    h5: { size: '1.25rem' },
    h6: { size: '1.15rem' },
    lead: { size: '1.25rem' },
    body: { size: '1rem' },
    small: { size: '0.75rem' }
  },

  spacing: {
    xs: '.375em',
    sm: '.5em',
    md: '1.5em',
    lg: '3em',
    xl: '5em'
  },

  transition: {
    quick: '150ms',
    normal: '250ms',
    slow: '450ms'
  },

  icon: {
    md: { size: '1.5rem' },
    lg: { size: '3.5rem' }
  }
}

export default theme
