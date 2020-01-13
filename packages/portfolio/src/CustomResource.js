'use strict'

const fetch = require('node-fetch')
const EmptyRequiredField = require('./errors/EmptyRequiredField')
const util = require('./util')

const Status = {
  SUCCESS: 'SUCCESS',
  FAILED: 'FAILED'
}

const RequestType = {
  CREATE: 'Create',
  UPDATE: 'Update',
  DELETE: 'Delete'
}

function CustomResource({ request } = {}) {
  if (!new.target) return new CustomResource(...arguments)

  if (!request) throw new EmptyRequiredField('request')

  async function respond({ status, physicalResourceId, reason } = {}) {
    if (!status) throw new EmptyRequiredField('status')

    if (request.requestType === RequestType.CREATE && !physicalResourceId) {
      throw new EmptyRequiredField('physicalResourceId', {
        when: `\`requestType\` is ${RequestType.CREATE}`
      })
    }

    if (status === Status.FAILED && !reason) {
      throw new EmptyRequiredField('reason', {
        when: `\`status\` is ${Status.SUCCESS}`
      })
    }

    await fetch(request.responseURL, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(
        util.toPascalCase({
          status,
          reason,
          physicalResourceId:
            request.requestType === RequestType.CREATE
              ? physicalResourceId
              : request.physicalResourceId,
          stackId: request.stackId,
          requestId: request.requestId,
          logicalResourceId: request.logicalResourceId
        })
      )
    })
  }

  this.respond = respond
}

CustomResource.Status = Status
CustomResource.RequestType = RequestType

module.exports = CustomResource
