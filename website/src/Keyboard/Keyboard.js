import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Key from './Key'

const Wrapper = styled.div`
  position: relative;
  transition: all 1s;
  z-index: 20;
  margin: 0 auto 20px;
  width: 800px;
  height: 315px;
  background: #bbb;
  background: linear-gradient(
    to top,
    rgb(212,216,219) 27%,
    rgb(213,217,220) 64%,
    rgb(247, 249, 251) 95%,
    rgb(191,191,191)
  );
  border-top-left-radius: 7px 21px;
  border-top-right-radius: 7px 21px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  padding: 50px 0 0;
  box-shadow:
    0 0px 0px 1px #a0a0a0,
    0 10px 30px #000;
    
  * {
    padding: 0;  
  }  
  
  ul {list-style-type: none; width: 784px; margin: 0 auto; padding-inline-start: 0;}
  li {float: left;}
`

const Row = styled.div`
  margin-left: 8px;
`

const ArrowKeysWrapper = styled.div`
  display: inline-flex;
  float: left;
  align-items: flex-end;
`

const UpDownKeysWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  float: left;
`

// Handy list of key codes for the German Apple keyboard can be found at
// http://iks.cs.ovgu.de/~elkner/keyboard/mac/scancodes_MBP.html#fn1

// A list of Keyboard Unicode characters can be found at
// https://gist.github.com/Zenexer/c5243c4216f1f8cd2251

const formatQwertyLabel = ({ label }) => {
  if (Array.isArray(label) && label.length > 1) {
    return (
      <span>
        {label[1]}
        <br />
        {label[0]}
      </span>
    )
  }
  return label
}

const defaultKeys = [
  // fn row
  { type: 'fn', code: 41, name: 'escape', label: 'esc' },
  { type: 'fn', code: 58, name: 'f1', label: 'f1' },
  { type: 'fn', code: 59, name: 'f2', label: 'f2' },
  { type: 'fn', code: 60, name: 'f3', label: 'f3' },
  { type: 'fn', code: 61, name: 'f4', label: 'f4' },
  { type: 'fn', code: 62, name: 'f5', label: 'f5' },
  { type: 'fn', code: 63, name: 'f6', label: 'f6' },
  { type: 'fn', code: 64, name: 'f7', label: 'f7' },
  { type: 'fn', code: 65, name: 'f8', label: 'f8' },
  { type: 'fn', code: 66, name: 'f9', label: 'f9' },
  { type: 'fn', code: 67, name: 'f10', label: 'f10' },
  { type: 'fn', code: 68, name: 'f11', label: 'f11' },
  { type: 'fn', code: 69, name: 'f12', label: 'f12' },
  { type: 'fn', code: 0, name: 'eject', label: '⏏' },
  
  // numbers row
  { type: 'default', code: 100, name: 'non_us_backslash', label: ['^', '°', '„', undefined, '“'] },
  { type: 'default', code: 30, name: '1', label: ['1', '!', '¡', undefined, '¬'] },
  { type: 'default', code: 31, name: '2', label: ['2', '"', '“', undefined, '”'] },
  { type: 'default', code: 32, name: '3', label: ['3', '§', '¶', undefined, '#'] },
  { type: 'default', code: 33, name: '4', label: ['4', '$', '¢', undefined, '£'] },
  { type: 'default', code: 34, name: '5', label: ['5', '%', '[', undefined, 'ﬁ'] },
  { type: 'default', code: 35, name: '6', label: ['6', '&', ']', undefined, '^'] },
  { type: 'default', code: 36, name: '7', label: ['7', '/', '|', undefined, '\\'] },
  { type: 'default', code: 37, name: '8', label: ['8', '(', '{', undefined, '˜'] },
  { type: 'default', code: 38, name: '9', label: ['9', ')', '}', undefined, '·'] },
  { type: 'default', code: 39, name: '0', label: ['0', '=', '≠', undefined, '¯'] },
  { type: 'default', code: 45, name: 'hyphen', label: ['ß', '?', '¿', undefined, '˙'] },
  { type: 'default', code: 46, name: 'equal_sign', label: ['´', '`', '\'', undefined, '˚'] },
  { type: 'delete', code: 42, name: 'delete_or_backspace', label: ['⌫', undefined, undefined, '⌦'] },
  
  // Row 1
  { type: 'tab', code: 43, name: 'tab', label: '⇥' },
  { type: 'default', code: 20, name: 'q', label: ['Q', undefined, '«', undefined, '»'] },
  { type: 'default', code: 26, name: 'w', label: ['W', undefined, '∑', undefined, '„'] },
  { type: 'default', code: 8, name: 'e', label: ['E', undefined, '€', undefined, '‰'] },
  { type: 'default', code: 21, name: 'r', label: ['R', undefined, '®', undefined, '¸'] },
  { type: 'default', code: 23, name: 't', label: ['T', undefined, '†', undefined, '˝'] },
  { type: 'default', code: 28, name: 'y', label: ['Z', undefined, 'Ω', undefined, 'ˇ'] },
  { type: 'default', code: 24, name: 'u', label: ['U', undefined, '¨', undefined, 'Á'] },
  { type: 'default', code: 12, name: 'i', label: ['I', undefined, '⁄', undefined, 'Û'] },
  { type: 'default', code: 18, name: 'o', label: ['O', undefined, 'ø', undefined, 'Ø'] },
  { type: 'default', code: 19, name: 'p', label: ['P', undefined, 'π', undefined, '∏'] },
  { type: 'default', code: 47, name: 'open_bracket', label: ['Ü', undefined, '•', undefined, '°'] },
  { type: 'default', code: 48, name: 'close_bracket', label: ['+', '*', '±', undefined, ''] },
  { type: 'germanReturn', code: 40, name: 'return_or_enter', label: '↩' },
  
  // Row 2
  { type: 'caps', code: 57, name: 'caps_lock', label: '⇪' },
  { type: 'default', code: 4, name: 'a', label: ['A', undefined, 'å', undefined, 'Å'] },
  { type: 'default', code: 22, name: 's', label: ['S', undefined, '‚', undefined, 'Í'] },
  { type: 'default', code: 7, name: 'd', label: ['D', undefined, '∂', undefined, '™'] },
  { type: 'default', code: 9, name: 'f', label: ['F', undefined, 'ƒ', undefined, 'Ï'] },
  { type: 'default', code: 10, name: 'g', label: ['G', undefined, '©', undefined, 'Ì'] },
  { type: 'default', code: 11, name: 'h', label: ['H', undefined, 'ª', undefined, 'Ó'] },
  { type: 'default', code: 13, name: 'j', label: ['J', undefined, 'º', undefined, 'ı'] },
  { type: 'default', code: 14, name: 'k', label: ['K', undefined, 'Δ', undefined, 'ˆ'] },
  { type: 'default', code: 15, name: 'l', label: ['L', undefined, '@', undefined, 'ﬂ'] },
  { type: 'default', code: 51, name: 'semicolon', label: ['Ö', undefined, 'œ', undefined, 'Œ'] },
  { type: 'default', code: 52, name: 'quote', label: ['Ä', undefined, 'æ', undefined, 'Æ'] },
  { type: 'default', code: 50, name: 'backslash', label: ['#', '\'', '‘', undefined, '’'] },
  
  // Row 3
  { type: 'shortShift', code: 225, name: 'left_shift', label: '⇧' },
  { type: 'default', code: 53, name: 'grave_accent_and_tilde', label: ['<', '>', '≤', undefined, '≥'] },
  { type: 'default', code: 29, name: 'z', label: ['Y', undefined, '¥', undefined, '‡'] },
  { type: 'default', code: 27, name: 'x', label: ['X', undefined, '≈', undefined, 'Ù'] },
  { type: 'default', code: 6, name: 'c', label: ['C', undefined, 'ç', undefined, 'Ç'] },
  { type: 'default', code: 25, name: 'v', label: ['V', undefined, '√', undefined, '◊'] },
  { type: 'default', code: 5, name: 'b', label: ['B', undefined, '∫', undefined, '‹'] },
  { type: 'default', code: 17, name: 'n', label: ['N', undefined, '~', undefined, '›'] },
  { type: 'default', code: 16, name: 'm', label: ['M', undefined, 'µ', undefined, '˘'] },
  { type: 'default', code: 54, name: 'comma', label: [',', ';', '∞', undefined, '˛'] },
  { type: 'default', code: 55, name: 'period', label: ['.', ':', '…', undefined, '÷'] },
  { type: 'default', code: 56, name: 'slash', label: ['-', '_', '–', undefined, '—'] },
  { type: 'longShift', code: 229, name: 'right_shift', label: '⇧' },
  
  // Row 4
  { type: 'fnLeft', code: undefined, name: 'fn', label: 'fn' }, // not sure what the key code is
  { type: 'ctrlLeft', code: 224, name: 'left_control', label: '⌃' },
  { type: 'optLeft', code: 226, name: 'left_option', label: '⌥' },
  { type: 'cmdLeft', code: 227, name: 'left_command', label: '⌘' },
  { type: 'space', code: 44, name: 'spacebar', label: 'space' },
  { type: 'cmdRight', code: 231, name: 'right_command', label: '⌘' },
  { type: 'optRight', code: 230, name: 'right_option', label: '⌥' },
  { type: 'left', code: 80, name: 'left_arrow', label: ['←', undefined, undefined, '⇤'] },
  { type: 'up', code: 82, name: 'up_arrow', label: ['↑', undefined, undefined, '⇞'] },
  { type: 'down', code: 81, name: 'down_arrow', label: ['↓', undefined, undefined, '⇟'] },
  { type: 'right', code: 79, name: 'right_arrow', label: ['→', undefined, undefined, '⇥'] },
]

class Keyboard extends React.Component {
  render() {
    const { disableKeysWithoutLabels, formatLabel = formatQwertyLabel } = this.props
    let { keys = [] } = this.props

    keys = defaultKeys.map((defaults, index) => {
      const key = keys[index] || {}

      if (key.map) {
        return {
          ...(keys.find(key => key.name === key.map) || {})
        }
      }

      return {
        ...defaults,
        ...key,
      }
    })

    for (const key of keys) {
      key.label = formatLabel(key)
      if (disableKeysWithoutLabels) {
        console.log(typeof key.label, Array.isArray(key.label), key.label)
        if (
          !key.label ||
          (Array.isArray(key.label) && key.label.length === 0) ||
          (typeof key.label === 'string' && key.label.length === 0)
          //(!Array.isArray(key.label)typeof key.label !== 'object'
        ) {
          key.disabled = true
          key.mod = undefined
        }

      }
    }

    return (
      <Wrapper>
        {/* fn row */}
        <Row>
          <Key {...keys[0]} />
          <Key {...keys[1]} />
          <Key {...keys[2]} />
          <Key {...keys[3]} />
          <Key {...keys[4]} />
          <Key {...keys[5]} />
          <Key {...keys[6]} />
          <Key {...keys[7]} />
          <Key {...keys[8]} />
          <Key {...keys[9]} />
          <Key {...keys[10]} />
          <Key {...keys[11]} />
          <Key {...keys[12]} />
          <Key {...keys[13]} />
        </Row>

        {/* numbers row */}
        <Row>
          <Key {...keys[14]} />
          <Key {...keys[15]} />
          <Key {...keys[16]} />
          <Key {...keys[17]} />
          <Key {...keys[18]} />
          <Key {...keys[19]} />
          <Key {...keys[20]} />
          <Key {...keys[21]} />
          <Key {...keys[22]} />
          <Key {...keys[23]} />
          <Key {...keys[24]} />
          <Key {...keys[25]} />
          <Key {...keys[26]} />
          <Key {...keys[27]} />
        </Row>

        {/* row 1 */}
        <Row>
          <Key {...keys[28]} />
          <Key {...keys[29]} />
          <Key {...keys[30]} />
          <Key {...keys[31]} />
          <Key {...keys[32]} />
          <Key {...keys[33]} />
          <Key {...keys[34]} />
          <Key {...keys[35]} />
          <Key {...keys[36]} />
          <Key {...keys[37]} />
          <Key {...keys[38]} />
          <Key {...keys[39]} />
          <Key {...keys[40]} />
          <Key {...keys[41]} />
        </Row>

        {/* row 2 */}
        <Row>
          <Key {...keys[42]} />
          <Key {...keys[43]} />
          <Key {...keys[44]} />
          <Key {...keys[45]} />
          <Key {...keys[46]} />
          <Key {...keys[47]} />
          <Key {...keys[48]} />
          <Key {...keys[49]} />
          <Key {...keys[50]} />
          <Key {...keys[51]} />
          <Key {...keys[52]} />
          <Key {...keys[53]} />
          <Key {...keys[54]} />
        </Row>

        {/* row 3 */}
        <Row>
          <Key {...keys[55]} />
          <Key {...keys[56]} />
          <Key {...keys[57]} />
          <Key {...keys[58]} />
          <Key {...keys[59]} />
          <Key {...keys[60]} />
          <Key {...keys[61]} />
          <Key {...keys[62]} />
          <Key {...keys[63]} />
          <Key {...keys[64]} />
          <Key {...keys[65]} />
          <Key {...keys[66]} />
          <Key {...keys[67]} />
        </Row>

        {/* row 4 */}
        <Row>
          <Key {...keys[68]} />
          <Key {...keys[69]} />
          <Key {...keys[70]} />
          <Key {...keys[71]} />
          <Key {...keys[72]} />
          <Key {...keys[73]} />
          <Key {...keys[74]} />

          <ArrowKeysWrapper>
            <Key {...keys[75]} />
            <UpDownKeysWrapper>
              <Key {...keys[76]} />
              <Key {...keys[77]} />
            </UpDownKeysWrapper>
            <Key {...keys[78]} />
          </ArrowKeysWrapper>
        </Row>
      </Wrapper>
    )
  }
}

Keyboard.propTypes = {
  keys: PropTypes.arrayOf(Key.propTypes),
  formatLabel: PropTypes.func,
  disableKeysWithoutLabels: PropTypes.bool
}

export default Keyboard
