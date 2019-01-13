import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const sheet = new ServerStyleSheet()

    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />)
    )

    const styleTags = sheet.getStyleElement()

    return { ...page, styleTags }
  }

  render () {
    return (
      <html lang='en'>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
          <meta name='keywords' content='Dennis Skoko,front-end developer,full-stack developer,react,freelancer,portfolio' />
          <meta name='description' content='Dennis Skoko is a software developer and here you can find all of his work that he has been working on.' />
          <meta name='msapplication-TileColor' content='#000000' />
          <meta name='msapplication-config' content='/static/browserconfig.xml?v=3e8A78pMBA' />
          <meta name='theme-color' content='#000000' />
          <link rel='apple-touch-icon' sizes='180x180' href='/static/apple-touch-icon.png?v=3e8A78pMBA' />
          <link rel='icon' type='image/png' sizes='32x32' href='/static/favicon-32x32.png?v=3e8A78pMBA' />
          <link rel='icon' type='image/png' sizes='16x16' href='/static/favicon-16x16.png?v=3e8A78pMBA' />
          <link rel='manifest' href='/static/site.webmanifest?v=3e8A78pMBA' />
          <link rel='shortcut icon' href='/static/favicon.ico?v=3e8A78pMBA' />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default MyDocument
