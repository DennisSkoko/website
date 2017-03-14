/*
 * Configuration for the theme of this application.
 */
'use strict';

module.exports = {
  title: 'Dennis Skoko',
  charset: 'utf-8',

  nav: {
    links: [
      {
        path: '/',
        text: 'Home'
      },
      {
        path: '/projects',
        text: 'Projects'
      },
      {
        path: '/contact',
        text: 'Contact'
      }
    ]
  },

  stylesheets: [
    'css/bootstrap.css',
    'css/style.css'
  ],

  javascript: [
    'js/jquery.js',
    'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js'
  ]
};
