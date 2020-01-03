const fs = require('fs')
const moment = require('moment')
const beautify = require('xml-beautifier')
const path = require('path')
const config = require('../../config')

const DIST_KEYLAYOUT_FILENAME = path.resolve(
  __dirname,
  '../../dist/CoderLayout.keylayout'
)

const TEMPLATE_KEYLAYOUT_FILENAME = path.resolve(
  __dirname,
  './keylayout.template.xml'
)

const id = `-${Date.now().toString().substr(9)}`
const date = moment().format('llll')
const baseKeys = []
const shiftKeys = []

for (const { virtualKeyCode, encodedOutput, shift } of config.keylayout) {
  const key = `<key code="${virtualKeyCode}" output="${encodedOutput}" />`
  shift
    ? shiftKeys.push(key)
    : baseKeys.push(key)
}

const keylayout = fs
  .readFileSync(TEMPLATE_KEYLAYOUT_FILENAME, 'utf8')
  .replace('{id}', id)
  .replace('{date}', date)
  .replace('{baseKeys}', baseKeys.join('\n'))
  .replace('{shiftKeys}', shiftKeys.join('\n'))

console.log(beautify(keylayout))

fs.writeFileSync(
  DIST_KEYLAYOUT_FILENAME,
  beautify(keylayout)
)
