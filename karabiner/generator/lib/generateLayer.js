function generateLayer(layerName, { trigger, description, mappings }) {
  const manipulators = []
  const triggerKeys = Array.isArray(trigger) ? trigger : [trigger]

  for (const mapping of mappings) {
    manipulators.push({
      from: {
        key_code: mapping.from.key_code,
        modifiers: {
          mandatory: [],
          optional: ['any'],
        },
      },
      to: mapping.to,
      type: 'basic',
      conditions: triggerKeys.map(triggerKey => ({
        type: 'variable_if',
        name: `trigger_${triggerKey}`,
        value: 1,
      })),
    })
  }

  return {
    description,
    manipulators,
  }
}

module.exports = generateLayer
