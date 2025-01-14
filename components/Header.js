import Link from 'next/link'; // Utilisation de Link pour une navigation client-side efficace avec Next.js
import React from 'react';
import styles from '../styles/Header.module.css'; // Import du fichier CSS pour styliser le header
import logo from '../public/logo.jpg';
import Image from 'next/image';
import Navi from './Navi';


const Header = () => {
  return (
    <header className={styles.header}>
      <Navi/>
    </header>
  );
};


export default Header;