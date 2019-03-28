const generateLayer = require('./generateLayer')
const normalizeConfig = require('../../../utils/normalizeConfig')

describe('generateLayer', () => {
  it('works', () => {
    const config = normalizeConfig({
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
