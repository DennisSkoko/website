'use strict'

const aws = require('../aws')

function getKey({ stackId, physicalResourceId }) {
  const sanitizedStackId = stackId
    .split('/')
    .slice(1)
    .join('-')

  return `${sanitizedStackId}/${physicalResourceId}/thumbnail.png`
}

async function put({ stackId, physicalResourceId, thumbnail }) {
  const key = getKey({ stackId, physicalResourceId })

  await aws.s3
    .putObject({
      Bucket: process.env.PORTFOLIO_BUCKET_NAME,
      Key: key,
      Body: thumbnail,
      ContentType: 'image/png'
    })
    .promise()

  return `${process.env.PORTFOLIO_BUCKET_URL}/${key}`
}

function remove({ stackId, physicalResourceId }) {
  return aws.s3
    .deleteObject({
      Bucket: process.env.PORTFOLIO_BUCKET_NAME,
      Key: getKey({ stackId, physicalResourceId })
    })
    .promise()
}

module.exports = { put, remove }
