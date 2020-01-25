'use strict'

const uuid = require('uuid/v4')
const aws = require('../../aws')
const CustomResource = require('../../CustomResource')
const validate = require('./validate')
const handler = require('./handler')

jest.mock('uuid/v4')
jest.mock('../../aws')
jest.mock('../../CustomResource')
jest.mock('./validate')

let mockCustomResourceRespond = null

beforeAll(() => {
  mockCustomResourceRespond = jest.fn()

  uuid.mockReturnValue('mock-uuid')

  CustomResource.mockImplementation(function() {
    this.respond = mockCustomResourceRespond.mockResolvedValue()
  })

  jest.spyOn(console, 'error')
})

afterAll(() => {
  jest.restoreAllMocks()
})

it('rejects the portfolio work if any errors occur', async () => {
  aws.sns.publish.mockRejectedValueOnce(new Error('mock-error'))
  console.error.mockImplementationOnce(() => {})

  await handler({ ResourceProperties: {} })

  expect(console.error).toHaveBeenCalledWith('Failed to handle resource', {
    error: expect.any(Error),
    event: JSON.stringify({ ResourceProperties: {} }, null, 2)
  })

  expect(mockCustomResourceRespond).toHaveBeenCalledWith({
    status: 'FAILED',
    physicalResourceId: 'mock-uuid',
    reason: 'Failed internally when trying to handle resource'
  })
})

describe('when giving a `Create` type event', () => {
  function act() {
    return handler({
      RequestType: 'Create',
      StackId: 'mock-stack-id',
      ResourceProperties: {
        Title: 'mock-title',
        Description: 'mock-desc',
        Url: 'mock-url'
      }
    })
  }

  it('validates the work', async () => {
    validate.mockReturnValueOnce([])

    await act()

    expect(validate).toHaveBeenCalledWith(
      expect.objectContaining({
        title: 'mock-title',
        description: 'mock-desc',
        url: 'mock-url'
      })
    )
  })

  it('rejects the work if validation fails', async () => {
    validate.mockReturnValueOnce([{ field: 'bil', message: 'sol' }])

    await act()

    expect(mockCustomResourceRespond).toHaveBeenCalledWith({
      status: 'FAILED',
      reason: expect.stringContaining('bil sol')
    })
  })

  it('publishes the work to the SNS topic when request is valid', async () => {
    validate.mockReturnValueOnce([])

    await act()

    expect(aws.sns.publish).toHaveBeenCalledWith({
      topicArn: process.env.PORTFOLIO_WORK_TOPIC_ARN,
      message: JSON.stringify({
        id: 'mock-uuid',
        title: 'mock-title',
        description: 'mock-desc',
        url: 'mock-url'
      }),
      messageAttributes: {
        action: { dataType: 'String', stringValue: 'put' }
      }
    })
  })

  it('accepts the portfolio work with success when it is valid', async () => {
    validate.mockReturnValueOnce([])

    await act()

    expect(mockCustomResourceRespond).toHaveBeenCalledWith({
      status: 'SUCCESS',
      physicalResourceId: 'mock-uuid'
    })
  })
})

describe('when giving an `Update` type event', () => {
  function act() {
    return handler({
      RequestType: 'Update',
      StackId: 'mock-stack-id',
      PhysicalResourceId: 'mock-physical-resource-id',
      ResourceProperties: {
        Title: 'mock-title',
        Description: 'mock-desc',
        Url: 'mock-url'
      }
    })
  }

  it('validates the work', async () => {
    validate.mockReturnValueOnce([])

    await act()

    expect(validate).toHaveBeenCalledWith(
      expect.objectContaining({
        title: 'mock-title',
        description: 'mock-desc',
        url: 'mock-url'
      })
    )
  })

  it('rejects the work if validation fails', async () => {
    validate.mockReturnValueOnce([{ field: 'bil', message: 'sol' }])

    await act()

    expect(mockCustomResourceRespond).toHaveBeenCalledWith({
      status: 'FAILED',
      reason: expect.stringContaining('bil sol')
    })
  })

  it('publishes the work to the SNS topic when request is valid', async () => {
    validate.mockReturnValueOnce([])

    await act()

    expect(aws.sns.publish).toHaveBeenCalledWith({
      topicArn: process.env.PORTFOLIO_WORK_TOPIC_ARN,
      message: JSON.stringify({
        id: 'mock-physical-resource-id',
        title: 'mock-title',
        description: 'mock-desc',
        url: 'mock-url'
      }),
      messageAttributes: {
        action: { dataType: 'String', stringValue: 'put' }
      }
    })
  })

  it('accepts the portfolio work with success when it is valid', async () => {
    validate.mockReturnValueOnce([])

    await act()

    expect(mockCustomResourceRespond).toHaveBeenCalledWith({
      status: 'SUCCESS',
      physicalResourceId: 'mock-physical-resource-id'
    })
  })
})

describe('when giving a `Delete` type event', () => {
  function act() {
    return handler({
      RequestType: 'Delete',
      StackId: 'mock-stack-id',
      PhysicalResourceId: 'mock-physical-resource-id',
      ResourceProperties: {
        Title: 'mock-title',
        Description: 'mock-desc',
        Url: 'mock-url'
      }
    })
  }

  it('skips validating when the work is deleted', async () => {
    await act()

    expect(validate).not.toHaveBeenCalled()
  })

  it('publishes the work to the SNS topic when request is valid', async () => {
    validate.mockReturnValueOnce([])

    await act()

    expect(aws.sns.publish).toHaveBeenCalledWith({
      topicArn: process.env.PORTFOLIO_WORK_TOPIC_ARN,
      message: JSON.stringify({ id: 'mock-physical-resource-id' }),
      messageAttributes: {
        action: { dataType: 'String', stringValue: 'remove' }
      }
    })
  })

  it('accepts the portfolio work with success when it is valid', async () => {
    validate.mockReturnValueOnce([])

    await act()

    expect(mockCustomResourceRespond).toHaveBeenCalledWith({
      status: 'SUCCESS',
      physicalResourceId: 'mock-physical-resource-id'
    })
  })
})
