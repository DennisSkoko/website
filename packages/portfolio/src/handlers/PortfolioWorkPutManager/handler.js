'use strict'

const aws = require('../../aws')
const screenshot = require('../../screenshot')

async function handler(event) {
  const message = JSON.parse(event.Records[0].Sns.Message)

  try {
    const { id, title, description, url } = message

    const thumbnail = {
      buffer: await screenshot({ url }),
      key: `${id}/thumbnail.png`,
      url: `${process.env.PORTFOLIO_WORK_BUCKET_URL}/${id}/thumbnail.png`
    }

    await Promise.all([
      aws.s3.putObject({
        bucket: process.env.PORTFOLIO_WORK_BUCKET_NAME,
        key: thumbnail.key,
        body: thumbnail.buffer,
        contentType: 'image/png'
      }),

      aws.dynamodb.put({
        tableName: process.env.PORTFOLIO_WORK_TABLE_NAME,
        item: { id, title, description, url, thumbnail: thumbnail.url }
      })
    ])
  } catch (error) {
    console.error('Failed to update portfolio work', { error, message })
  }
}

module.exports = handler
