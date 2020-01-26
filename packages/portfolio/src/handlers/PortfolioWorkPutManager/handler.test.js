'use strict'

const aws = require('../../aws')
const screenshot = require('../../screenshot')
const handler = require('./handler')

jest.mock('../../aws')
jest.mock('../../screenshot')

function act() {
  return handler({
    Records: [
      {
        Sns: {
          Message: JSON.stringify({
            id: 'mock-id',
            title: 'mock-title',
            description: 'mock-desc',
            url: 'mock-url'
          })
        }
      }
    ]
  })
}

beforeAll(() => {
  screenshot.mockResolvedValue('mock-screenshot-buffer')

  jest.spyOn(console, 'error')
})

afterAll(() => {
  jest.restoreAllMocks()
})

it('takes a screenshot of the work', async () => {
  await act()

  expect(screenshot).toHaveBeenCalledWith({ url: 'mock-url' })
})

it('uploads the screenshot to `PORTFOLIO_WORK_BUCKET_NAME`', async () => {
  await act()

  expect(aws.s3.putObject).toHaveBeenCalledWith({
    bucket: process.env.PORTFOLIO_WORK_BUCKET_NAME,
    key: 'mock-id/thumbnail.png',
    body: 'mock-screenshot-buffer',
    contentType: 'image/png'
  })
})

it('handles errors from uploading', async () => {
  console.error.mockImplementationOnce(() => {})
  aws.s3.putObject.mockRejectedValueOnce(new Error('Unexpected'))

  await act()

  expect(console.error).toHaveBeenCalledWith(
    'Failed to update portfolio work',
    {
      error: expect.any(Error),
      message: {
        id: 'mock-id',
        title: 'mock-title',
        description: 'mock-desc',
        url: 'mock-url'
      }
    }
  )
})

it('writes the result to `PORTFOLIO_WORK_TABLE_NAME` database', async () => {
  await act()

  expect(aws.dynamodb.put).toHaveBeenCalledWith({
    tableName: process.env.PORTFOLIO_WORK_TABLE_NAME,
    item: {
      id: 'mock-id',
      title: 'mock-title',
      description: 'mock-desc',
      url: 'mock-url',
      thumbnail: `${process.env.PORTFOLIO_WORK_BUCKET_URL}/mock-id/thumbnail.png`
    }
  })
})

it('handles errors from writing to database', async () => {
  console.error.mockImplementationOnce(() => {})
  aws.dynamodb.put.mockRejectedValueOnce(new Error('Unexpected'))

  await act()

  expect(console.error).toHaveBeenCalledWith(
    'Failed to update portfolio work',
    {
      error: expect.any(Error),
      message: {
        id: 'mock-id',
        title: 'mock-title',
        description: 'mock-desc',
        url: 'mock-url'
      }
    }
  )
})
