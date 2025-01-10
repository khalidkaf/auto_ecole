import styles from '../styles/Home.module.css';
import logo from '../public/logo.jpg';
import Image from 'next/image';
// import Header from './Header';
import Navi from './Navi';
import Link from 'next/link';


function Home() {
  return (
    <div>
      {/* <Header/> */}
      <Navi/>
      <main className={styles.main}>
      <img src="/cfc-autoecole.jpeg" alt="Description de l'image" width="600" />

      {/* <Image src={logo} alt={"logo entreprise"} width={600} height={314} /> */}
        {/* <h1 className={styles.title}>
          Simplifier votre déménagement <br/>avec Nous !!
        </h1>
        <h5 className={styles.title2}>
          Obtenez votre déménagement où vous le souhaitez.
        </h5> */}

        <h1>Découvrez nos offres pour passer votre permis de conduire :</h1>
        <div>
        <Link href="/code">
          <h2 className={styles.offer}>Permis B conduite accompagnée</h2>
        </Link>
            {/* <p>formule 20 leçons avec code à 1290 euros !!!</p>
            <p>formule 20 leçons sans code à 1200 euros !!!</p>
            <p>formule 25 leçons avec code à 1490 euros !!!</p>
            <p>formule 25 leçons sans code à 1390 euros !!!</p>
            <p>formule 30 leçons avec code à 1690 euros !!!</p>
            <p>formule 30 leçons sans code à 1590 euros !!!</p> */}

        <Link href="/codeautoacc">

            <h2 className={styles.offer}>Permis B conduite accompagnée boîte automatique</h2>
        </Link>

            {/* <p>formule 20 leçons avec code à 1590 euros !!!</p>
            <p>formule 20 leçons sans code à 1540 euros !!!</p>
            <p>formule 25 leçons avec code à 1790 euros !!!</p>
            <p>formule 25 leçons sans code à 1740 euros !!!</p>
            <p>formule 30 leçons avec code à 1690 euros !!!</p>
            <p>formule 30 leçons sans code à 1590 euros !!!</p> */}

        <Link href="/codemanu">
            <h2 className={styles.offer}>Permis B boîte manuelle</h2>
        </Link>
            {/* <p>formule 20 leçons avec code à 1090 euros !!!</p>
            <p>formule 20 leçons sans code à 990 euros !!!</p>
            <p>formule 25 leçons avec code à 1310 euros !!!</p>
            <p>formule 25 leçons sans code à 1240 euros !!!</p>
            <p>formule 30 leçons avec code à 1540 euros !!!</p>
            <p>formule 30 leçons sans code à 1490 euros !!!</p>
            <p>formule 35 leçons avec code à 1790 euros !!!</p>
            <p>formule 35 leçons sans code à 1710 euros !!!</p>
            <p>formule 40 leçons avec code à 1950 euros !!!</p>
            <p>formule 40 leçons sans code à 1890 euros !!!</p> */}

        <Link href="/codeauto">
            <h2 className={styles.offer}>Permis B boîte automatique</h2>
        </Link>
            {/* <p>formule 13 leçons avec code à 1090 euros !!!</p>
            <p>formule 13 leçons sans code à 990 euros !!!</p>
            <p>formule 20 leçons avec code à 1490 euros !!!</p>
            <p>formule 20 leçons sans code à 1390 euros !!!</p>
            <p>formule 25 leçons avec code à 1690 euros !!!</p>
            <p>formule 25 leçons sans code à 1590 euros !!!</p>
            <p>formule 30 leçons avec code à 1890 euros !!!</p>
            <p>formule 30 leçons sans code à 1790 euros !!!</p> */}

        </div>
        <img src="/panneau-toit-voiture-ecrit-francais-autoecole-signifiant-anglais-auto-ecole_633872-478.jpg" alt="Description de l'image" width="300" />

        {/* <div className={styles.offer}>
          <h2>Permis B boîte auto</h2>
            <p>forfait à partir de 1000 euros !!!</p>
            <p>forfait 25 heures à partir de 1500 euros !!!</p>
        </div> */}

      </main>
    </div>
  );
}

export default Home;
