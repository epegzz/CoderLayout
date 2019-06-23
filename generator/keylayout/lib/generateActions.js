const { get } = require('lodash')

/**
 *  Generates keylayout actions in the following form:
 *
 *   <action id="29">
 *     <when state="none" output="j"/>
 *     <when state="layer_coding" output="&#x001D;"/> # some characters like '"' or "tab" need to be encoded, others like "<" or "…" can be put as unicode directly
 *     <when state="layer_navigation" output=""/> # muted
 *     <when state="layer_numbers" output="4"/>
 *   </action>
 *   <action id="shift29">
 *     <when state="none" output="J"/>
 *     // We're repeating the stuff from the non-shift layer here, otherwise they won't work as soon as shift got pressed
 *     <when state="layer_coding" output="&#x001D;"/>
 *     <when state="layer_navigation" output=""/> # muted
 *     <when state="layer_numbers" output="4"/>
 *   </action>
 */
function generateActions (config) {
  const actions = []

  const addAction = (layerId, keyCode, output, shift = false) => {
    keyCode = Number(keyCode)

    const actionId = shift
      ? `shift${keyCode}`
      : keyCode

    let action = actions.find(action => get(action, '_attributes.id') === actionId)

    if (!Object.values(config.keyCodes).includes(keyCode)) {
      throw new Error(`Unknown key code: ${keyCode}. Make sure it is defined in "keyCodes.yml"`)
    }
    let keyName = Object.entries(config.keyCodes).find(entry => entry[1] === keyCode)[0]

    if (!action) {
      action = {
        _comment: ` ${shift ? 'Shift + ' : ''}${keyName} `,
        _attributes: {
          id: actionId
        },
        when: []
      }
      actions.push(action)
    }

    const state = layerId === 'base' ? 'none' : `layer_${layerId}`

    const entry = action.when.find(entry => entry._attributes.state === state)

    if (entry) {
      entry._attributes.output = output
    } else {
      action.when.push({
        _attributes: {
          state,
          output
        }
      })
    }
  }

  // add default actions for all layers and key codes, disabling all undefined keys
  for (const keyCode of Object.values(config.keyCodes)) {
    for (const layerId of Object.keys(config.layout.layers)) {
      addAction(layerId, keyCode, '')
      addAction(layerId, keyCode, '', true)
    }
  }

  // add actions from layout config
  for (const [layerId, layer] of Object.entries(config.layout.layers)) {
    for (const entry of layer.output || []) {
      const baseOutput = Object.values(entry)[0][0]
      const shiftOutput = Object.values(entry)[0][1]
      const keyCode = Object.keys(entry)[0]
      addAction(layerId, keyCode, baseOutput)
      addAction(layerId, keyCode, shiftOutput, true)
    }
  }

  return actions
}

module.exports = generateActions
