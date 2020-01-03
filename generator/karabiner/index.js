const fs = require('fs')
const path = require('path')
const config = require('../../config')

const generateOutputMappings = require('./utils/generateOutputMappings')

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

const outputMappings = generateOutputMappings(config.karabiner)

rules.push(...outputMappings)

fs.writeFileSync(
  DIST_KARABINER_JSON_FILENAME,
  JSON.stringify(configOut, true, 4)
)
