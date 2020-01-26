'use strict'

const aws = require('../../aws')

async function handler(event) {
  await Promise.all(
    event.Records.map(async (record) => {
      const message = JSON.parse(record.Sns.Message)
      const { id } = message

      try {
        await Promise.all([
          aws.s3.deleteObject({
            bucket: process.env.PORTFOLIO_WORK_BUCKET_NAME,
            key: `${id}/thumbnail.png`
          }),

          aws.dynamodb.delete({
            tableName: process.env.PORTFOLIO_WORK_TABLE_NAME,
            key: { id }
          })
        ])
      } catch (error) {
        console.error('Failed to remove portfolio work', { error, message })
      }
    })
  )
}

module.exports = handler
