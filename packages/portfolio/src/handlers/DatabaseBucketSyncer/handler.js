'use strict'

const bucket = require('../../bucket')
const database = require('../../database')
const screenshot = require('../../screenshot')

async function handler(event) {
  await Promise.all(
    event.Records.map(async record => {
      try {
        const stackId = record.dynamodb.Keys.StackId.S
        const physicalResourceId = record.dynamodb.Keys.PhysicalResourceId.S

        switch (record.eventName) {
          case 'INSERT':
          case 'MODIFY': {
            const thumbnail = await screenshot({
              url: record.dynamodb.NewImage.Url.S
            })

            const thumbnailUrl = await bucket.portfolio.put({
              stackId,
              physicalResourceId,
              thumbnail
            })

            await database.portfolio.update({
              stackId,
              physicalResourceId,
              thumbnail: thumbnailUrl
            })
            break
          }

          case 'REMOVE':
            await bucket.portfolio.remove({ stackId, physicalResourceId })
            break

          default:
            throw new Error(`Unknown event name: ${record.eventName}`)
        }
      } catch (error) {
        console.error('Failed to sync the bucket with the database', {
          error,
          record: JSON.stringify(record, null, 2)
        })
      }
    })
  )
}

module.exports = handler
