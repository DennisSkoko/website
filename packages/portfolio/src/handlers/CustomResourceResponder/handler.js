'use strict'

const uuid = require('uuid/v4')
const database = require('../../database')
const util = require('../../util')
const CustomResource = require('../../CustomResource')

function validateResourceData(data) {
  return ['title', 'description', 'url']
    .filter(field => !data[field])
    .map(field => `${field} is required`)
}

async function handler(rawEvent) {
  try {
    const event = util.toCamelCase(rawEvent)
    const physicalResourceId = event.physicalResourceId || uuid()
    const resource = new CustomResource({ request: event })

    try {
      switch (event.requestType) {
        case CustomResource.RequestType.CREATE:
        case CustomResource.RequestType.UPDATE: {
          const errors = validateResourceData(event.resourceProperties)

          if (errors.length) {
            await resource.respond({
              status: CustomResource.Status.FAILED,
              physicalResourceId,
              reason: errors.join(', ')
            })
            return
          }

          await database.portfolio.put({
            stackId: event.stackId,
            physicalResourceId,
            title: event.resourceProperties.title,
            description: event.resourceProperties.description,
            url: event.resourceProperties.url
          })
          break
        }

        case CustomResource.RequestType.DELETE:
          await database.portfolio.remove({
            stackId: event.stackId,
            physicalResourceId
          })
          break

        default:
          throw new Error(`Unknown request type: ${event.requestType}`)
      }

      await resource.respond({
        status: CustomResource.Status.SUCCESS,
        physicalResourceId
      })
    } catch (error) {
      console.error('Failed to sync the resource to database', { error })

      await resource.respond({
        status: CustomResource.Status.FAILED,
        physicalResourceId,
        reason: error.event
      })
    }
  } catch (error) {
    console.error('Unable to responds to the custom resource request', {
      error,
      event: JSON.stringify(rawEvent, null, 2)
    })
  }
}

module.exports = handler
