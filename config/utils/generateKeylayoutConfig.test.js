const generateKeylayoutConfig = require('./generateKeylayoutConfig')

describe('generateKeylayoutConfig', () => {
  test('works', () => {
    const keylayoutKeyCodes = {
      'x': 100,
      'y': 101,
      'return_or_enter': 103
    }
    const keylayoutOutputMapping = {
      x: ['a', 'A'],
      y: ['b', 'B'],
      return_or_enter: 'return'
    }
    const keylayoutOutputAliases = {
      return: '&#x000D;'
    }

    expect(generateKeylayoutConfig({
      keylayoutKeyCodes,
      keylayoutOutputMapping,
      keylayoutOutputAliases
    })).toMatchSnapshot()
  })
})
