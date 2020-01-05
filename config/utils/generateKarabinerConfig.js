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
 *          to: [{
 *            keyName: 'b',
 *            modifiers: ['shift', 'command']
 *          }]
 *        },
 *        {
 *          from: 'x',
 *          to: [{
 *            keyName: 'y',
 *            modifiers: []
 *          }]
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

    for (let [from, rawToEntries = []] of Object.entries(layer.mapping)) {
      const toEntries = []

      if (!Array.isArray(rawToEntries)) {
        rawToEntries = [rawToEntries]
      }
      for (let toEntry of rawToEntries) {
        if (toEntry && typeof toEntry !== 'object') {
          const isKeylayoutOutput =
            !toEntry.endsWith('arrow') &&
            !toEntry.endsWith('shift') &&
            !toEntry.endsWith('control') &&
            !toEntry.endsWith('command') &&
            !toEntry.endsWith('option')

          toEntry = isKeylayoutOutput
            ? { output: toEntry }
            : { keyName: toEntry}
        }

        if (toEntry && !toEntry.modifiers) {
          toEntry.modifiers = []
        }

        if (toEntry && toEntry.output && !toEntry.keyName) {
          const keyLayoutMapping = keylayoutConfig.find(entry => entry.output === toEntry.output)
          if (!keyLayoutMapping) {
            throw new Error(`Missing keylayout entry for "${toEntry.output}"`)
          }
          if (keyLayoutMapping.shift) {
            toEntry.modifiers.push('shift')
          }
          toEntry.keyName = keyLayoutMapping.virtualKeyName
        }
        toEntries.push(toEntry)
      }

      result.layers[layerName].mapping.push({ from, to: toEntries })
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
