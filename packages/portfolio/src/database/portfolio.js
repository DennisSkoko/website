'use strict'

const aws = require('../aws')
const util = require('../util')

function put({
  stackId,
  physicalResourceId,
  title,
  description,
  url,
  thumbnail
}) {
  return aws.dynamodb
    .put({
      TableName: process.env.PORTFOLIO_TABLE_NAME,
      Item: util.toPascalCase({
        stackId,
        physicalResourceId,
        title,
        description,
        url,
        thumbnail
      })
    })
    .promise()
}

function update({
  stackId,
  physicalResourceId,
  title,
  description,
  url,
  thumbnail
}) {
  const AttributeUpdates = {}

  if (title !== undefined) {
    AttributeUpdates.Title = { Action: 'PUT', Value: title }
  }

  if (description !== undefined) {
    AttributeUpdates.Description = { Action: 'PUT', Value: description }
  }

  if (url !== undefined) {
    AttributeUpdates.Url = { Action: 'PUT', Value: url }
  }

  if (thumbnail !== undefined) {
    AttributeUpdates.Thumbnail = { Action: 'PUT', Value: thumbnail }
  }

  return aws.dynamodb
    .update({
      TableName: process.env.PORTFOLIO_TABLE_NAME,
      AttributeUpdates,
      Key: {
        StackId: stackId,
        PhysicalResourceId: physicalResourceId
      }
    })
    .promise()
}

function remove({ stackId, physicalResourceId }) {
  return aws.dynamodb
    .delete({
      TableName: process.env.PORTFOLIO_TABLE_NAME,
      Key: util.toPascalCase({
        stackId,
        physicalResourceId
      })
    })
    .promise()
}

module.exports = { put, update, remove }
