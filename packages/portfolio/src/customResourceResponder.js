'use strict'

const fetch = require('node-fetch')
const util = require('./util')

function sendResponse({ url, data }) {
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(util.toPascalCase(data)),
    headers: { 'Content-Type': 'application/json' }
  })
}

async function succeed({ request, physicalResourceId }) {
  return sendResponse({
    url: request.responseURL,
    data: {
      status: 'SUCCESS',
      physicalResourceId,
      stackId: request.stackId,
      requestId: request.requestId,
      logicalResourceId: request.logicalResourceId
    }
  })
}

async function fail({ request, physicalResourceId, reason }) {
  return sendResponse({
    url: request.responseURL,
    data: {
      status: 'FAILED',
      reason,
      physicalResourceId,
      stackId: request.stackId,
      requestId: request.requestId,
      logicalResourceId: request.logicalResourceId
    }
  })
}

module.exports = { succeed, fail }
