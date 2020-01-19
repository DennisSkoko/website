'use strict'

const aws = require('../aws')
const portfolio = require('./portfolio')

jest.mock('../aws')

beforeAll(() => {
  aws.dynamodb.put.mockReturnValue({
    promise: jest.fn().mockResolvedValue()
  })

  aws.dynamodb.update.mockReturnValue({
    promise: jest.fn().mockResolvedValue()
  })

  aws.dynamodb.delete.mockReturnValue({
    promise: jest.fn().mockResolvedValue()
  })
})

afterAll(() => {
  jest.restoreAllMocks()
})

describe('put()', () => {
  it('uses table name from `process.env.PORTFOLIO_TABLE_NAME`', async () => {
    await portfolio.put({})

    expect(aws.dynamodb.put).toHaveBeenCalledWith(
      expect.objectContaining({ TableName: process.env.PORTFOLIO_TABLE_NAME })
    )
  })
})

describe('update()', () => {
  it('uses table name from `process.env.PORTFOLIO_TABLE_NAME`', async () => {
    await portfolio.update({})

    expect(aws.dynamodb.update).toHaveBeenCalledWith(
      expect.objectContaining({ TableName: process.env.PORTFOLIO_TABLE_NAME })
    )
  })

  it('only updates the given item', async () => {
    await portfolio.update({
      stackId: 'mock-stack-id',
      physicalResourceId: 'mock-physical-resource-id'
    })

    expect(aws.dynamodb.update).toHaveBeenCalledWith(
      expect.objectContaining({
        Key: {
          StackId: 'mock-stack-id',
          PhysicalResourceId: 'mock-physical-resource-id'
        }
      })
    )
  })

  it('only updates with the values given', async () => {
    await portfolio.update({
      title: 'foo',
      url: 'https://example.com'
    })

    expect(aws.dynamodb.update).toHaveBeenCalledWith(
      expect.objectContaining({
        AttributeUpdates: {
          Title: { Action: 'PUT', Value: 'foo' },
          Url: { Action: 'PUT', Value: 'https://example.com' }
        }
      })
    )
  })
})

describe('delete()', () => {
  it('uses table name from `process.env.PORTFOLIO_TABLE_NAME`', async () => {
    await portfolio.remove({})

    expect(aws.dynamodb.delete).toHaveBeenCalledWith(
      expect.objectContaining({ TableName: process.env.PORTFOLIO_TABLE_NAME })
    )
  })
})
