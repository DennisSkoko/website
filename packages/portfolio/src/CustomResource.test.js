'use strict'

const fetch = require('node-fetch')
const CustomResource = require('./CustomResource')

jest.mock('node-fetch')

it('returns an instance of it even without `new`', () => {
  expect(CustomResource({ request: {} })).toBeInstanceOf(CustomResource)
  expect(new CustomResource({ request: {} })).toBeInstanceOf(CustomResource)
})

it('throws when `request` is not given', () => {
  expect(() => new CustomResource()).toThrow('request')
})

describe('respond()', () => {
  it('makes a PUT request to `responseURL` from given `request`', async () => {
    await new CustomResource({
      request: { responseURL: 'mock-response-url' }
    }).respond({ status: CustomResource.Status.SUCCESS })

    expect(fetch).toHaveBeenCalledWith(
      'mock-response-url',
      expect.objectContaining({ method: 'PUT' })
    )
  })

  it('sends the data as JSON', async () => {
    await new CustomResource({
      request: { responseURL: 'mock-response-url' }
    }).respond({ status: CustomResource.Status.SUCCESS })

    expect(fetch).toHaveBeenCalledWith(
      expect.anything(),
      expect.objectContaining({
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' }
      })
    )
  })

  it('sends the given `status`', async () => {
    await new CustomResource({ request: {} }).respond({
      status: CustomResource.Status.SUCCESS
    })

    const body = JSON.parse(fetch.mock.calls[0][1].body)

    expect(body).toEqual(
      expect.objectContaining({ Status: CustomResource.Status.SUCCESS })
    )
  })

  it('sends required fields that are copied from `request`', async () => {
    await new CustomResource({
      request: {
        stackId: 'mock-stack-id',
        requestId: 'mock-request-id',
        logicalResourceId: 'mock-logical-resource-id'
      }
    }).respond({ status: CustomResource.Status.SUCCESS })

    const body = JSON.parse(fetch.mock.calls[0][1].body)

    expect(body).toEqual(
      expect.objectContaining({
        StackId: 'mock-stack-id',
        RequestId: 'mock-request-id',
        LogicalResourceId: 'mock-logical-resource-id'
      })
    )
  })

  it('throws when `status` is not given', async () => {
    const promise = new CustomResource({ request: {} }).respond()
    await expect(promise).rejects.toThrow('status')
  })

  describe(`when status is \`${CustomResource.Status.FAILED}\``, () => {
    it('rejects when `reason` is not given', async () => {
      const promise = new CustomResource({ request: {} }).respond({
        status: CustomResource.Status.FAILED
      })

      await expect(promise).rejects.toThrow('reason')
    })
  })

  describe(`when request type is \`${CustomResource.RequestType.CREATE}\``, () => {
    it('rejects when `physicalResourceId` is not given', async () => {
      const promise = new CustomResource({
        request: { requestType: CustomResource.RequestType.CREATE }
      }).respond({ status: CustomResource.Status.SUCCESS })

      await expect(promise).rejects.toThrow('physicalResourceId')
    })
  })
})
