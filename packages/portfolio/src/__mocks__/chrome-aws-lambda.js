'use strict'

const mockLaunch = jest.fn()
const mockNewPage = jest.fn()
const mockGoto = jest.fn()
const mockScreenshot = jest.fn()
const mockClose = jest.fn()

const chromium = {
  puppeteer: {
    launch: mockLaunch.mockResolvedValue({
      newPage: mockNewPage.mockResolvedValue({
        goto: mockGoto,
        screenshot: mockScreenshot
      }),
      close: mockClose
    })
  }
}

chromium.mockLaunch = mockLaunch
chromium.mockNewPage = mockNewPage
chromium.mockGoto = mockGoto
chromium.mockScreenshot = mockScreenshot
chromium.mockClose = mockClose

module.exports = chromium
