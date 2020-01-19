'use strict'

const bucket = require('../../bucket')
const database = require('../../database')
const screenshot = require('../../screenshot')
const handler = require('./handler')

jest.mock('../../bucket')
jest.mock('../../database')
jest.mock('../../screenshot')

beforeAll(() => {
  jest.spyOn(console, 'error')
})

it('does not reject if any erros are thrown', async () => {
  console.error.mockImplementationOnce(() => {})
  bucket.portfolio.remove.mockRejectedValueOnce(new Error())

  await handler({
    Records: [
      {
        eventName: 'REMOVE',
        dynamodb: {
          Keys: {
            StackId: { S: 'mock-stack-id' },
            PhysicalResourceId: { S: 'mock-physical-resource-id' }
          }
        }
      }
    ]
  })

  expect(console.error).toHaveBeenCalled()
})

describe('when record is created/updated', () => {
  it('takes a screenshot and uploads it to bucket', async () => {
    screenshot.mockResolvedValueOnce('mock-thumbnail')

    await handler({
      Records: [
        {
          eventName: 'MODIFY',
          dynamodb: {
            Keys: {
              StackId: { S: 'mock-stack-id' },
              PhysicalResourceId: { S: 'mock-physical-resource-id' }
            },
            NewImage: {
              Url: { S: 'https://example.com' }
            }
          }
        }
      ]
    })

    expect(screenshot).toHaveBeenCalledWith({ url: 'https://example.com' })
    expect(bucket.portfolio.put).toHaveBeenCalledWith({
      stackId: 'mock-stack-id',
      physicalResourceId: 'mock-physical-resource-id',
      thumbnail: 'mock-thumbnail'
    })
  })

  it('updates the database with the new thumbnail', async () => {
    screenshot.mockResolvedValueOnce('mock-thumbnail')
    bucket.portfolio.put.mockResolvedValueOnce('mock-thumbnail-url')

    await handler({
      Records: [
        {
          eventName: 'INSERT',
          dynamodb: {
            Keys: {
              StackId: { S: 'mock-stack-id' },
              PhysicalResourceId: { S: 'mock-physical-resource-id' }
            },
            NewImage: {
              Url: { S: 'https://example.com' }
            }
          }
        }
      ]
    })

    expect(database.portfolio.update).toHaveBeenCalledWith({
      stackId: 'mock-stack-id',
      physicalResourceId: 'mock-physical-resource-id',
      thumbnail: 'mock-thumbnail-url'
    })
  })
})

describe('when record is deleted', () => {
  it('removes the asset in bucket', async () => {
    await handler({
      Records: [
        {
          eventName: 'REMOVE',
          dynamodb: {
            Keys: {
              StackId: { S: 'mock-stack-id' },
              PhysicalResourceId: { S: 'mock-physical-resource-id' }
            }
          }
        }
      ]
    })

    expect(bucket.portfolio.remove).toHaveBeenCalledWith({
      stackId: 'mock-stack-id',
      physicalResourceId: 'mock-physical-resource-id'
    })
  })
})
