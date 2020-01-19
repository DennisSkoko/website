'use strict'

const chromium = require('chrome-aws-lambda')

async function handler({ url }) {
  let browser = null

  try {
    browser = await chromium.puppeteer.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath,
      headless: chromium.headless
    })

    const page = await browser.newPage()
    await page.goto(url)

    return await page.screenshot()
  } finally {
    await browser.close()
  }
}

module.exports = handler
