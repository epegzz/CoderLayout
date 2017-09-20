
import React, { PropTypes } from 'react';
import classnames from 'classnames';
import styles from './Keyboard.scss';
import Key from './Key';

class Keyboard extends React.Component {

  static propTypes = {
    className: PropTypes.string,
  };

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div className={styles['keyboard-container']}>
        <div className={classnames(styles['keyboard'], {[styles['keyboard--flat']]: true})}>
          <ul>
            <Key label="esc" />
            <li><a href="#" className={`${styles.key} ${styles.c112} ${styles.fn}`}><span>F1</span></a></li>
            <li><a href="#" className={`${styles.key} ${styles.c113} ${styles.fn}`}><span>F2</span></a></li>
            <li><a href="#" className={`${styles.key} ${styles.c114} ${styles.fn}`}><span>F3</span></a></li>
            <li><a href="#" className={`${styles.key} ${styles.c115} ${styles.fn}`}><span>F4</span></a></li>
            <li><a href="#" className={`${styles.key} ${styles.c116} ${styles.fn}`}><span>F5</span></a></li>
            <li><a href="#" className={`${styles.key} ${styles.c117} ${styles.fn}`}><span>F6</span></a></li>
            <li><a href="#" className={`${styles.key} ${styles.c118} ${styles.fn}`}><span>F7</span></a></li>
            <li><a href="#" className={`${styles.key} ${styles.c119} ${styles.fn}`}><span>F8</span></a></li>
            <li><a href="#" className={`${styles.key} ${styles.c120} ${styles.fn}`}><span>F9</span></a></li>
            <li><a href="#" className={`${styles.key} ${styles.c121} ${styles.fn}`}><span>F10</span></a></li>
            <li><a href="#" className={`${styles.key} ${styles.c122} ${styles.fn}`}><span>F11</span></a></li>
            <li><a href="#" className={`${styles.key} ${styles.c123} ${styles.fn}`}><span>F12</span></a></li>
            <li><a href="#" className={`${styles.key} ${styles.fn}`}><span>Eject</span></a></li>
          </ul>
          <ul className={styles['numbers-row']}>
            <li><a href="#" className={`${styles.key} ${styles.c192}`}><b>~</b><span>`</span></a></li>
            <li><a href="#" className={`${styles.key} ${styles.c49}`}><b>!</b><span>1</span></a></li>
            <li><a href="#" className={`${styles.key} ${styles.c50}`}><b>@</b><span>2</span></a></li>
            <li><a href="#" className={`${styles.key} ${styles.c51}`}><b>#</b><span>3</span></a></li>
            <li><a href="#" className={`${styles.key} ${styles.c52}`}><b>$</b><span>4</span></a></li>
            <li><a href="#" className={`${styles.key} ${styles.c53}`}><b>%</b><span>5</span></a></li>
            <li><a href="#" className={`${styles.key} ${styles.c54}`}><b>^</b><span>6</span></a></li>
            <li><a href="#" className={`${styles.key} ${styles.c55}`}><b>&amp;</b><span>7</span></a></li>
            <li><a href="#" className={`${styles.key} ${styles.c56}`}><b>*</b><span>8</span></a></li>
            <li><a href="#" className={`${styles.key} ${styles.c57}`}><b>(</b><span>9</span></a></li>
            <li><a href="#" className={`${styles.key} ${styles.c48}`}><b>)</b><span>0</span></a></li>
            <li><a href="#" className={`${styles.key} ${styles.c189} ${styles.alt}`}><b>_</b><span>-</span></a></li>
            <li><a href="#" className={`${styles.key} ${styles.c187}`}><b>+</b><span>=</span></a></li>
            <li><a href="#" className={`${styles.key} ${styles.c46} ${styles.delete}`} ><span>Delete</span></a></li>
          </ul>
          <ul className={styles.qwerty}>
            <li><a href="#" className={`${styles.key} ${styles.c9} ${styles.tab}` }><span>tab</span></a></li>
            <li><a href="#" className={`${styles.key} ${styles.c81}`}><span>q</span></a></li>
            <li><a href="#" className={`${styles.key} ${styles.c87}`}><span>w</span></a></li>
            <li><a href="#" className={`${styles.key} ${styles.c69}`}><span>e</span></a></li>
            <li><a href="#" className={`${styles.key} ${styles.c82}`}><span>r</span></a></li>
            <li><a href="#" className={`${styles.key} ${styles.c84}`}><span>t</span></a></li>
            <li><a href="#" className={`${styles.key} ${styles.c89}`}><span>y</span></a></li>
            <li><a href="#" className={`${styles.key} ${styles.c85}`}><span>u</span></a></li>
            <li><a href="#" className={`${styles.key} ${styles.c73}`}><span>i</span></a></li>
            <li><a href="#" className={`${styles.key} ${styles.c79}`}><span>o</span></a></li>
            <li><a href="#" className={`${styles.key} ${styles.c80}`}><span>p</span></a></li>
            <li><a href="#" className={`${styles.key} ${styles.c219} ${styles.alt}`}><b>{'{'}</b><span>[</span></a></li>
              <li><a href="#" className={`${styles.key} ${styles.c221} ${styles.alt}`}><b>{'}'}</b><span>]</span></a></li>
            <li><a href="#" className={`${styles.key} ${styles.c220} ${styles.alt}`}><b>|</b><span>\</span></a></li>
          </ul>
          <ul className={styles.asdfg}>
            <li><a href="#" className={`${styles.key} ${styles.c20} ${styles.alt} ${styles.caps}`}><b></b><span>caps lock</span></a></li>
            <li><a href="#" className={`${styles.key} ${styles.c65}`}><span>a</span></a></li>
            <li><a href="#" className={`${styles.key} ${styles.c83}`}><span>s</span></a></li>
            <li><a href="#" className={`${styles.key} ${styles.c68}`}><span>d</span></a></li>
            <li><a href="#" className={`${styles.key} ${styles.c70}`}><span>f</span></a></li>
            <li><a href="#" className={`${styles.key} ${styles.c71}`}><span>g</span></a></li>
            <li><a href="#" className={`${styles.key} ${styles.c72}`}><span>h</span></a></li>
            <li><a href="#" className={`${styles.key} ${styles.c74}`}><span>j</span></a></li>
            <li><a href="#" className={`${styles.key} ${styles.c75}`}><span>k</span></a></li>
            <li><a href="#" className={`${styles.key} ${styles.c76}`}><span>l</span></a></li>
            <li><a href="#" className={`${styles.key} ${styles.c186} ${styles.alt}`}><b>:</b><span>;</span></a></li>
            <li><a href="#" className={`${styles.key} ${styles.c222} ${styles.alt}`}><b>"</b><span>'</span></a></li>
            <li><a href="#" className={`${styles.key} ${styles.c13} ${styles.alt} ${styles.enter}`}><span>return</span></a></li>
          </ul>
          <ul className={styles.zxcvb}>
            <li><a href="#" className={`${styles.key} ${styles.c16} ${styles.shiftleft}`}><span>Shift</span></a></li>
            <li><a href="#" className={`${styles.key} ${styles.c90}`}><span>z</span></a></li>
            <li><a href="#" className={`${styles.key} ${styles.c88}`}><span>x</span></a></li>
            <li><a href="#" className={`${styles.key} ${styles.c67}`}><span>c</span></a></li>
            <li><a href="#" className={`${styles.key} ${styles.c86}`}><span>v</span></a></li>
            <li><a href="#" className={`${styles.key} ${styles.c66}`}><span>b</span></a></li>
            <li><a href="#" className={`${styles.key} ${styles.c78}`}><span>n</span></a></li>
            <li><a href="#" className={`${styles.key} ${styles.c77}`}><span>m</span></a></li>
            <li><a href="#" className={`${styles.key} ${styles.c188} ${styles.alt}`}><b>&lt;</b><span>,</span></a></li>
            <li><a href="#" className={`${styles.key} ${styles.c190} ${styles.alt}`}><b>&gt;</b><span>.</span></a></li>
            <li><a href="#" className={`${styles.key} ${styles.c191} ${styles.alt}`}><b>?</b><span>/</span></a></li>
            <li><a href="#" className={`${styles.key} ${styles.c16} ${styles.shiftright}`}><span>Shift</span></a></li>
          </ul>
          <ul className={styles.bottomrow}>
            <li><a href="#" className={`${styles.key} ${styles.fn}`}><span>fn</span></a></li>
            <li><a href="#" className={`${styles.key} ${styles.c17} ${styles.control}`}><span>control</span></a></li>
            <li><a href="#" className={`${styles.key} ${styles.option} ${styles.optionleft}`}><span>option</span></a></li>
            <li><a href="#" className={`${styles.key} ${styles.command} ${styles.commandleft}`}><span>command</span></a></li>
            <li><a href="#" className={`${styles.key} ${styles.c32} ${styles.spacebar}`}></a></li>
            <li><a href="#" className={`${styles.key} ${styles.command} ${styles.commandright}`}><span>command</span></a></li>
            <li><a href="#" className={`${styles.key} ${styles.option} ${styles.optionright}`}><span>option</span></a></li>
            <ol>
              <li><a href="#" className={`${styles.key} ${styles.c37} ${styles.left}`}><span>&#x25C0;</span></a></li>
              <li>
                <a href="#" className={`${styles.key} ${styles.c38} ${styles.up}`}><span>&#x25B2;</span></a>
                <a href="#" className={`${styles.key} ${styles.c40} ${styles.down}`}><span>&#x25BC;</span></a>
              </li>
              <li><a href="#" className={`${styles.key} ${styles.c39} ${styles.right}`}><span>&#x25B6;</span></a></li>
            </ol>
          </ul>
        </div>
      </div>
    );
  }
}

export default Keyboard;
