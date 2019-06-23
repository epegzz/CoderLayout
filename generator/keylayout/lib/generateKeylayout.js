const convert = require('xml-js')
const moment = require('moment')
const { without } = require('lodash')
const generateActions = require('./generateActions')
const generateTerminators = require('./generateTerminators')

function generateKeylayout(config) {

  const actions = generateActions(config)
  const terminators = generateTerminators(config)

  const layerIds = Object.keys(config.layout.layers)

  const layerSwitchingKeys = without(layerIds, 'base').map((layerId, index) => ({
    _attributes: {
      code: 140 + index, // we're using key codes 140, 141, 142, ... for layer switching
      action: `layerSwitch_${layerId}`
    }
  }))

  const layerSwitchingActions = without(layerIds, 'base').map((layerId) => ({
    _attributes: {
      id: `layerSwitch_${layerId}`,
    },
    when: [
      { _attributes: {
          state: 'none',
          next: `layer_${layerId}`
        }
      }
    ]
  }))

  // XML file structure documentation can be found at:
  // https://developer.apple.com/library/archive/technotes/tn2056/_index.html
  const js = {
    _declaration: {
      _attributes: {
        version: '1.0',
        encoding: 'UTF-8',
      }
    },
    _doctype:
      'keyboard PUBLIC "file://localhost/System/Library/DTDs/KeyboardLayout.dtd"',
    _comment: `Generated on ${moment().format('llll')}`,
    keyboard: {
      _attributes: {
        group: '126',
        id: `-${Date.now()}`,
        name: `CoderLayout (${moment().format('YYYY-MM-DD HH:mm')})`,
        maxout: '20'
      },
      layouts: {
        layout: {
          _attributes: {
            first: '0',
            last: '17',
            modifiers: 'Modifiers',
            mapSet: 'ANSI'
          },
        },
      },
      modifierMap: {
        _attributes: {
          id: 'Modifiers',
          defaultIndex: '0'
        },
        keyMapSelect: [
          {
            _comment: ' Non-Shift ',
            _attributes: {
              mapIndex: '0'
            },
            modifier: {
              _attributes: {
                keys: ''
              }
            }
          },
          {
            _comment: ' Shift ',
            _attributes: {
              mapIndex: '1'
            },
            modifier: {
              _attributes: {
                keys: 'anyShift caps?'
              }
            }
          }
        ]
      },
      keyMapSet: {
        _attributes: {
          id: 'ANSI'
        },
        keyMap: [
          {
            _comment: ' Non-Shift ',
            _attributes: {
              index: '0'
            },
            key: [
              // "Layer Switching" keys
              ...layerSwitchingKeys,

              // Rest of the keys
              ...Object.values(config.keyCodes).map(keyCode => ({
                _attributes: {
                  code: keyCode,
                  action: keyCode
                }
              }))
            ]
          },
          {
            _comment: ' Shift ',
            _attributes: {
              index: '1'
            },
            key: [
              ...Object.values(config.keyCodes).map(keyCode => ({
                _attributes: {
                  code: keyCode,
                  action: `shift${keyCode}`
                }
              }))
            ]
          }
        ]
      },
      actions: [
        ...layerSwitchingActions,
        ...actions
      ],
      terminators,
    },
  }
  const options = { compact: true, spaces: 2 }
  return convert.js2xml(js, options)
}

module.exports = generateKeylayout
