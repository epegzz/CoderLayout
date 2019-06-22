/**
 * Allows using shorthand syntax in the config yaml file and converts it into
 * a normalized syntax for further use by the keylayout and karabiner generators.
 *
 * See the normalizeConfig.test.js for examples.
 */

const fs = require('fs')
const path = require('path')
const yaml = require('js-yaml')

const keyCodes = yaml.safeLoad(fs.readFileSync(path.resolve(__dirname, 'keyCodes.yml'), 'utf8'))

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

  const layout = [
    ['escape', 'f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8', 'f9', 'f10', 'f11', 'f12'],
    ['non_us_backslash', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'hyphen', 'equal_sign', 'delete_or_backspace'],
    ['tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'open_bracket', 'close_bracket', 'return_or_enter'],
    ['caps_lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'semicolon', 'quote', 'backslash'],
    ['left_shift', 'grave_accent_and_tilde', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'comma', 'period', 'slash', 'right_shift'],
    ['fn', 'left_control', 'left_alt', 'left_command', 'spacebar', 'right_command', 'right_alt', 'left', 'up', 'down', 'right']
  ]
  return layout[Number(coords[0]) - 1][Number(coords[1]) - 1]
}

function mapKeyNameToKeyCode(keyName) {
  return keyCodes[keyName]
}

function normalizeConfig(inputObj = {}) {
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
      mappings: normalizeLayerMappings(layer.mappings),
      output: normalizeLayerOutput(layer.output)
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
 * Replaces key names or key coords with key codes
 */
function normalizeLayerOutput(layerOutput) {
  return layerOutput.map(entry => {
    let keyCode = mapKeyCoordToKeyName(Object.keys(entry)[0])
    if (!Object.keys(keyCodes).includes(keyCode)) {
      keyCode = mapKeyNameToKeyCode(keyCode)
    }
    if (!Object.keys(keyCodes).includes(keyCode)) {
      throw new Error(`Invalid layer output entry: ${JSON.stringify(entry)}. No such keyCode "${keyCode}"`)
    }
    return { [keyCodes[keyCode]]: Object.values(entry)[0]}
  })
}

module.exports = normalizeConfig
