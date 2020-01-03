const padStart = require('lodash/padStart')

function encodeOutput(str) {
  return str.split('').map(encodeChar).join('')
}

function encodeChar (char){
  const hexCharCode = char
    .charCodeAt(0)
    .toString(16)
    .toUpperCase()

  return `&#x${padStart(hexCharCode, 4, '0')};`
}

module.exports = encodeOutput
