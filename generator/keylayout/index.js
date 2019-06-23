const fs = require('fs')
const path = require('path')
const config = require('../../config')
const generateKeylayout = require('./lib/generateKeylayout')

const DIST_KEYLAYOUT_FILENAME = path.resolve(
  __dirname,
  '../../dist/CoderLayout.keylayout'
)

const keylayout = generateKeylayout(config)

console.log(keylayout)

fs.writeFileSync(
  DIST_KEYLAYOUT_FILENAME,
  keylayout
)
