'use strict'

const aws = require('../aws')
const portfolio = require('./portfolio')

jest.mock('../aws')

beforeAll(() => {
  aws.s3.putObject.mockReturnValue({
    promise: jest.fn().mockResolvedValue()
  })

  aws.s3.deleteObject.mockReturnValue({
    promise: jest.fn().mockResolvedValue()
  })
})

describe('put()', () => {
  function act() {
    return portfolio.put({
      stackId: 'arn:aws:cloudformation:eu-north-1:1234:stack/foo/bar-biz',
      physicalResourceId: 'mock-physical-resource-id',
      thumbnail: 'mock-thumbnail'
    })
  }

  it('uses bucket name from `process.env.PORTFOLIO_BUCKET_NAME`', async () => {
    await act()

    expect(aws.s3.putObject).toHaveBeenCalledWith(
      expect.objectContaining({ Bucket: process.env.PORTFOLIO_BUCKET_NAME })
    )
  })

  it('adds given thumbnail to the bucket', async () => {
    await act()

    expect(aws.s3.putObject).toHaveBeenCalledWith(
      expect.objectContaining({ Body: 'mock-thumbnail' })
    )
  })

  it('resolves a key from `stackId` and `physicalResourceId`', async () => {
    await act()

    expect(aws.s3.putObject).toHaveBeenCalledWith(
      expect.objectContaining({
        Key: 'foo-bar-biz/mock-physical-resource-id/thumbnail.png'
      })
    )
  })

  it('adds the correct content-type to metadata', async () => {
    await act()

    expect(aws.s3.putObject).toHaveBeenCalledWith(
      expect.objectContaining({ ContentType: 'image/png' })
    )
  })

  it('returns a url to the object', async () => {
    const result = await act()

    expect(result).toBe(
      `${process.env.PORTFOLIO_BUCKET_URL}/foo-bar-biz/mock-physical-resource-id/thumbnail.png`
    )
  })
})

describe('delete()', () => {
  function act() {
    return portfolio.remove({
      stackId: 'arn:aws:cloudformation:eu-north-1:1234:stack/foo/bar-biz',
      physicalResourceId: 'mock-physical-resource-id',
      thumbnail: 'mock-thumbnail'
    })
  }

  it('uses bucket name from `process.env.PORTFOLIO_BUCKET_NAME`', async () => {
    await act()

    expect(aws.s3.deleteObject).toHaveBeenCalledWith(
      expect.objectContaining({ Bucket: process.env.PORTFOLIO_BUCKET_NAME })
    )
  })

  it('resolves a key from `stackId` and `physicalResourceId`', async () => {
    await act()

    expect(aws.s3.deleteObject).toHaveBeenCalledWith(
      expect.objectContaining({
        Key: 'foo-bar-biz/mock-physical-resource-id/thumbnail.png'
      })
    )
  })
})
