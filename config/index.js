const loadYaml = require('./utils/loadYaml')
const normalizeLayoutConfig = require('./utils/normalizeLayoutConfig')

const config = {
  keyboard: loadYaml('config/keyboard.yml'),
  keyCodes: loadYaml('config/keyCodes.yml'),
  layout: normalizeLayoutConfig(loadYaml('config/layout.yml'))
}

module.exports = config
