const generateLayer = require('./generateLayer')
const normalizeLayoutConfig = require('../../../config/utils/normalizeLayoutConfig')

describe('generateLayer', () => {
  it('works', () => {
    const config = normalizeLayoutConfig({
      layers: {
        test: {
          description: 'description',
          trigger: ['x', 'y'],
          mappings: [{ a: 'b'}, {c: 'd'}]
        },
        test2: {
          description: 'description2',
          trigger: 'x',
          mappings: [{ a: 'b'}, {c: 'd'}]
        },
      },
    })
    const result = generateLayer('test', config.layers.test)
    const result2 = generateLayer('test', config.layers.test2)
    expect(result).toMatchSnapshot()
    expect(result2).toMatchSnapshot()
  })
})
