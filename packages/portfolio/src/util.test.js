'use strict'

const util = require('./util')

describe('isRegularObject()', () => {
  ;[
    {
      desc: 'buffer',
      input: Buffer.from('foo'),
      isObject: false
    },
    {
      desc: 'string',
      input: 'jer',
      isObject: false
    },
    {
      desc: 'function',
      input: () => {},
      isObject: false
    },
    {
      desc: 'Error',
      input: new Error(),
      isObject: false
    },
    {
      desc: 'Date',
      input: new Date('2020-01-26'),
      isObject: false
    },
    {
      desc: 'object',
      input: {},
      isObject: true
    }
  ].forEach(({ desc, input, isObject }) => {
    it(`returns ${isObject} when given a ${desc}`, () => {
      expect(util.isRegularObject(input)).toBe(isObject)
    })
  })
})

describe('mapObject()', () => {
  it('calls given function with the value and key for each key', () => {
    const func = jest.fn(() => ({}))

    util.mapObject({ foo: 'bar', biz: 14 }, func)

    expect(func).toHaveBeenCalledTimes(2)
    expect(func).toHaveBeenNthCalledWith(1, { value: 'bar', key: 'foo' })
    expect(func).toHaveBeenNthCalledWith(2, { value: 14, key: 'biz' })
  })

  it('supports overriding the keys', () => {
    const func = jest.fn(({ key }) => ({ key: `${key}foo` }))

    const result = util.mapObject({ bar: 'toe', sip: false }, func)

    expect(result).toEqual({ barfoo: 'toe', sipfoo: false })
  })

  it('supports overriding the values', () => {
    const func = jest.fn(({ value }) => ({ value: value + 1 }))

    const result = util.mapObject({ foo: 1, bar: 2 }, func)

    expect(result).toEqual({ foo: 2, bar: 3 })
  })

  it('returns a new instance of the object', () => {
    const func = jest.fn()
    const input = {}

    const result = util.mapObject(input, func)

    expect(result).not.toBe(input)
  })
})

describe('toCamelCase()', () => {
  it('returns a new instance of the object', () => {
    const input = { Foo: {} }

    const result = util.toCamelCase(input)

    expect(result).not.toBe(input)
    expect(result.foo).not.toBe(input.Foo)
  })

  it('converts all properties in given object to camel case', () => {
    const result = util.toCamelCase({
      Foo: 'bar',
      tie: false,
      BizFit: {
        BosPoi: 'toe',
        Seq: 23
      }
    })

    expect(result).toEqual({
      foo: 'bar',
      tie: false,
      bizFit: {
        bosPoi: 'toe',
        seq: 23
      }
    })
  })

  it('only modifies regular objects', () => {
    const result = util.toCamelCase({ Eor: Buffer.from('hui') })

    expect(result).toEqual({
      eor: Buffer.from('hui')
    })
  })
})

describe('toPascalCase()', () => {
  it('returns a new instance of the object', () => {
    const input = { foo: {} }

    const result = util.toPascalCase(input)

    expect(result).not.toBe(input)
    expect(result.Foo).not.toBe(input.foo)
  })

  it('converts all properties in given object to pascal case', () => {
    const result = util.toPascalCase({
      Foo: 'bar',
      tie: false,
      bizFit: {
        bosPoi: 'toe',
        seq: 23
      }
    })

    expect(result).toEqual({
      Foo: 'bar',
      Tie: false,
      BizFit: {
        BosPoi: 'toe',
        Seq: 23
      }
    })
  })

  it('only modifies regular objects', () => {
    const result = util.toPascalCase({ peo: Buffer.from('blu') })

    expect(result).toEqual({
      Peo: Buffer.from('blu')
    })
  })
})
