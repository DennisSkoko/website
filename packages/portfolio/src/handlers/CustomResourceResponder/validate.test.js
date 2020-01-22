'use strict'

const validate = require('./validate')

;[
  {
    desc: 'title is empty',
    input: { description: 'foo', url: 'bar' },
    errors: [{ field: 'title', message: 'is required' }]
  },

  {
    desc: 'description is empty',
    input: { title: 'biz', url: 'soe' },
    errors: [{ field: 'description', message: 'is required' }]
  },

  {
    desc: 'url is empty',
    input: { title: 'tim', description: 'sio' },
    errors: [{ field: 'url', message: 'is required' }]
  }
].forEach(({ desc, input, errors }) => {
  it(`returns errors when ${desc}`, () => {
    expect(validate(input)).toEqual(errors)
  })
})

it('returns null if portfolio work is valid', async () => {
  const result = validate({
    title: 'Foo',
    description: 'Lorem ipsum dolor sit amet',
    url: 'https://example.com'
  })

  expect(result).toEqual([])
})
