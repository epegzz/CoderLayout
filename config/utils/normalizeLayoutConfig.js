/**
 * Allows using shorthand syntax in the config yaml file and converts it into
 * a normalized syntax for further use by the keylayout and karabiner generators.
 *
 * See the normalizeLayoutConfig.test.js for examples.
 */
const loadYaml = require('./loadYaml')
const keyCodes = loadYaml('config/keyCodes.yml')
const usedKeyboard = loadYaml('config/keyboard.yml')
const unicodes = loadYaml('config/outputUnicodes.yml')

/**
 * Allows us to specify key coords instead of key names:
 * Coords are in the format "<row>-<column>" with row and col starting with '1' from top/left.
 *
 * e.g. instead of
 *
 *      from: a
 *
 * you can write
 *
 *      from: 4-2
 */
function mapKeyCoordToKeyName(keyCoord) {
  if (!keyCoord.match(/^[0-9]-[0-9]+$/)) {
    return keyCoord
  }
  const coords = keyCoord.split('-')

  return usedKeyboard.layout[Number(coords[0]) - 1][Number(coords[1]) - 1]
}

function mapKeyNameToKeyCode(keyName) {
  return keyCodes[keyName]
}

function normalizeLayoutConfig(inputObj = {}) {
  const result = {}
  result.layers = normalizeLayers(inputObj.layers)
  return result
}

function normalizeLayers(layers) {
  const result = {}
  for (const layerId in layers) {
    const layer = layers[layerId]
    result[layerId] = {
      description: layer.description,
      trigger: layer.trigger,
      mappings: layer.mappings && normalizeLayerMappings(layer.mappings),
      output: layer.output && normalizeLayerOutput(layer.output)
    }
  }
  return result
}

function normalizeLayerMappings(inputMappings) {
  return inputMappings.map(inputMapping => {
    // - a: 1
    // - e:
    //     key_code: 4
    if (Object.keys(inputMapping).length === 1) {
      const fromArg = Object.keys(inputMapping)[0]
      const toArg = Object.values(inputMapping)[0]

      return {
        from: normalizeLayerMappingFrom(fromArg),
        to: normalizeLayerMappingTo(toArg),
      }
    }

    // - from: b
    //   to: c
    if (
      inputMapping.hasOwnProperty('from') &&
      inputMapping.hasOwnProperty('to')
    ) {
      return {
        from: normalizeLayerMappingFrom(inputMapping.from),
        to: normalizeLayerMappingTo(inputMapping.to),
      }
    }
  })
}

function normalizeLayerMappingFrom(input) {
  if (typeof input !== 'object') {
    return {
      key_code: mapKeyCoordToKeyName(String(input)),
    }
  }

  return {
    key_code: mapKeyCoordToKeyName(String(input.key_code)),
    modifiers: input.modifiers,
  }
}

function normalizeLayerMappingTo(to = []) {
  if (!Array.isArray(to)) {
    to = [to]
  }

  return to.map(input => {
    if (typeof input !== 'object') {
      return {
        key_code: String(input),
      }
    }

    let modifiers = input.modifiers || input.modifier

    if (modifiers && !Array.isArray(modifiers)) {
      modifiers = [modifiers]
    }

    return {
      key_code: String(input.key_code),
      modifiers,
    }
  })
}

/**
 * - Replaces key names or key coords with key codes.
 * - Adds shift value if shift value was omitted.
 */
function normalizeLayerOutput(layerOutput) {
  return layerOutput.map(entry => {
    // Replace key names or key coords with key codes.
    let keyCode = mapKeyCoordToKeyName(Object.keys(entry)[0])
    if (!Object.keys(keyCodes).includes(keyCode)) {
      keyCode = mapKeyNameToKeyCode(keyCode)
    }
    if (!Object.keys(keyCodes).includes(keyCode)) {
      throw new Error(`Invalid layer output entry: ${JSON.stringify(entry)}. No such keyCode "${keyCode}"`)
    }

    // Add shift value if shift value was omitted.
    let value = Object.values(entry)[0]
    if (!Array.isArray(value)) {
      value = [value, value]
    }

    // Allow referencing unicodes by name
    if (unicodes[value[0]]) value[0] = unicodes[value[0]]
    if (unicodes[value[1]]) value[1] = unicodes[value[1]]

    return { [keyCodes[keyCode]]: value}
  })
}

module.exports = normalizeLayoutConfig
