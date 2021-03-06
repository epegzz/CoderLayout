const { map } = require('lodash')
const generateOutputMappings = require('./generateOutputMappings')

describe('generateOutputMappings', () => {
  test('with two single triggers', () => {
    const karabinerConfig = {
      // TODO: it shold not be required to specify those here
      triggerKeys: ['x', 'y'],
      layers: {
        layer0: {
          mapping: [
            // TODO: right now we have to specify the keys here, otherwise no trigger
            // entries would be created. This should not be required.
            { from: 'x', to: [{ keyName: '0', modifiers: [] }] },
            { from: 'y', to: [{ keyName: '0', modifiers: [] }] },
          ],
        },
        layer1: {
          // 'x' or 'y'
          triggerKeys: ['x', 'y'],
          mapping: [{ from: 'a', to: [{ keyName: '1', modifiers: [] }] }],
        },
      },
    }

    expect(generateOutputMappings(karabinerConfig)).toMatchSnapshot()
  })

  test('with one multi-key trigger', () => {
    const karabinerConfig = {
      // TODO: it shold not be required to specify those here
      triggerKeys: ['x', 'y'],
      layers: {
        layer0: {
          mapping: [
            // TODO: right now we have to specify the keys here, otherwise no trigger
            // entries would be created. This should not be required.
            { from: 'x', to: [{ keyName: '0', modifiers: [] }] },
            { from: 'y', to: [{ keyName: '0', modifiers: [] }] },
          ],
        },
        layer1: {
          // 'x' and 'y'
          triggerKeys: [['x', 'y']],
          mapping: [{ from: 'a', to: [{ keyName: '1', modifiers: [] }] }],
        },
      },
    }

    expect(generateOutputMappings(karabinerConfig)).toMatchSnapshot()
  })

  test('without triggers', () => {
    const karabinerConfig = {
      layers: {
        layer1: {
          mapping: [
            {
              from: 'a',
              to: [
                { keyName: 'b', modifiers: [] },
                { keyName: 'b', modifiers: ['shift'] },
              ],
            },
          ],
        },
      },
    }

    expect(generateOutputMappings(karabinerConfig)).toMatchSnapshot()
  })

  test('with modifiers', () => {
    const karabinerConfig = {
      layers: {
        layer1: {
          mapping: [
            { from: 'a', to: [{ keyName: 'b', modifiers: ['left_command'] }] },
          ],
        },
      },
    }

    expect(generateOutputMappings(karabinerConfig)).toMatchSnapshot()
  })

  test('with m1 suffix', () => {
    const karabinerConfig = {
      layers: {
        layer1: {
          mapping: [
            { from: 'a', to: [{ keyName: '1' }] },
            { from: 'a~m1', to: [{ keyName: '2' }] },
            { from: 'b~x', to: [{ keyName: '3' }] },
            { from: 'b~y', to: [{ keyName: '4' }] },
            { from: 'c~m1', to: [{ keyName: '5' }] },
            { from: 'd', to: [{ keyName: '6' }] },
          ],
        },
      },
    }

    // No variant
    expect(
      map(
        generateOutputMappings(karabinerConfig)[0].manipulators,
        entry => `${entry.from.key_code} => ${entry.to[0].key_code}`
      )
    ).toMatchInlineSnapshot(`
            Array [
              "a => 1",
              "d => 6",
            ]
        `)

    // M1 variant
    expect(
      map(
        generateOutputMappings({ ...karabinerConfig, variant: 'm1' })[0]
          .manipulators,
        entry => `${entry.from.key_code} => ${entry.to[0].key_code}`
      )
    ).toMatchInlineSnapshot(`
      Array [
        "a => 2",
        "c => 5",
        "d => 6",
      ]
    `)
  })

  test('disabling keys', () => {
    const karabinerConfig = {
      layers: {
        layer1: {
          mapping: [{ from: 'a', to: [] }],
        },
      },
    }

    expect(generateOutputMappings(karabinerConfig)).toMatchSnapshot()
  })

  test('non keylayout mapping', () => {
    const karabinerConfig = {
      layers: {
        layer1: {
          mapping: [
            { from: 'a', to: [{ keyName: 'left_shift', modifiers: [] }] },
            { from: 'b', to: [{ keyName: 'left_control', modifiers: [] }] },
            { from: 'c', to: [{ keyName: 'left_command', modifiers: [] }] },
            { from: 'd', to: [{ keyName: 'left_option', modifiers: [] }] },
          ],
        },
      },
    }

    expect(generateOutputMappings(karabinerConfig)).toMatchSnapshot()
  })

  test('shell command', () => {
    const karabinerConfig = {
      layers: {
        layer1: {
          mapping: [{ from: 'a', to: [{ shell_command: 'foo' }] }],
        },
      },
    }

    expect(generateOutputMappings(karabinerConfig)).toMatchSnapshot()
  })
})
