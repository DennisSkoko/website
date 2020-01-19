'use strict'

const chromium = require('chrome-aws-lambda')
const screenshot = require('./screenshot')

jest.mock('chrome-aws-lambda')

const { mockGoto, mockScreenshot, mockClose } = chromium

it('returns a screenshot of the given url as a buffer', async () => {
  mockScreenshot.mockResolvedValueOnce(Buffer.from('foo'))

  const result = await screenshot({ url: 'https://example.com' })

  expect(mockGoto).toHaveBeenCalledWith('https://example.com')
  expect(mockScreenshot).toHaveBeenCalled()
  expect(result).toBeInstanceOf(Buffer)
  expect(result.toString()).toBe('foo')
})

it('closes the browser when done', async () => {
  await screenshot({ url: 'https://example.com' })

  expect(mockClose).toHaveBeenCalled()
})

it('closes the browser even if an error occurs', async () => {
  mockScreenshot.mockRejectedValueOnce(new Error('bar'))

  const promise = screenshot({ url: 'https://example.com' })

  await expect(promise).rejects.toThrow('bar')
  expect(mockClose).toHaveBeenCalled()
})
