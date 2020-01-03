const { pull } = require('lodash')
const encodeOutput = require('./encodeOutput')

function generateKeylayoutConfig ({
  keylayoutKeyCodes,
  keylayoutOutputMapping,
  keylayoutOutputAliases
}) {
  const keylayoutConfig = []
  const outputs = []

  for (let [virtualKeyName, outputMapping] of Object.entries(keylayoutOutputMapping)) {
    const virtualKeyCode = keylayoutKeyCodes[virtualKeyName]

    if (virtualKeyCode === undefined) {
      throw (`Missing key code: ${virtualKeyName}`)
    }

    if (!Array.isArray(outputMapping)) {
      outputMapping = [outputMapping]
    }
    // Replace output aliases
    const aliasedOutputMapping = outputMapping.map(
      output => keylayoutOutputAliases[output] || output
    )
    // encode output
    const encodedOutputMapping = aliasedOutputMapping.map(
      output => output.startsWith('&#x')
        ? output
        : encodeOutput(output)
    )

    if (encodedOutputMapping[0]) {
      if (outputs.includes(outputMapping[0])) {
        throw new Error(`Duplicate output definition: "${outputMapping[0]}"`)
      }
      outputs.push(outputMapping[0])
      keylayoutConfig.push({
        virtualKeyName,
        virtualKeyCode,
        output: outputMapping[0],
        encodedOutput: encodedOutputMapping[0]
      })
    }

    if (encodedOutputMapping[0] && !encodedOutputMapping[1]) {
      pull(outputs, outputMapping[1])
      encodedOutputMapping[1] = encodedOutputMapping[0]
    }

    if (encodedOutputMapping[1]) {
      if (outputs.includes(outputMapping[1])) {
        throw new Error(`Duplicate output definition: "${outputMapping[1]}"`)
      }
      outputs.push(outputMapping[1])
      keylayoutConfig.push({
        virtualKeyName,
        virtualKeyCode,
        shift: true,
        output: outputMapping[1],
        encodedOutput: encodedOutputMapping[1]
      })
    }
  }

  return keylayoutConfig
}

module.exports = generateKeylayoutConfig
