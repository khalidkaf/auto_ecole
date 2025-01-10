import Link from 'next/link'; // Utilisation de Link pour une navigation client-side efficace avec Next.js
import React from 'react';
import styles from '../styles/Header.module.css'; // Import du fichier CSS pour styliser le header
import logo from '../public/logo.jpg';
import Image from 'next/image';
import Navi from './Navi';


const Header = () => {
  return (
    <header className={styles.header}>
      {/* <div className={styles.logo}> */}
        {/* <Link href="/k"> */}
          {/* <a>MonSite</a> Logo ou titre */}
          {/* <Image src={logo} alt={"logo entreprise"} width={120} height={60} /> */}
        {/* </Link> */}
      {/* </div> */}
      {/* <nav>
        <ul className={styles.navLinks}>
          <li>
            <Link href="/">
              <a>ACCUEIL</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>CONTACT</a>
            </Link>
          </li>
          <li className={styles.devis}>
            <Link href="/contact">
              <a>DEVIS GRATUIT</a>
            </Link>
          </li>
        </ul>
      </nav> */}
      <Navi/>
    </header>
  );
};


export default Header;