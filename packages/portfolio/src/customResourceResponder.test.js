'use strict'

const customResourceResponder = require('./customResourceResponder')
const fetch = require('node-fetch')

jest.mock('node-fetch')

describe('succeed()', () => {
  it('makes a POST request to the url from given `request`', async () => {
    await customResourceResponder.succeed({
      request: {
        responseURL: 'https://example.com'
      }
    })

    expect(fetch).toHaveBeenCalledWith(
      'https://example.com',
      expect.objectContaining({ method: 'POST' })
    )
  })

  it('sends the data as JSON', async () => {
    await customResourceResponder.succeed({
      request: {
        responseURL: 'https://example.com'
      }
    })

    expect(fetch).toHaveBeenCalledWith(
      expect.anything(),
      expect.objectContaining({
        body: expect.any(String),
        headers: { 'Content-Type': 'application/json' }
      })
    )
  })

  it('sends a `SUCCESS` status', async () => {
    await customResourceResponder.succeed({ request: {} })

    const body = JSON.parse(fetch.mock.calls[0][1].body)

    expect(body).toEqual(expect.objectContaining({ Status: 'SUCCESS' }))
  })

  it('sends required fields that are copied from `request`', async () => {
    await customResourceResponder.succeed({
      request: {
        stackId: 'mock-stack-id',
        requestId: 'mock-request-id',
        logicalResourceId: 'mock-logical-resource-id'
      }
    })

    const body = JSON.parse(fetch.mock.calls[0][1].body)

    expect(body).toEqual(
      expect.objectContaining({
        StackId: 'mock-stack-id',
        RequestId: 'mock-request-id',
        LogicalResourceId: 'mock-logical-resource-id'
      })
    )
  })

  it('sends the given `physicalResourceId`', async () => {
    await customResourceResponder.succeed({
      request: {},
      physicalResourceId: 'mock-physical-resource-id'
    })

    const body = JSON.parse(fetch.mock.calls[0][1].body)

    expect(body).toEqual(
      expect.objectContaining({
        PhysicalResourceId: 'mock-physical-resource-id'
      })
    )
  })
})

describe('fail()', () => {
  it('makes a POST request to the url from given `request`', async () => {
    await customResourceResponder.fail({
      request: {
        responseURL: 'https://example.com'
      }
    })

    expect(fetch).toHaveBeenCalledWith(
      'https://example.com',
      expect.objectContaining({ method: 'POST' })
    )
  })

  it('sends the data as JSON', async () => {
    await customResourceResponder.fail({
      request: {
        responseURL: 'https://example.com'
      }
    })

    expect(fetch).toHaveBeenCalledWith(
      expect.anything(),
      expect.objectContaining({
        body: expect.any(String),
        headers: { 'Content-Type': 'application/json' }
      })
    )
  })

  it('sends a `FAILED` status', async () => {
    await customResourceResponder.fail({ request: {} })

    const body = JSON.parse(fetch.mock.calls[0][1].body)

    expect(body).toEqual(expect.objectContaining({ Status: 'FAILED' }))
  })

  it('sends the given `reason`', async () => {
    await customResourceResponder.fail({ request: {}, reason: 'mock-reason' })

    const body = JSON.parse(fetch.mock.calls[0][1].body)

    expect(body).toEqual(expect.objectContaining({ Reason: 'mock-reason' }))
  })

  it('sends required fields that are copied from `request`', async () => {
    await customResourceResponder.fail({
      request: {
        stackId: 'mock-stack-id',
        requestId: 'mock-request-id',
        logicalResourceId: 'mock-logical-resource-id'
      }
    })

    const body = JSON.parse(fetch.mock.calls[0][1].body)

    expect(body).toEqual(
      expect.objectContaining({
        StackId: 'mock-stack-id',
        RequestId: 'mock-request-id',
        LogicalResourceId: 'mock-logical-resource-id'
      })
    )
  })

  it('sends the given `physicalResourceId`', async () => {
    await customResourceResponder.fail({
      request: {},
      physicalResourceId: 'mock-physical-resource-id'
    })

    const body = JSON.parse(fetch.mock.calls[0][1].body)

    expect(body).toEqual(
      expect.objectContaining({
        PhysicalResourceId: 'mock-physical-resource-id'
      })
    )
  })
})
