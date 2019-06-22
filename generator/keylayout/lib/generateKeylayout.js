const convert = require('xml-js')

function generateKeylayout() {
  const js = {
    _declaration: {
      _attributes: {
        version: '1.0',
        encoding: 'UTF-8',
      },
    },
    _doctype:
      'keyboard PUBLIC "file://localhost/System/Library/DTDs/KeyboardLayout.dtd"',
    _comment: `Generated on ${new Date()}`,
    keyboard: {
      _attributes: {
        group: '126',
        id: '-25277',
        name: `CoderLayout-${Date.now()}`,
        maxout: '20',
      },
      layouts: {
        layout: {
          _attributes: {
            first: '0',
            last: '17',
            modifiers: 'Modifiers',
            mapSet: 'ANSI',
          },
        },
      },
      modifierMap: {
        _attributes: {
          id: 'Modifiers',
          defaultIndex: '0',
        },
        keyMapSelect: [
          {
            _comment: 'normal layer ',
            _attributes: {
              mapIndex: '0',
            },
            modifier: {
              _attributes: {
                keys: '',
              },
            },
          },
          {
            _comment: 'shift layer ',
            _attributes: {
              mapIndex: '1',
            },
            modifier: {
              _attributes: {
                keys: 'anyShift caps?',
              },
            },
          },
        ],
      },
      keyMapSet: {
        _attributes: {
          id: 'ANSI',
        },
        keyMap: [
          {
            _comment: 'normal layer ',
            _attributes: {
              index: '0',
            },
            key: [
              {
                _attributes: {
                  code: '15',
                  action: 'a',
                },
              },
            ],
          },
          {
            _comment: 'shift layer ',
            _attributes: {
              index: '1',
            },
            key: [
              {
                _attributes: {
                  code: '15',
                  action: 'A',
                },
              },
            ],
          },
        ],
      },
      actions: {
        action: [
          {
            _attributes: {
              id: '0',
            },
            when: [
              {
                _attributes: {
                  state: 'none',
                  output: '0',
                },
              },
              {
                _attributes: {
                  state: 'stateSwitch',
                  next: 'coding',
                },
              },
            ],
          },
          {
            _attributes: {
              id: '1',
            },
            when: {
              _attributes: {
                state: 'none',
                output: '1',
              },
            },
          },
          {
            _attributes: {
              id: '2',
            },
            when: {
              _attributes: {
                state: 'none',
                output: '2',
              },
            },
          },
          {
            _attributes: {
              id: '3',
            },
            when: {
              _attributes: {
                state: 'none',
                output: '3',
              },
            },
          },
          {
            _attributes: {
              id: '4',
            },
            when: {
              _attributes: {
                state: 'none',
                output: '4',
              },
            },
          },
          {
            _attributes: {
              id: '5',
            },
            when: {
              _attributes: {
                state: 'none',
                output: '5',
              },
            },
          },
          {
            _attributes: {
              id: '6',
            },
            when: {
              _attributes: {
                state: 'none',
                output: '6',
              },
            },
          },
          {
            _attributes: {
              id: '7',
            },
            when: {
              _attributes: {
                state: 'none',
                output: '7',
              },
            },
          },
          {
            _attributes: {
              id: '8',
            },
            when: {
              _attributes: {
                state: 'none',
                output: '8',
              },
            },
          },
          {
            _attributes: {
              id: '9',
            },
            when: {
              _attributes: {
                state: 'none',
                output: '9',
              },
            },
          },
          {
            _attributes: {
              id: 'DANISH_DOLLAR',
            },
            when: {
              _attributes: {
                state: 'none',
                next: 'stateSwitch',
              },
            },
          },
          {
            _attributes: {
              id: '\u001b',
            },
            when: {
              _attributes: {
                state: 'none',
                output: '\u001b',
              },
            },
          },
          {
            _attributes: {
              id: '',
            },
            when: {
              _attributes: {
                state: 'none',
                output: '',
              },
            },
          },
          {
            _attributes: {
              id: 'MINUS',
            },
            when: {
              _attributes: {
                state: 'none',
                output: '',
              },
            },
          },
          {
            _attributes: {
              id: 'EQUAL',
            },
            when: {
              _attributes: {
                state: 'none',
                output: '',
              },
            },
          },
          {
            _attributes: {
              id: '\b',
            },
            when: {
              _attributes: {
                state: 'none',
                output: '\b',
              },
            },
          },
          {
            _attributes: {
              id: '\t',
            },
            when: {
              _attributes: {
                state: 'none',
                output: '\t',
              },
            },
          },
          {
            _attributes: {
              id: 'j',
            },
            when: [
              {
                _attributes: {
                  state: 'none',
                  output: 'j',
                },
              },
              {
                _attributes: {
                  state: 'coding',
                  output: '…',
                },
              },
            ],
          },
          {
            _attributes: {
              id: 'd',
            },
            when: [
              {
                _attributes: {
                  state: 'none',
                  output: 'd',
                },
              },
              {
                _attributes: {
                  state: 'coding',
                  output: '_',
                },
              },
            ],
          },
          {
            _attributes: {
              id: 'u',
            },
            when: [
              {
                _attributes: {
                  state: 'none',
                  output: 'u',
                },
              },
              {
                _attributes: {
                  state: 'coding',
                  output: '[',
                },
              },
            ],
          },
          {
            _attributes: {
              id: 'a',
            },
            when: [
              {
                _attributes: {
                  state: 'none',
                  output: 'a',
                },
              },
              {
                _attributes: {
                  state: 'coding',
                  output: ']',
                },
              },
            ],
          },
          {
            _attributes: {
              id: 'x',
            },
            when: [
              {
                _attributes: {
                  state: 'none',
                  output: 'x',
                },
              },
              {
                _attributes: {
                  state: 'coding',
                  output: '^',
                },
              },
            ],
          },
          {
            _attributes: {
              id: 'p',
            },
            when: [
              {
                _attributes: {
                  state: 'none',
                  output: 'p',
                },
              },
              {
                _attributes: {
                  state: 'coding',
                  output: '!',
                },
              },
            ],
          },
          {
            _attributes: {
              id: 'h',
            },
            when: [
              {
                _attributes: {
                  state: 'none',
                  output: 'h',
                },
              },
              {
                _attributes: {
                  state: 'coding',
                  output: '<',
                },
              },
            ],
          },
          {
            _attributes: {
              id: 'l',
            },
            when: [
              {
                _attributes: {
                  state: 'none',
                  output: 'l',
                },
              },
              {
                _attributes: {
                  state: 'coding',
                  output: '>',
                },
              },
            ],
          },
          {
            _attributes: {
              id: 'm',
            },
            when: [
              {
                _attributes: {
                  state: 'none',
                  output: 'm',
                },
              },
              {
                _attributes: {
                  state: 'coding',
                  output: '=',
                },
              },
            ],
          },
          {
            _attributes: {
              id: 'w',
            },
            when: [
              {
                _attributes: {
                  state: 'none',
                  output: 'w',
                },
              },
              {
                _attributes: {
                  state: 'coding',
                  output: '&',
                },
              },
            ],
          },
          {
            _attributes: {
              id: 'q',
            },
            when: [
              {
                _attributes: {
                  state: 'none',
                  output: 'q',
                },
              },
              {
                _attributes: {
                  state: 'coding',
                  output: '@',
                },
              },
            ],
          },
          {
            _attributes: {
              id: 'ß',
            },
            when: [
              {
                _attributes: {
                  state: 'none',
                  output: 'ß',
                },
              },
              {
                _attributes: {
                  state: 'coding',
                  output: '°',
                },
              },
            ],
          },
          {
            _attributes: {
              id: '\r',
            },
            when: {
              _attributes: {
                state: 'none',
                output: '\r',
              },
            },
          },
          {
            _attributes: {
              id: 'c',
            },
            when: [
              {
                _attributes: {
                  state: 'none',
                  output: 'c',
                },
              },
              {
                _attributes: {
                  state: 'coding',
                  output: '\\',
                },
              },
            ],
          },
          {
            _attributes: {
              id: 't',
            },
            when: [
              {
                _attributes: {
                  state: 'none',
                  output: 't',
                },
              },
              {
                _attributes: {
                  state: 'coding',
                  output: '/',
                },
              },
            ],
          },
          {
            _attributes: {
              id: 'i',
            },
            when: [
              {
                _attributes: {
                  state: 'none',
                  output: 'i',
                },
              },
              {
                _attributes: {
                  state: 'coding',
                  output: '{',
                },
              },
            ],
          },
          {
            _attributes: {
              id: 'e',
            },
            when: [
              {
                _attributes: {
                  state: 'none',
                  output: 'e',
                },
              },
              {
                _attributes: {
                  state: 'coding',
                  output: '}',
                },
              },
            ],
          },
          {
            _attributes: {
              id: 'o',
            },
            when: [
              {
                _attributes: {
                  state: 'none',
                  output: 'o',
                },
              },
              {
                _attributes: {
                  state: 'coding',
                  output: '*',
                },
              },
            ],
          },
          {
            _attributes: {
              id: 'b',
            },
            when: [
              {
                _attributes: {
                  state: 'none',
                  output: 'b',
                },
              },
              {
                _attributes: {
                  state: 'coding',
                  output: '?',
                },
              },
            ],
          },
          {
            _attributes: {
              id: 'n',
            },
            when: [
              {
                _attributes: {
                  state: 'none',
                  output: 'n',
                },
              },
              {
                _attributes: {
                  state: 'coding',
                  output: '(',
                },
              },
            ],
          },
          {
            _attributes: {
              id: 'r',
            },
            when: [
              {
                _attributes: {
                  state: 'none',
                  output: 'r',
                },
              },
              {
                _attributes: {
                  state: 'coding',
                  output: ')',
                },
              },
            ],
          },
          {
            _attributes: {
              id: 's',
            },
            when: [
              {
                _attributes: {
                  state: 'none',
                  output: 's',
                },
              },
              {
                _attributes: {
                  state: 'coding',
                  output: '-',
                },
              },
            ],
          },
          {
            _attributes: {
              id: 'g',
            },
            when: [
              {
                _attributes: {
                  state: 'none',
                  output: 'g',
                },
              },
              {
                _attributes: {
                  state: 'coding',
                  output: ':',
                },
              },
            ],
          },
          {
            _attributes: {
              id: 'f',
            },
            when: [
              {
                _attributes: {
                  state: 'none',
                  output: 'f',
                },
              },
              {
                _attributes: {
                  state: 'coding',
                  output: '#',
                },
              },
            ],
          },
          {
            _attributes: {
              id: 'v',
            },
            when: [
              {
                _attributes: {
                  state: 'none',
                  output: 'v',
                },
              },
              {
                _attributes: {
                  state: 'coding',
                  output: '$',
                },
              },
            ],
          },
          {
            _attributes: {
              id: 'ü',
            },
            when: [
              {
                _attributes: {
                  state: 'none',
                  output: 'ü',
                },
              },
              {
                _attributes: {
                  state: 'coding',
                  output: '|',
                },
              },
            ],
          },
          {
            _attributes: {
              id: 'ä',
            },
            when: [
              {
                _attributes: {
                  state: 'none',
                  output: 'ä',
                },
              },
              {
                _attributes: {
                  state: 'coding',
                  output: '~',
                },
              },
            ],
          },
          {
            _attributes: {
              id: 'ö',
            },
            when: [
              {
                _attributes: {
                  state: 'none',
                  output: 'ö',
                },
              },
              {
                _attributes: {
                  state: 'coding',
                  output: '`',
                },
              },
            ],
          },
          {
            _attributes: {
              id: 'y',
            },
            when: [
              {
                _attributes: {
                  state: 'none',
                  output: 'y',
                },
              },
              {
                _attributes: {
                  state: 'coding',
                  output: '+',
                },
              },
            ],
          },
          {
            _attributes: {
              id: 'z',
            },
            when: [
              {
                _attributes: {
                  state: 'none',
                  output: 'z',
                },
              },
              {
                _attributes: {
                  state: 'coding',
                  output: '%',
                },
              },
            ],
          },
          {
            _attributes: {
              id: ',',
            },
            when: [
              {
                _attributes: {
                  state: 'none',
                  output: ',',
                },
              },
              {
                _attributes: {
                  state: 'coding',
                  output: '"',
                },
              },
            ],
          },
          {
            _attributes: {
              id: '.',
            },
            when: [
              {
                _attributes: {
                  state: 'none',
                  output: '.',
                },
              },
              {
                _attributes: {
                  state: 'coding',
                  output: "'",
                },
              },
            ],
          },
          {
            _attributes: {
              id: 'k',
            },
            when: [
              {
                _attributes: {
                  state: 'none',
                  output: 'k',
                },
              },
              {
                _attributes: {
                  state: 'coding',
                  output: ';',
                },
              },
            ],
          },
          {
            _attributes: {
              id: ' ',
            },
            when: {
              _attributes: {
                state: 'none',
                output: ' ',
              },
            },
          },
          {
            _attributes: {
              id: '\u001e',
            },
            when: {
              _attributes: {
                state: 'none',
                output: '\u001e',
              },
            },
          },
          {
            _attributes: {
              id: '\u001c',
            },
            when: {
              _attributes: {
                state: 'none',
                output: '\u001c',
              },
            },
          },
          {
            _attributes: {
              id: '\u001f',
            },
            when: {
              _attributes: {
                state: 'none',
                output: '\u001f',
              },
            },
          },
          {
            _attributes: {
              id: '\u001d',
            },
            when: {
              _attributes: {
                state: 'none',
                output: '\u001d',
              },
            },
          },
          {
            _attributes: {
              id: 'KEY_1',
            },
            when: {
              _attributes: {
                state: 'none',
                output: '',
              },
            },
          },
          {
            _attributes: {
              id: 'KEY_2',
            },
            when: {
              _attributes: {
                state: 'none',
                output: '',
              },
            },
          },
          {
            _attributes: {
              id: 'KEY_3',
            },
            when: {
              _attributes: {
                state: 'none',
                output: '',
              },
            },
          },
          {
            _attributes: {
              id: 'KEY_4',
            },
            when: {
              _attributes: {
                state: 'none',
                output: '',
              },
            },
          },
          {
            _attributes: {
              id: 'KEY_5',
            },
            when: {
              _attributes: {
                state: 'none',
                output: '',
              },
            },
          },
          {
            _attributes: {
              id: 'KEY_6',
            },
            when: {
              _attributes: {
                state: 'none',
                output: '',
              },
            },
          },
          {
            _attributes: {
              id: '€',
            },
            when: {
              _attributes: {
                state: 'none',
                output: '€',
              },
            },
          },
          {
            _attributes: {
              id: 'KEY_8',
            },
            when: {
              _attributes: {
                state: 'none',
                output: '',
              },
            },
          },
          {
            _attributes: {
              id: 'KEY_9',
            },
            when: {
              _attributes: {
                state: 'none',
                output: '',
              },
            },
          },
          {
            _attributes: {
              id: 'KEY_0',
            },
            when: {
              _attributes: {
                state: 'none',
                output: '',
              },
            },
          },
          {
            _attributes: {
              id: 'J',
            },
            when: {
              _attributes: {
                state: 'none',
                output: 'J',
              },
            },
          },
          {
            _attributes: {
              id: 'D',
            },
            when: {
              _attributes: {
                state: 'none',
                output: 'D',
              },
            },
          },
          {
            _attributes: {
              id: 'U',
            },
            when: {
              _attributes: {
                state: 'none',
                output: 'U',
              },
            },
          },
          {
            _attributes: {
              id: 'A',
            },
            when: {
              _attributes: {
                state: 'none',
                output: 'A',
              },
            },
          },
          {
            _attributes: {
              id: 'X',
            },
            when: {
              _attributes: {
                state: 'none',
                output: 'X',
              },
            },
          },
          {
            _attributes: {
              id: 'P',
            },
            when: {
              _attributes: {
                state: 'none',
                output: 'P',
              },
            },
          },
          {
            _attributes: {
              id: 'H',
            },
            when: {
              _attributes: {
                state: 'none',
                output: 'H',
              },
            },
          },
          {
            _attributes: {
              id: 'L',
            },
            when: {
              _attributes: {
                state: 'none',
                output: 'L',
              },
            },
          },
          {
            _attributes: {
              id: 'M',
            },
            when: {
              _attributes: {
                state: 'none',
                output: 'M',
              },
            },
          },
          {
            _attributes: {
              id: 'W',
            },
            when: {
              _attributes: {
                state: 'none',
                output: 'W',
              },
            },
          },
          {
            _attributes: {
              id: 'Q',
            },
            when: {
              _attributes: {
                state: 'none',
                output: 'Q',
              },
            },
          },
          {
            _attributes: {
              id: 'ẞ',
            },
            when: {
              _attributes: {
                state: 'none',
                output: 'ẞ',
              },
            },
          },
          {
            _attributes: {
              id: 'C',
            },
            when: {
              _attributes: {
                state: 'none',
                output: 'C',
              },
            },
          },
          {
            _attributes: {
              id: 'T',
            },
            when: {
              _attributes: {
                state: 'none',
                output: 'T',
              },
            },
          },
          {
            _attributes: {
              id: 'I',
            },
            when: {
              _attributes: {
                state: 'none',
                output: 'I',
              },
            },
          },
          {
            _attributes: {
              id: 'E',
            },
            when: {
              _attributes: {
                state: 'none',
                output: 'E',
              },
            },
          },
          {
            _attributes: {
              id: 'O',
            },
            when: {
              _attributes: {
                state: 'none',
                output: 'O',
              },
            },
          },
          {
            _attributes: {
              id: 'B',
            },
            when: {
              _attributes: {
                state: 'none',
                output: 'B',
              },
            },
          },
          {
            _attributes: {
              id: 'N',
            },
            when: {
              _attributes: {
                state: 'none',
                output: 'N',
              },
            },
          },
          {
            _attributes: {
              id: 'R',
            },
            when: {
              _attributes: {
                state: 'none',
                output: 'R',
              },
            },
          },
          {
            _attributes: {
              id: 'S',
            },
            when: {
              _attributes: {
                state: 'none',
                output: 'S',
              },
            },
          },
          {
            _attributes: {
              id: 'G',
            },
            when: {
              _attributes: {
                state: 'none',
                output: 'G',
              },
            },
          },
          {
            _attributes: {
              id: 'F',
            },
            when: {
              _attributes: {
                state: 'none',
                output: 'F',
              },
            },
          },
          {
            _attributes: {
              id: 'V',
            },
            when: {
              _attributes: {
                state: 'none',
                output: 'V',
              },
            },
          },
          {
            _attributes: {
              id: 'Ü',
            },
            when: {
              _attributes: {
                state: 'none',
                output: 'Ü',
              },
            },
          },
          {
            _attributes: {
              id: 'Ä',
            },
            when: {
              _attributes: {
                state: 'none',
                output: 'Ä',
              },
            },
          },
          {
            _attributes: {
              id: 'Ö',
            },
            when: {
              _attributes: {
                state: 'none',
                output: 'Ö',
              },
            },
          },
          {
            _attributes: {
              id: 'Y',
            },
            when: {
              _attributes: {
                state: 'none',
                output: 'Y',
              },
            },
          },
          {
            _attributes: {
              id: 'Z',
            },
            when: {
              _attributes: {
                state: 'none',
                output: 'Z',
              },
            },
          },
          {
            _attributes: {
              id: 'K',
            },
            when: {
              _attributes: {
                state: 'none',
                output: 'K',
              },
            },
          },
        ],
      },
      terminators: {
        when: [
          {
            _attributes: {
              state: 'stateSwitch',
              output: '',
            },
          },
          {
            _attributes: {
              state: 'coding',
              output: '',
            },
          },
        ],
      },
    },
  }
  const options = { compact: true, spaces: 2 }
  return convert.js2xml(js, options)
}

module.exports = generateKeylayout
