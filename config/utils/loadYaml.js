const fs = require('fs')
const path = require('path')
const yaml = require('js-yaml')

/**
 * Loads contents from yaml files relative to the root directory.
 */
function loadYaml(rootFilePath) {
  return yaml.safeLoad(
      fs.readFileSync(path.resolve(__dirname, '../..', rootFilePath), 'utf8')
  )
}

module.exports = loadYaml
