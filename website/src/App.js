import React, { Component } from 'react';
import './App.css';
import Keyboard from './Keyboard/Keyboard'
import styled from 'styled-components'

const coderLayoutKeys = [
  // fn row
  { label: '', disabled: true },
  { label: '', disabled: true },
  { label: '', disabled: true },
  { label: '', disabled: true },
  { label: '', disabled: true },
  { label: '', disabled: true },
  { label: '', disabled: true },
  { label: '', disabled: true },
  { label: '', disabled: true },
  { label: '', disabled: true },
  { label: '', disabled: true },
  { label: '', disabled: true },
  { label: '', disabled: true },
  { label: '', disabled: true },

  // numbers row
  { label: '⇧' },
  { label: '⌃' },
  { label: '⌘' },
  { label: '⌥' },
  { label: 'WS' },
  { label: '', disabled: true },
  { label: '', disabled: true },
  { label: '', disabled: true },
  { label: '', disabled: true },
  { label: '⌥' },
  { label: '⌘' },
  { label: '⌃' },
  { label: '⇧' },
  { label: '', disabled: true },

  // Row 1
  { label: 'M4', mod: 4},
  { label: ['J', '⇤', '…', undefined] },
  { label: ['D', '⇥', '_', undefined, '⌘C'] },
  { label: ['U', undefined, '[', undefined, '⌘X'] },
  { label: ['A', undefined, ']', undefined, '⌘A'] },
  { label: ['X', undefined, '^', undefined] },
  { label: ['P', undefined, '!', undefined] },
  { label: ['H', '⌫', '<', '7'] },
  { label: ['L', '↑', '>', '8',undefined] },
  { label: ['M', '⌦', '=', '9', undefined] },
  { label: ['W', undefined, '&', undefined, undefined] },
  { label: ['Q', undefined, '@', undefined, undefined] },
  { label: ['ß', undefined, '°', undefined, undefined] },
  { label: '', disabled: true },

  // Row 2
  { label: 'M2', mod: 2 },
  { label: ['C', undefined, '\\', undefined, undefined] },
  { label: ['T', undefined, '/', undefined, undefined] },
  { label: ['I', undefined, '{', undefined, undefined] },
  { label: ['E', undefined, '}', undefined, '⌘V'] },
  { label: ['O', undefined, '*', undefined, undefined] },
  { label: ['B', '↖', '?', undefined, undefined] },
  { label: ['N', '←', '(', '4', undefined] },
  { label: ['R', '↓', ')', '5', undefined] },
  { label: ['S', '→', '-', '6', undefined] },
  { label: ['G', '↘', ':', undefined, undefined] },
  { label: 'M2', mod: 2 },
  { label: '', disabled: true },

  // Row 3
  { label: '', disabled: true },
  { label: 'M3', mod: 3 },
  { label: ['F', undefined, '#', undefined, undefined] },
  { label: ['V', undefined, '$', undefined, undefined] },
  { label: ['Ü', undefined, '|', undefined, undefined] },
  { label: ['Ä', undefined, '~', undefined, undefined] },
  { label: ['Ö', undefined, '`', undefined, undefined] },
  { label: ['Y', undefined, '+', undefined, undefined] },
  { label: ['Z', '↩', '%', '1', undefined] },
  { label: [',', undefined, '"', '2', undefined] },
  { label: ['.', undefined, '\'', '3', undefined] },
  { label: ['K', undefined, ';', undefined] },
  { label: '', disabled: true },

  // Row 4
  { label: '', disabled: true },
  { label: '', disabled: true },
  { label: '', disabled: true },
  { label: 'M1', mod: 1 },
  { label: ['space / ⇧', 'esc', undefined, '0'] },
  { label: '', disabled: true },
  { label: '', disabled: true },
  { label: '', disabled: true },
  { label: '', disabled: true },
  { label: '', disabled: true },
  { label: '', disabled: true },
]


const qwertyKeys = [
  // fn row
  { },
  { label: '', disabled: true },
  { label: '', disabled: true },
  { label: '', disabled: true },
  { label: '', disabled: true },
  { label: '', disabled: true },
  { label: '', disabled: true },
  { label: '', disabled: true },
  { label: '', disabled: true },
  { label: '', disabled: true },
  { label: '', disabled: true },
  { label: '', disabled: true },
  { label: '', disabled: true },
  { label: '', disabled: true },

  // numbers row
  { },
  { },
  { },
  { },
  { },
  { },
  { },
  { },
  { },
  { },
  { },
  { },
  { },
  { },

  // Row 1
  { },
  { },
  { },
  { },
  { },
  { },
  { },
  { },
  { },
  { },
  { },
  { },
  { },
  { },

  // Row 2
  { },
  { },
  { },
  { },
  { },
  { },
  { },
  { },
  { },
  { },
  { },
  { },
  { },

  // Row 3
  { mod: 1 },
  { },
  { },
  { },
  { },
  { },
  { },
  { },
  { },
  { },
  { },
  { },
  { mod: 1 },

  // Row 4
  { label: '', disabled: true },
  { },
  { mod: 2 },
  { },
  { },
  { },
  { },
  { },
  { },
  { },
  { },
]

const ModLabel = styled.div`
  position: absolute;
  font-size: 8px;
  margin: 4px 6px;
`

const Mod1Label = styled(ModLabel)`
  top: 0;
  left: 0;
`

const Mod2Label = styled(ModLabel)`
  bottom: 0;
  right: 0;
`

const Mod3Label = styled(ModLabel)`
  bottom: 0;
  left: 0;
`

const Mod4Label = styled(ModLabel)`
  top: 0;
  right: 0;
`

const formatLabel = (label) => {
  if (!Array.isArray(label)) label = [label]
  return (
    <div>
      <Mod1Label>{label[1]}</Mod1Label>
      <Mod2Label>{label[2]}</Mod2Label>
      <Mod3Label>{label[3]}</Mod3Label>
      <Mod4Label>{label[4]}</Mod4Label>
      {label[0]}
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            CoderLayout
          </p>
          <Keyboard
            formatLabel={formatLabel}
            keys={coderLayoutKeys}
          />

          <p>
            QWERTZ
          </p>
          <Keyboard
            formatLabel={formatLabel}
            keys={qwertyKeys}
          />
        </header>
      </div>
    );
  }
}

export default App;
