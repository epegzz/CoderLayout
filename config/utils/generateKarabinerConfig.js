const { uniq, compact } = require('lodash')

/**
 * Example output:
 *
 *  layers: {
 *    layer1: {
 *      triggerKeys: ['left_shift']
 *      mapping: [
 *        {
 *          from: 'a',
 *          to: {
 *            keyName: 'b',
 *            modifiers: ['shift', 'command']
 *          }
 *        },
 *        {
 *          from: 'x',
 *          to: {
 *            keyName: 'y',
 *            modifiers: []
 *          }
 *        },
 *        ...
 *      ]
 *    }
 *  }
 */
function generateKarabinerConfig ({
  karabinerLayers,
  keylayoutConfig
}) {
  const result = {
    triggerKeys: collectTriggersFromLayers(karabinerLayers, 'keys'),
    triggerVariables: collectTriggersFromLayers(karabinerLayers, 'variables'),
    layers: {}
  }

  for (const [layerName, layer] of Object.entries(karabinerLayers)) {
    result.layers[layerName] = {
      triggerKeys: layer.triggerKeys,
      mapping: []
    }

    for (let [from, to] of Object.entries(layer.mapping)) {
      if (to && typeof to !== 'object') {
        const isKeylayoutOutput =
          !to.endsWith('arrow') &&
          !to.endsWith('shift') &&
          !to.endsWith('control') &&
          !to.endsWith('command') &&
          !to.endsWith('option')

        to = isKeylayoutOutput
          ? { output: to }
          : { keyName: to}
      }

      if (to && !to.modifiers) {
        to.modifiers = []
      }

      if (to && to.output && !to.keyName) {
        const keyLayoutMapping = keylayoutConfig.find(entry => entry.output === to.output)
        if (!keyLayoutMapping) {
          throw new Error(`Missing keylayout entry for "${to.output}"`)
        }
        if (keyLayoutMapping.shift) {
          to.modifiers.push('shift')
        }
        to.keyName = keyLayoutMapping.virtualKeyName
      }
      result.layers[layerName].mapping.push({ from, to })
    }
  }

  return result
}

function collectTriggersFromLayers(layers, type) {
  let allTriggers = []
  for (const layer of Object.values(layers)) {
    let triggers = type === 'keys'
      ? layer.triggerKeys
      : layer.triggerVariables
    if (!triggers) continue
    if (!Array.isArray(triggers)) {
      triggers = [triggers]
    }
    for (const entry of triggers) {
      allTriggers = compact(uniq([
        ...allTriggers,
        ...Array.isArray(entry)
          ? entry
          : [entry]
      ]))
    }
  }
  return allTriggers
}

module.exports = generateKarabinerConfig
