import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import styles from './Header.module.css';

import logo from './'

function Header() {
  return (
    <header className={styles.Header}>
      <Link className={styles.logo} to="/">
        <img src={logo} alt="logo" />
      </Link>
      <div className={styles.nav}>
        <Link className={styles.nav__item} defaultValue="#" to="/search/#">Search</Link>
        <HashLink className={styles.nav__item} to="/#how-it-works">How it works</HashLink>
        <HashLink className={styles.nav__item} to="/#about">About</HashLink>
      </div>
    </header>
  );
}

export default Header;