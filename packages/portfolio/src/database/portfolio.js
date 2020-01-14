'use strict'

const DynamoDB = require('aws-sdk/clients/dynamodb')
const util = require('../util')

const db = new DynamoDB.DocumentClient({
  apiVersion: '2012-08-10',
  params: { TableName: process.env.PORTFOLIO_TABLE_NAME }
})

function put({ stackId, physicalResourceId, title, description, url }) {
  return db
    .put({
      Item: util.toPascalCase({
        stackId,
        physicalResourceId,
        title,
        description,
        url
      })
    })
    .promise()
}

function remove({ stackId, physicalResourceId }) {
  return db
    .delete({
      Key: util.toPascalCase({
        stackId,
        physicalResourceId
      })
    })
    .promise()
}

module.exports = { put, remove }
