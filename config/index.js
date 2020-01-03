const loadYaml = require('./utils/loadYaml')
const generateKeylayoutConfig = require('./utils/generateKeylayoutConfig')
const generateKarabinerConfig = require('./utils/generateKarabinerConfig')

const karabinerLayers = loadYaml('./config/karabinerLayers.yml')
const keylayoutKeyCodes = loadYaml('./config/keylayoutKeyCodes.yml')
const keylayoutOutputMapping = loadYaml('./config/keylayoutOutputMapping.yml')
const keylayoutOutputAliases = loadYaml('./config/keylayoutOutputAliases.yml')

const keylayoutConfig = generateKeylayoutConfig({
  keylayoutKeyCodes,
  keylayoutOutputMapping,
  keylayoutOutputAliases
})

const karabinerConfig = generateKarabinerConfig({
  karabinerLayers,
  keylayoutConfig
})

const config = {
  karabiner: karabinerConfig,
  keylayout: keylayoutConfig
}

module.exports = config
