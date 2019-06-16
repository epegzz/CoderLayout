const fs = require('fs')
const path = require('path')

const generateKeylayout = require('./lib/generateKeylayout')

const DIST_KEYLAYOUT_FILENAME = path.resolve(
  __dirname,
  '../../dist/CoderLayout.keylayout'
)

const keylayout = generateKeylayout()

console.log(keylayout)
/*
fs.writeFileSync(
  DIST_KEYLAYOUT_FILENAME,
  keylayout
)
*/
