/*
 * Configuration for the theme of this application.
 */
'use strict'

module.exports = {
  title: 'Dennis Skoko',
  charset: 'utf-8',
  lang: 'en',

  meta: {
    viewport: 'width=device-width, initial-scale=1',
    description: 'Hi, my name is Dennis Skoko and this is my website where I' +
      ' will show off all of my skills.',
    keywords: [
      'Dennis Skoko', 'Web development', 'Programmer', 'Node.js', 'PHP', 'Java'
    ].join()
  },

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
