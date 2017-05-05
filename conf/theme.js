/*
 * Configuration for the theme of this application.
 */
'use strict'

module.exports = {
  title: 'Dennis Skoko',
  charset: 'utf-8',
  lang: 'en',

  nav: {
    links: [
      { path: '/', text: 'Home' },
      { path: '/projects', text: 'Projects' },
      { path: '/contact', text: 'Contact' }
    ]
  },

  stylesheets: [
    '/css/bootstrap.css',
    '/css/style.css'
  ],

  javascript: [
    'https://code.jquery.com/jquery-3.1.1.min.js',
    'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js'
  ]
}
