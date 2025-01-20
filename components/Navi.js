import Link from 'next/link'; // Utilisation de Link pour une navigation client-side efficace avec Next.js
import React from 'react';
// import styles from '../styles/Header.module.css'; // Import du fichier CSS pour styliser le header
import logo from '../public/logo.jpg';
import Image from 'next/image';
import styles from '../styles/NavBar.module.css'; // Module CSS pour les styles
import { useState } from 'react';



const Navi = () => {
    const [isOpen, setIsOpen] = useState(false);

  // Fonction pour ouvrir/fermer le menu
  const toggleMenu = () => {
    setIsOpen(!isOpen)
};
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <a href="/" className={styles.titre}>CFC Auto Ecole</a>
      </div>

      {/* Menu pour mobile */}
      <div className={styles.menuIcon} onClick={toggleMenu}>
        <span className={isOpen ? styles.lineOpen : styles.line}></span>
        <span className={isOpen ? styles.lineOpen : styles.line}></span>
        <span className={isOpen ? styles.lineOpen : styles.line}></span>
      </div>

      {/* Liens de navigation */}
      <ul className={isOpen ? `${styles.navLinks} ${styles.active}` : styles.navLinks}>
        <li>
          <a href="/">Accueil</a>
        </li>
        {/* <li>
          <a href="/about">À propos</a>
        </li> */}
        {/* <li>
          <a href="/services">Services</a>
        </li> */}
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};


export default Navi;