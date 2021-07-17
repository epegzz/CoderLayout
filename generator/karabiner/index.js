const fs = require('fs')
const path = require('path')
const config = require('../../config')
const loadYaml = require('../../config/utils/loadYaml')

const generateOutputMappings = require('./utils/generateOutputMappings')

const TEMPLATE_KARABINER_YML_FILENAME = path.resolve(
  __dirname,
  'karabiner.template.yml'
)

const DIST_KARABINER_JSON_FILENAME = path.resolve(
  __dirname,
  `../../dist/karabiner${
    process.env.VARIANT ? `.${process.env.VARIANT}` : ''
  }.json`
)

const configOut = loadYaml(TEMPLATE_KARABINER_YML_FILENAME)
//const configOut = JSON.parse(fs.readFileSync(TEMPLATE_KARABINER_YML_FILENAME))

//const rules = []
const rules = configOut.profiles[0].complex_modifications.rules

const outputMappings = generateOutputMappings(config.karabiner)

rules.push(...outputMappings)

fs.writeFileSync(
  DIST_KARABINER_JSON_FILENAME,
  JSON.stringify(configOut, true, 4)
)
