const generateOutputMappings = require('./generateOutputMappings')

describe('generateOutputMappings', () => {
  test('with triggers', () => {
    const karabinerConfig = {
      triggerKeys: ['x', 'y', 'v', 'w'],
      layers: {
        layer1: {
          // 'x' or 'y'
          triggerKeys: ['x', 'y'],
          mapping: [
            { from: 'a', to: { keyName: 'b', modifiers: []} }
          ]
        },
        layer2: {
          // 'v' and 'w'
          triggerKeys: [['v', 'w']],
          mapping: [
            { from: 'c', to: { keyName: 'd', modifiers: []} }
          ]
        }
      }
    }

    expect(generateOutputMappings(karabinerConfig)).toMatchSnapshot()
  })

  test('without triggers', () => {
    const karabinerConfig = {
      layers: {
        layer1: {
          mapping: [
            { from: 'a', to: { keyName: 'b', modifiers: []} }
          ]
        }
      }
    }

    expect(generateOutputMappings(karabinerConfig)).toMatchSnapshot()
  })

  test('with modifiers', () => {
    const karabinerConfig = {
      layers: {
        layer1: {
          mapping: [
            { from: 'a', to: { keyName: 'b', modifiers: ['left_command']} }
          ]
        }
      }
    }

    expect(generateOutputMappings(karabinerConfig)).toMatchSnapshot()
  })

  test('disabling keys', () => {
    const karabinerConfig = {
      layers: {
        layer1: {
          mapping: [
            { from: 'a', to: null }
          ]
        }
      }
    }

    expect(generateOutputMappings(karabinerConfig)).toMatchSnapshot()
  })

  test('non keylayout mapping', () => {
    const karabinerConfig = {
      layers: {
        layer1: {
          mapping: [
            { from: 'a', to: { keyName: 'left_shift', modifiers: []} },
            { from: 'b', to: { keyName: 'left_control', modifiers: []} },
            { from: 'c', to: { keyName: 'left_command', modifiers: []} },
            { from: 'd', to: { keyName: 'left_option', modifiers: []} },
          ]
        }
      }
    }

    expect(generateOutputMappings(karabinerConfig)).toMatchSnapshot()
  })

})
