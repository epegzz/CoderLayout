const fs = require('fs')
const path = require('path')
const yaml = require('js-yaml')

const normalizeLayoutConfig = require('../../config/utils/normalizeLayoutConfig')
const generateTriggers = require('./lib/generateLayerTriggers')
const generateLayer = require('./lib/generateLayer')

const TEMPLATE_KARABINER_JSON_FILENAME = path.resolve(
  __dirname,
  'karabiner.template.json'
)
const DIST_KARABINER_JSON_FILENAME = path.resolve(
  __dirname,
  '../../dist/karabiner.json'
)
const configOut = JSON.parse(fs.readFileSync(TEMPLATE_KARABINER_JSON_FILENAME))

const rules = []
configOut.profiles[0].complex_modifications.rules = rules

const config = normalizeLayoutConfig(
  yaml.safeLoad(
    fs.readFileSync(path.resolve(__dirname, '../config/layout.yml'), 'utf8')
  )
)

let allTriggerKeys = []
const collectTriggerKeysFromLayer = triggerKeys => {
  if (!Array.isArray(triggerKeys)) triggerKeys = [triggerKeys]
  allTriggerKeys = [...allTriggerKeys, ...triggerKeys]
}

for (const layerName in config.layers) {
  const layerConfig = config.layers[layerName]
  collectTriggerKeysFromLayer(layerConfig.trigger)
  rules.push(generateLayer(layerName, layerConfig))
}

rules.push(generateTriggers(allTriggerKeys))

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

fs.writeFileSync(
  DIST_KARABINER_JSON_FILENAME,
  JSON.stringify(configOut, true, 4)
)
