const uniq = require('lodash/uniq')

function generateLayerTriggers(allTriggerKeys) {
  const manipulators = []

  for (const triggerKey of uniq(allTriggerKeys)) {
    manipulators.push({
      type: 'basic',
      from: {
        key_code: triggerKey,
        modifiers: {
          optional: ['any'],
        },
      },
      to: [
        {
          set_variable: {
            name: `trigger_${triggerKey}`,
            value: 1,
          },
        },
      ],
      to_after_key_up: [
        {
          set_variable: {
            name: `trigger_${triggerKey}`,
            value: 0,
          },
        },
      ],
    })
  }

  return {
    description: 'Layer triggers',
    manipulators,
  }
}

module.exports = generateLayerTriggers
