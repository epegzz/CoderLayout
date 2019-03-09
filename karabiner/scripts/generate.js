const fs = require('fs')
const path = require('path')
const yaml = require('js-yaml')

const normalizeConfig = require('../../utils/normalizeConfig')

const TEMPLATE_KARABINER_JSON_FILENAME = path.resolve(
  __dirname,
  '../karabiner.template.json'
)
const DIST_KARABINER_JSON_FILENAME = path.resolve(
  __dirname,
  '../dist/karabiner.json'
)

const configOut = JSON.parse(fs.readFileSync(TEMPLATE_KARABINER_JSON_FILENAME))
const rules = configOut.profiles[0].complex_modifications.rules

const config = normalizeConfig(yaml.safeLoad(
  fs.readFileSync(path.resolve(__dirname, '../../config/layout.yml'), 'utf8')
))

function createLayer(layerName, { trigger, description, mappings }) {
  const manipulators = []
  const layerVariableName = `${layerName}_layer`

  manipulators.push({
    from: {
      key_code: trigger,
      modifiers: {
        mandatory: [],
        optional: ['any'],
      },
    },
    to: [
      {
        set_variable: {
          name: layerVariableName,
          value: 1,
        },
      },
    ],
    to_after_key_up: [
      {
        set_variable: {
          name: layerVariableName,
          value: 0,
        },
      },
    ],
    type: 'basic',
  })

  for (const mapping of mappings) {
    manipulators.push({
      conditions: [
        {
          type: 'variable_if',
          name: layerVariableName,
          value: 1,
        },
      ],
      from: {
        key_code: mapping.from.key_code,
        modifiers: {
          mandatory: [],
          optional: ['any'],
        },
      },
      to: mapping.to,
      type: 'basic',
    })
  }

  return {
    description,
    manipulators,
  }
}

for (const layerName in config.layers) {
  const layerConfig = config.layers[layerName]
  rules.push(createLayer(layerName, layerConfig))

  // Spacebar acts as shift
  rules.push({
    manipulators: [
      {
        description: 'Spacebar to left_shift',
        from: {
          key_code: 'spacebar',
          modifiers: {
            optional: ['any'],
          },
        },
        to: [
          {
            key_code: 'left_shift',
          },
        ],
        to_if_alone: [
          {
            key_code: 'spacebar',
            modifiers: {
              optional: ['any'],
            },
          },
        ],
        type: 'basic',
      },
    ],
  })
}

fs.writeFileSync(
  DIST_KARABINER_JSON_FILENAME,
  JSON.stringify(configOut, true, 4)
)
