/**
 * Allows using shorthand syntax in the config yaml file and converts it into
 * a normalized syntax for further use by the keylayout and karabiner generators.
 *
 * See the normalizeConfig.test.js for examples.
 */

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
      key_code: String(input),
    }
  }

  return {
    key_code: String(input.key_code),
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

module.exports = normalizeConfig
