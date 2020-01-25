'use strict'

const uuid = require('uuid/v4')
const pick = require('lodash.pick')
const aws = require('../../aws')
const CustomResource = require('../../CustomResource')
const util = require('../../util')
const validate = require('./validate')

async function handler(event) {
  const physicalResourceId = event.PhysicalResourceId || uuid()

  const portfolioWork = {
    id: physicalResourceId,
    title: event.ResourceProperties.Title,
    description: event.ResourceProperties.Description,
    url: event.ResourceProperties.Url
  }

  const resource = new CustomResource({ request: util.toCamelCase(event) })

  try {
    if (event.RequestType === 'Create' || event.RequestType === 'Update') {
      const errors = validate(portfolioWork)

      if (errors.length) {
        await resource.respond({
          status: 'FAILED',
          reason: errors
            .map(({ field, message }) => `${field} ${message}`)
            .join(' | ')
        })
      }
    }

    await aws.sns.publish({
      topicArn: process.env.PORTFOLIO_WORK_TOPIC_ARN,
      message: JSON.stringify(
        event.RequestType === 'Delete'
          ? { action: 'remove', payload: pick(portfolioWork, 'id') }
          : { action: 'put', payload: portfolioWork }
      )
    })

    await resource.respond({ status: 'SUCCESS', physicalResourceId })
  } catch (error) {
    console.error('Failed to handle resource', {
      error,
      event: JSON.stringify(event, null, 2)
    })

    await resource.respond({
      status: 'FAILED',
      physicalResourceId,
      reason: 'Failed internally when trying to handle resource'
    })
  }
}

module.exports = handler
