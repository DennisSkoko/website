'use strict'

const S3 = require('aws-sdk/clients/s3')
const DynamoDB = require('aws-sdk/clients/dynamodb')
const SNS = require('aws-sdk/clients/sns')
const util = require('./util')

const s3 = new S3({ apiVersion: '2006-03-01' })
const dynamodb = new DynamoDB.DocumentClient({ apiVersion: '2012-08-10' })
const sns = new SNS({ apiVersion: '2010-03-31' })

const aws = {
  s3: {
    putObject(params) {
      return s3.putObject(util.toPascalCase(params)).promise()
    }
  },

  dynamodb: {
    put(params) {
      return dynamodb.put(util.toPascalCase(params)).promise()
    }
  },

  sns: {
    publish(params) {
      return sns.publish(util.toPascalCase(params)).promise()
    }
  }
}

module.exports = aws
