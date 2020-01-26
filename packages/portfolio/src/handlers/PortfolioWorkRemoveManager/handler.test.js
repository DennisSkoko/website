'use strict'

const aws = require('../../aws')
const handler = require('./handler')

jest.mock('../../aws')

function act() {
  return handler({
    Records: [
      {
        Sns: {
          Message: JSON.stringify({ id: 'mock-id' })
        }
      }
    ]
  })
}

beforeAll(() => {
  jest.spyOn(console, 'error')
})

afterAll(() => {
  jest.restoreAllMocks()
})

it('removes the work from `PORTFOLIO_WORK_BUCKET_NAME` bucket', async () => {
  await act()

  expect(aws.s3.deleteObject).toHaveBeenCalledWith({
    bucket: process.env.PORTFOLIO_WORK_BUCKET_NAME,
    key: 'mock-id/thumbnail.png'
  })
})

it('handles errors from bucket', async () => {
  console.error.mockImplementationOnce(() => {})
  aws.s3.deleteObject.mockRejectedValueOnce(new Error('Unexpected'))

  await act()

  expect(console.error).toHaveBeenCalledWith(
    'Failed to remove portfolio work',
    {
      error: expect.any(Error),
      message: { id: 'mock-id' }
    }
  )
})

it('removes the work from `PORTFOLIO_WORK_TABLE_NAME` database', async () => {
  await act()

  expect(aws.dynamodb.delete).toHaveBeenCalledWith({
    tableName: process.env.PORTFOLIO_WORK_TABLE_NAME,
    key: { id: 'mock-id' }
  })
})

it('handles errors from database', async () => {
  console.error.mockImplementationOnce(() => {})
  aws.dynamodb.delete.mockRejectedValueOnce(new Error('Unexpected'))

  await act()

  expect(console.error).toHaveBeenCalledWith(
    'Failed to remove portfolio work',
    {
      error: expect.any(Error),
      message: { id: 'mock-id' }
    }
  )
})

it('handles all records', async () => {
  await handler({
    Records: [
      {
        Sns: {
          Message: JSON.stringify({ id: 'mock-id-1' })
        }
      },
      {
        Sns: {
          Message: JSON.stringify({ id: 'mock-id-2' })
        }
      }
    ]
  })

  expect(aws.s3.deleteObject).toHaveBeenCalledTimes(2)
  expect(aws.s3.deleteObject).toHaveBeenCalledWith(
    expect.objectContaining({
      key: expect.stringContaining('mock-id-1')
    })
  )
  expect(aws.s3.deleteObject).toHaveBeenCalledWith(
    expect.objectContaining({
      key: expect.stringContaining('mock-id-2')
    })
  )

  expect(aws.dynamodb.delete).toHaveBeenCalledTimes(2)
  expect(aws.dynamodb.delete).toHaveBeenCalledWith(
    expect.objectContaining({
      key: {
        id: expect.stringContaining('mock-id-1')
      }
    })
  )
  expect(aws.dynamodb.delete).toHaveBeenCalledWith(
    expect.objectContaining({
      key: {
        id: expect.stringContaining('mock-id-2')
      }
    })
  )
})
