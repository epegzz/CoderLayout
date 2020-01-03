import React, { Component } from 'react';
import styled from 'styled-components'
import './App.css';
import Keyboard from './Keyboard/Keyboard'
import GithubRibbon from './GithubRibbon'

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
  { label: '❏' },
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
  { label: ['L', '↑', '>', '8', '⇞'] },
  { label: ['M', '⌦', '=', '9', undefined] },
  { label: ['W', undefined, '&', undefined, undefined] },
  { label: ['Q', undefined, '@', undefined, undefined] },
  { label: ['ß', undefined, undefined, undefined, undefined] }, // TODO: add '°' to M1 layer
  { label: '', disabled: true },

  // Row 2
  { label: 'M2', mod: 2 },
  { label: ['C', undefined, '\\', undefined, undefined] },
  { label: ['T', undefined, '/', undefined, undefined] },
  { label: ['I', undefined, '{', undefined, undefined] },
  { label: ['E', undefined, '}', undefined, '⌘V'] },
  { label: ['O', undefined, '*', undefined, undefined] },
  { label: ['B', '⇤', '?', undefined, undefined] },
  { label: ['N', '←', '(', '4', '⇠'] },
  { label: ['R', '↓', ')', '5', '⇟'] },
  { label: ['S', '→', '-', '6', '⇢'] },
  { label: ['G', '⇥', ':', undefined, undefined] },
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
  { mod: 3 },
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

const codingCharacters = coderLayoutKeys.reduce((result, key) => ([
  ...result,
  Array.isArray(key.label) && key.label[2]
]), []).filter(o => o && o.length)

const navigationCharacters = coderLayoutKeys.reduce((result, key) => ([
  ...result,
  Array.isArray(key.label) && key.label[1],
  Array.isArray(key.label) && key.label[4],
]), []).filter(o => o && o.length && !o.startsWith('⌘'))

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

const formatLabel = ({ label }) => {
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

const Label1Of2 = styled.div`
  position: absolute;
  margin: 4px 6px;
  top: 2px;
  left: 4px;
`
const Label2Of2 = styled.div`
  position: absolute;
  margin: 4px 6px;
  bottom: 4px;
  right: 4px;
`

const Label1Of3 = styled.div`
  position: absolute;
  margin: 4px 6px;
  top: 2px;
  left: 4px;
`
const Label2Of3 = styled.div`
  position: absolute;
  margin: 4px 6px;
  bottom: 4px;
  left: 4px;
`
const Label3Of3 = styled.div`
  position: absolute;
  margin: 4px 6px;
  bottom: 4px;
  right: 4px;
`

const formatLabelForCodingLayer = (mods) => ({ label, mod }) => {
  if (mods.includes(mod)) return label
  if (!Array.isArray(label)) label = [label]
  const codingCharacterLabels = label.reduce((result, labelForLayer) => [...result, codingCharacters.includes(labelForLayer) && labelForLayer], []).filter(o => !!o)
  if (codingCharacterLabels.length === 0) return
  if (codingCharacterLabels.length === 1) return codingCharacterLabels[0]
  if (codingCharacterLabels.length === 2) return (
    <div>
      <Label1Of2>{codingCharacterLabels[0]}</Label1Of2>
      <Label2Of2>{codingCharacterLabels[1]}</Label2Of2>
    </div>
  )
  return (
    <div>
      <Label1Of3>{codingCharacterLabels[0]}</Label1Of3>
      <Label2Of3>{codingCharacterLabels[1]}</Label2Of3>
      <Label3Of3>{codingCharacterLabels[2]}</Label3Of3>
    </div>
  )
}

const formatLabelForNavigationLayer = (mods) => ({ label, mod }) => {
  if (mods.includes(mod)) return label
  if (!Array.isArray(label)) label = [label]
  const codingNavigationLabels = label.reduce((result, labelForLayer) => [...result, navigationCharacters.includes(labelForLayer) && labelForLayer], []).filter(o => !!o)
  if (codingNavigationLabels.length === 0) return
  if (codingNavigationLabels.length === 1) return codingNavigationLabels[0]
  if (codingNavigationLabels.length === 2) return (
    <div>
      <Label1Of2>{codingNavigationLabels[0]}</Label1Of2>
      <Label2Of2>{codingNavigationLabels[1]}</Label2Of2>
    </div>
  )
  return (
    <div>
      <Label1Of3>{codingNavigationLabels[0]}</Label1Of3>
      <Label2Of3>{codingNavigationLabels[1]}</Label2Of3>
      <Label3Of3>{codingNavigationLabels[2]}</Label3Of3>
    </div>
  )
}

const sectionBackgroundColors = {
  header: 'linear-gradient(hsla(155, 13%, 21%, 1), hsla(155, 13%, 17%, 1));',
  coding: 'linear-gradient(hsla(155, 13%, 21%, 1), hsla(155, 13%, 17%, 1));',
  navigation: 'linear-gradient(hsla(155, 13%, 21%, 1), hsla(155, 13%, 17%, 1));'
}
const sectionTextColors = {
  header: 'white',
  coding: 'white',
  navigation: 'white'
}

const Section = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background:  ${({ theme }) => sectionBackgroundColors[theme] };
  color: ${({ theme }) => sectionTextColors[theme] };

  h1 {
    font-weight: normal;
    font-size: calc(10px + 2vmin);
  }
`

class App extends Component {
  render() {
    return (
      <div className="App">
        <GithubRibbon href={'https://github.com/epegzz/CoderLayout'} />
        <Section theme={'header'}>
          <h1>
            CoderLayout
          </h1>
          <Keyboard
            formatLabel={formatLabel}
            keys={coderLayoutKeys}
          />
          <h1>
            QWERTZ
          </h1>
          <Keyboard
            formatLabel={formatLabel}
            keys={qwertyKeys}
          />
        </Section>
        <Section theme={'coding'}>
          <h1>
            CoderLayout
          </h1>
          <Keyboard
            formatLabel={formatLabelForCodingLayer([2])}
            keys={coderLayoutKeys}
            disableKeysWithoutLabels
          />
          <h1>
            QWERTZ
          </h1>
          <Keyboard
            formatLabel={formatLabelForCodingLayer([1, 2])}
            keys={qwertyKeys}
            disableKeysWithoutLabels
          />
        </Section>
        <Section theme={'navigation'}>
          <h1>
            CoderLayout
          </h1>
          <Keyboard
            formatLabel={formatLabelForNavigationLayer([1])}
            keys={coderLayoutKeys}
            disableKeysWithoutLabels
          />
          <h1>
            QWERTZ
          </h1>
          <Keyboard
            formatLabel={formatLabelForNavigationLayer([3])}
            keys={qwertyKeys}
            disableKeysWithoutLabels
          />
        </Section>
      </div>
    );
  }
}

export default App;
