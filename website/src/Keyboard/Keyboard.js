import React from 'react';
import styled from 'styled-components'
import Key from './Key';

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

class Keyboard extends React.Component {
  render() {
    return (
      <Wrapper>
        <Row>
          <Key type={'fn'} label="" />
          <Key type={'fn'} label="" />
          <Key type={'fn'} label="" />
          <Key type={'fn'} label="" />
          <Key type={'fn'} label="" />
          <Key type={'fn'} label="" />
          <Key type={'fn'} label="" />
          <Key type={'fn'} label="" />
          <Key type={'fn'} label="" />
          <Key type={'fn'} label="" />
          <Key type={'fn'} label="" />
          <Key type={'fn'} label="" />
          <Key type={'fn'} label="" />
          <Key type={'fn'} label="" />
        </Row>

        <Row>
          <Key label="" />
          <Key label="" />
          <Key label="" />
          <Key label="" />
          <Key label="" />
          <Key label="" />
          <Key label="" />
          <Key label="" />
          <Key label="" />
          <Key label="" />
          <Key label="" />
          <Key label="" />
          <Key label="" />
          <Key type={'delete'} label="" />
        </Row>
        <Row>
          <Key type={'tab'} label="" />
          <Key label="" />
          <Key label="" />
          <Key label="" />
          <Key label="" />
          <Key label="" />
          <Key label="" />
          <Key label="" />
          <Key label="" />
          <Key label="" />
          <Key label="" />
          <Key label="" />
          <Key label="" />
          <Key type="germanReturn" label="" />
        </Row>
        <Row>
          <Key type={'caps'} label="" />
          <Key label="" />
          <Key label="" />
          <Key label="" />
          <Key label="" />
          <Key label="" />
          <Key label="" />
          <Key label="" />
          <Key label="" />
          <Key label="" />
          <Key label="" />
          <Key label="" />
          <Key label="" />
        </Row>
        <Row>
          <Key type={'shortShift'} label="" />
          <Key label="" />
          <Key label="" />
          <Key label="" />
          <Key label="" />
          <Key label="" />
          <Key label="" />
          <Key label="" />
          <Key label="" />
          <Key label="" />
          <Key label="" />
          <Key label="" />
          <Key type={'longShift'}  label="" />
        </Row>
        <Row>
          <Key type={'fnLeft'} label="" />
          <Key type={'ctrlLeft'} label="" />
          <Key type={'optLeft'} label="" />
          <Key type={'cmdLeft'} label="" />
          <Key type={'space'} label="" />
          <Key type={'cmdRight'} label="" />
          <Key type={'optRight'} label="" />

          <ArrowKeysWrapper>
            <Key type={'left'} label="" />
            <UpDownKeysWrapper>
              <Key type={'up'} label="" />
              <Key type={'down'} label="" />
            </UpDownKeysWrapper>
            <Key type={'right'} label="" />
          </ArrowKeysWrapper>
        </Row>
      </Wrapper>
    );
  }
}

export default Keyboard;
