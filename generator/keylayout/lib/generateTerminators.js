const { get } = require('lodash')

/**
 *  Generates keylayout terminators in the following form:
 *
 *  <terminators>
 *    <when state="none" output="" />
 *    <when state="layer_coding" output="" />
 *    <when state="layer_navigation" output="" />
 *    <when state="layer_numbers" output="" />
 *  </terminators>
 */
function generateTerminators (config) {
  const entries = Object.keys(config.layout.layers).map(layerId => {
    const state = layerId === 'base'
      ? 'none'
      : layerId

    return {
      _attributes: {
        state,
        output: ''
      }
    }
  })

  return {
    when: entries
  }

}

module.exports = generateTerminators
