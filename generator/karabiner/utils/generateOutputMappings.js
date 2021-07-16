const { without, flatten, compact, split, find } = require('lodash')

function generateOutputMappings(karabinerConfig) {
  const rules = []

  const allTriggerKeys = karabinerConfig.triggerKeys || []
  const variant = karabinerConfig.variant // i.e "m1"

  for (const [layerName, layer] of Object.entries(karabinerConfig.layers)) {
    const manipulators = []
    const description = `Layer ${layerName}`
    const { triggerKeys: triggerKeyCombos = [], mapping } = layer
    if (!triggerKeyCombos.length) {
      generateAndAppendLayerManipulators({
        manipulators,
        mapping,
        allTriggerKeys,
        variant,
      })
    } else {
      for (let triggerKeyCombo of triggerKeyCombos) {
        if (!Array.isArray(triggerKeyCombo)) {
          triggerKeyCombo = [triggerKeyCombo]
        }
        generateAndAppendLayerManipulators({
          manipulators,
          mapping,
          allTriggerKeys,
          triggerCombo: triggerKeyCombo,
          variant,
        })
      }
    }
    rules.push({
      description,
      manipulators,
    })
  }
  return rules
}

function generateAndAppendLayerManipulators({
  mapping,
  allTriggerKeys,
  triggerCombo = [],
  manipulators,
  variant = undefined, // i.e "m1"
}) {
  for (const { from, to: toEntries = [] } of mapping) {
    const fromIsTriggerKey = allTriggerKeys.includes(from)

    const fromVariant = split(from, '~')[1]
    const fromWithoutVariantSuffix = split(from, '~')[0]

    if (Boolean(fromVariant) && fromVariant !== variant) {
      continue
    }

    if(Boolean(variant) && !fromVariant) {
      const hasVariant = (
        find(mapping, ({ from }) => {
          const _from = split(from, '~')[0]
          const _variant = split(from, '~')[1]
          return fromWithoutVariantSuffix === _from 
            && Boolean(_variant)
            && _variant == variant
        })
      )
      if (hasVariant) continue
    }

    const manipulator = {
      type: 'basic',
      from: {
        key_code: fromWithoutVariantSuffix,
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

    for (const toEntry of compact(toEntries)) {
      let outToEntry

      if (toEntry.keyName) {
        outToEntry = {
          key_code: toEntry.keyName,
          modifiers: toEntry.modifiers,
        }
      } else {
        outToEntry = toEntry
      }

      manipulator[fromIsTriggerKey ? 'to_if_alone' : 'to'].push(outToEntry)
    }

    if (fromIsTriggerKey) {
      manipulator.to.push({
        set_variable: {
          name: `trigger_${fromWithoutVariantSuffix}`,
          value: 1,
        },
      })
      manipulator.to_after_key_up.push({
        set_variable: {
          name: `trigger_${fromWithoutVariantSuffix}`,
          value: 0,
        },
      })
    }

    const usedTriggerKeys = flatten(triggerCombo)
    const unusedTriggerKeys = without(allTriggerKeys, ...usedTriggerKeys)

    manipulator.conditions.push(
      ...usedTriggerKeys.map(triggerKey => ({
        type: 'variable_if',
        name: `trigger_${triggerKey}`,
        value: 1,
      })),
      ...unusedTriggerKeys.map(triggerKey => ({
        type: 'variable_unless',
        name: `trigger_${triggerKey}`,
        value: 1,
      }))
    )

    console.log('>>>', { manipulator, toEntries })

    const isUsefulMapping =
      !manipulator.to.length ||
      fromIsTriggerKey ||
      toEntries.length > 1 ||
      (toEntries.length > 0 && toEntries[0].from !== toEntries[0].keyName) ||
      (toEntries.length > 0 && toEntries[0].shell_command) ||
      triggerCombo.length

    if (isUsefulMapping) {
      manipulators.push(manipulator)
    } else {
      console.log(
        `Ignoring useless mapping: ${JSON.stringify(manipulator, false, 2)}`
      )
    }
  }
}

module.exports = generateOutputMappings
