import React from 'react';
import Header from '../components/Header';
import Persons from '../components/Persons';
import styles from './Pages.module.css'

function MyPersons() {

  return (
    <div className={styles.MyPersonsBody}>
      <Header />
      <Persons />
    </div>
  );
}

export default MyPersons;
