const generateKarabinerConfig = require('./generateKarabinerConfig')

describe('generateKarabinerConfig', () => {
  test('works', () => {
    const karabinerLayers = {
      layer0: {
        // 'keypad_plus' or `keypad_minus`
        triggerKeys: ['keypad_plus', 'keypad_minus'],
        mapping: {
          a: 'left_control',
        }
      },
      layer1: {
        // 'keypad_plus' and `keypad_minus`
        triggerKeys: [['keypad_plus', 'keypad_minus']],
        mapping: {
          x: '1',
          y: { output: '2' },
          z: { output: '3', modifiers: ['left_command'] }
        }
      },
      layer2: {
        triggerVariables: ['trigger_spacebar'],
        mapping: {
          a: 'left_control',
        }
      }
    }

    const keylayoutConfig = [
      { output: '1', virtualKeyName: 'n' },
      { output: '2', virtualKeyName: 'n', shift: true },
      { output: '3', virtualKeyName: 'm' },
    ]

    expect(generateKarabinerConfig({
      karabinerLayers,
      keylayoutConfig
    })).toMatchSnapshot()
  })
})
