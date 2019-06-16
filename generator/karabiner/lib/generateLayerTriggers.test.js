const generateLayerTriggers = require('./generateLayerTriggers')

describe('generateLayerTriggers', () => {
  it('works', () => {
    const triggerKeys = ['a', 'b']
    expect(generateLayerTriggers(triggerKeys)).toMatchSnapshot()
  })
})
