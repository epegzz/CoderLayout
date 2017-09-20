import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';
import Keyboard from '../../components/Keyboard';
import s from './styles.css';
import { title, html } from './index.md';

class HomePage extends React.Component {

  componentDidMount() {
    document.title = title;
  }

  render() {
    return (
      <Layout className={s.content}>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <h4>Layers</h4>
        <p>
          <br /><br />
          <Keyboard />
          <div style={{clear: 'both'}} >aaaaa</div>
        </p>
      </Layout>
    );
  }

}

export default HomePage;
