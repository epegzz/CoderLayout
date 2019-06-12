import React from 'react';
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const keyStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  float: left;
  box-sizing: border-box;
  color: #5a5a5ab0;
  font: bold 9pt arial;
  text-decoration: none;
  text-align: center;
  width: 44px;
  height: 42px;
  margin: 5px;
  background: #f5f5f5;
  border-radius: 4px;
  border-top: 2px solid #ffffff;
  box-shadow:
    0 1px 0 #c9c9c9,
    0 1px 3px rgba(0, 0, 0, 0.59),
    0 0 1px rgba(0, 0, 0, 0.79),
    0 1px 2px rgba(0, 0, 0, 0.79);
`

const activeKeyStyles = css`
  color: #888;
  background: #ebeced;
  border-top-color: #eee;
`


const Wrapper = styled.a`
  ${keyStyles};

  :active {
    ${activeKeyStyles};
  }
          
  ${({ type }) => type === 'fn' && css`
    height: 26px;
    width: 46px;
  `};
  
  ${({ type }) => ['tab', 'delete'].includes(type) && css`
    width: 72px;
  `};

  ${({ type }) => ['shortShift'].includes(type) && css`
    width: 58px;
  `};

  ${({ type }) => ['longShift'].includes(type) && css`
    width: 112px;
  `};
  
  ${({ type }) => ['space'].includes(type) && css`
    height: 50px;
    width: 260px;
  `};
  
  ${({ type }) => ['fnLeft', 'ctrlLeft', 'optLeft', 'optRight'].includes(type) && css`
    height: 50px;
    width: 44px;
  `};

  ${({ type }) => ['cmdLeft', 'cmdRight'].includes(type) && css`
    height: 50px;
    width: 58px;
  `};

  ${({ type }) => ['left', 'right', 'up', 'down'].includes(type) && css`
    height: 25px;
    width: 44px;
  `};

  ${({ type }) => ['up'].includes(type) && css`
    height: 24px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    margin-bottom: -3px;
  `};
  
  ${({ type }) => ['down'].includes(type) && css`
    height: 24px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  `};
  
  ${({ type }) => ['germanReturn'].includes(type) && css`
    :before {
      ${keyStyles};
      content: ' ';
      width: 31px;
      height: 56px;
      position: absolute;
      top: 31px;
      left: 8px;
    }
    
    :after {
      content: ' ';
      display: block;
      background: #f5f5f5;
      width: 34px;
      height: 10px;
      position: absolute;
      top: 30px;
      left: 10px;
    }
    
    :active:before {
      ${activeKeyStyles};
    }
    
    :active:after {
      background: #ebeced;
    }
  `};
  
  ${({ type }) => ['caps'].includes(type) && css`
    width: 85px;
    
    :after {
      content: ' ';
      display: block;
      background: #999;
      width: 4px;
      height: 4px;
      border-radius: 10px;
      box-shadow: inset 0 1px 0 #666;    
      position: absolute;
      left: 9px;
      top: 8px;
    }
  `};  
  
  ${({ disabled }) => disabled && css`
    opacity: 0.2;
  `};
`

const ModIndicator = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  border-radius: 4px;
  overflow: hidden;
  
  :after {
    content: '';
    width: 30px;
    height: 30px;
    background: black;
    position: absolute;
    transform: rotate(45deg);
    opacity: 0.25;
    border-radius: 2px;
  }

  ${({ mod }) => mod === 4 && css`
    top: -2px;
    right: 0;
    
    :after {
      top: -15px;
      right: -15px;
    }
  `};
  
  ${({ mod }) => mod === 3 && css`
    bottom: -1px;
    left: 0;
    
    :after {
      bottom: -15px;
      left: -15px;
    }
  `};

  ${({ mod }) => mod === 1 && css`
    top: -2px;
    left: 0;
    
    :after {
      top: -15px;
      left: -15px;
    }
  `};

  ${({ mod }) => mod === 2 && css`
    bottom: -1px;
    right: 0;
    
    :after {
      bottom: -15px;
      right: -15px;
    }
  `};
`

const Label = styled.span`

`

class Key extends React.Component {

  render() {
    const { mod, label, disabled, type = 'default' } = this.props;
    return (
      <Wrapper disabled={disabled} type={type}>
        {mod && <ModIndicator mod={mod} />}
        <Label>
          {label}
        </Label>
      </Wrapper>
    );
  }
}

Key.propTypes = {
  type: PropTypes.oneOf([
    'default',
    'fn',
    'tab',
    'delete',
    'caps',
    'germanReturn',
    'shortShift',
    'longShift',
    'fnLeft',
    'ctrlLeft',
    'optLeft',
    'cmdLeft',
    'space',
    'cmdRight',
    'optRight',
    'left',
    'up',
    'down',
    'right'
  ]),
  label: PropTypes.string,
  disabled: PropTypes.bool,
  mod: PropTypes.number
}

export default Key
