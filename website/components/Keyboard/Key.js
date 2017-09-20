
import React, { PropTypes } from 'react';
import classnames from 'classnames';
import styles from './Key.scss';

class Key extends React.Component {

  static propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
  };

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    const {label} = this.props;

    return (
      <div className={classnames(styles.container)}>
        <a href="#" className={classnames(styles.key)}>
          <span className={classnames(styles.label)}>
            {label}
          </span>
        </a>
        <div className={classnames(styles['key-depth-1'])}></div>
        <div className={classnames(styles['key-depth-2'])}></div>
        <div className={classnames(styles['key-depth-3'])}></div>
      </div>
    );
  }
}

export default Key;
