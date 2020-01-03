const { without, flatten } = require('lodash')

function generateOutputMappings(karabinerConfig) {
  const rules = []

  const allTriggerKeys = karabinerConfig.triggerKeys || []

  for (const [layerName, layer] of Object.entries(karabinerConfig.layers)) {
    const manipulators = []
    const description = `Layer ${layerName}`
    const { triggerKeys: triggerKeyCombos = [], mapping } = layer
    if (!triggerKeyCombos.length) {
      generateAndAppendManipulators({ manipulators, mapping, allTriggerKeys })
    } else {
      for (let triggerKeyCombo of triggerKeyCombos) {
        if (!Array.isArray(triggerKeyCombo)) {
          triggerKeyCombo = [triggerKeyCombo]
        }
        generateAndAppendManipulators({ manipulators, mapping, allTriggerKeys, triggerCombo: triggerKeyCombo })
      }
    }
    rules.push({
      description,
      manipulators,
    })
  }
  return rules
}

function generateAndAppendManipulators({ mapping, allTriggerKeys, triggerCombo = [], manipulators }) {
  for (const {from, to} of mapping) {
    const fromIsTriggerKey = allTriggerKeys.includes(from)
    const manipulator = {
      type: 'basic',
      from: {
        key_code: from,
        modifiers: {
          mandatory: [],
          optional: ['any'],
        },
      },
      to: [],
      to_if_alone: [],
      to_after_key_up: [],
      conditions: [],
    }

    if (to) {
      manipulator[fromIsTriggerKey ? 'to_if_alone' : 'to'].push({
        key_code: to.keyName,
        modifiers: to.modifiers,
      })
    }

    if (fromIsTriggerKey) {
      manipulator.to.push({
        set_variable: {
          name: `trigger_${from}`,
          value: 1,
        },
      })
      manipulator.to_after_key_up.push({
        set_variable: {
          name: `trigger_${from}`,
          value: 0,
        },
      })
    }

    const usedTriggerKeys = flatten(triggerCombo)
    const unusedTriggerKeys = without(allTriggerKeys, ...usedTriggerKeys)

    manipulator.conditions.push(
      ...usedTriggerKeys.map(triggerKey =>
        ({
          type: 'variable_if',
          name: `trigger_${triggerKey}`,
          value: 1,
        }),
      ),
      ...unusedTriggerKeys.map(triggerKey =>
        ({
          type: 'variable_unless',
          name: `trigger_${triggerKey}`,
          value: 1,
        }),
      ),
    )

    const isUsefulMapping =
      !manipulator.to.length ||
      fromIsTriggerKey ||
      to && from !== to.keyName ||
      triggerCombo.length

    if (isUsefulMapping) {
      manipulators.push(manipulator)
    } else {
      console.log(`Ignoring useless mapping: ${JSON.stringify(manipulator, false, 2)}`)
    }
  }
}

module.exports = generateOutputMappings
