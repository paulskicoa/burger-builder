import React from 'react';

import Toolbar from '../Navigation/Toolbar/Toolbar';
import styles from './Layout.module.css';

const Layout = (props) => (
  <React.Fragment>
    <div>
      <Toolbar />
    </div>
    <main className={styles.Content}>
      {props.children}
    </main>
  </React.Fragment>
);

export default Layout;