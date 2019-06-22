const yaml = require('js-yaml')
const normalizeConfig = require('./normalizeConfig')

const yamlInput = `
  layers:
    some_layer:
      description: 'some layer'
      trigger: left_command
      output:
        - 3-1: a # using key coord
        - escape: '&#x000D;' # using key name
      mappings:
        - 4-2: 1
        - from: 5-7
          to: 2
        - from:
            key_code: 5-5
          to: 3
        - 4-4:
            key_code: 4
            modifier: left_command    
        - 3-4:
            key_code: 5
            modifiers: left_command    
        - 4-5:
            key_code: 6
            modifiers: [left_command, left_shift]    
        - 4-6:
          - 7
          - 8
`

const yamlOutput = `
  layers:
    some_layer:
      description: 'some layer'
      trigger: left_command
      output:
        - 43: a
        - 41: '&#x000D;'
      mappings:
        - from:
            key_code: a
          to:
            - key_code: '1'  
        - from:
            key_code: b
          to:
            - key_code: '2'  
        - from:
            key_code: c
          to:
            - key_code: '3'  
        - from:
            key_code: d
          to:
            - key_code: '4'
              modifiers: [left_command]  
        - from:
            key_code: e
          to:
            - key_code: '5'
              modifiers: [left_command]  
        - from:
            key_code: f
          to:
            - key_code: '6'
              modifiers: [left_command, left_shift]  
        - from:
            key_code: g
          to:
            - key_code: '7'
            - key_code: '8'
`

describe('normalizeConfig', () => {
  it('works as expected', () => {
    expect(normalizeConfig(yaml.load(yamlInput))).toEqual(yaml.load(yamlOutput))
  })
})
