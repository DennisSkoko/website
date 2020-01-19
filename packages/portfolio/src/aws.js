'use strict'

const S3 = require('aws-sdk/clients/s3')
const DynamoDB = require('aws-sdk/clients/dynamodb')

const aws = {
  s3: new S3({ apiVersion: '2006-03-01' }),
  dynamodb: new DynamoDB.DocumentClient({ apiVersion: '2012-08-10' })
}

module.exports = aws
