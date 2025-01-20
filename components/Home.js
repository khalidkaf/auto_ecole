import styles from '../styles/Home.module.css';
import logo from '../public/logo.jpg';
import Image from 'next/image';
// import Header from './Header';
import Navi from './Navi';
import Link from 'next/link';


function Home() {
  return (
    <div className={styles.body}>
      {/* <Header/> */}
      <Navi/>
      <main className={styles.main}>
      {/* <img src="/cfc-autoecole.jpeg" alt="Description de l'image" width="600" /> */}
        <img src="/cfc-autoecole.jpeg" alt="Auto-école" className={styles.imqge} />


        <h1 className={styles.titre2}>Découvrez nos offres pour passer votre permis de conduire :</h1>
        <div>

        <Link href="/codemanu">
            <h2 className={styles.offer}>Permis B boîte manuelle</h2>
        </Link>

        <Link href="/codeauto">
            <h2 className={styles.offer}>Permis B boîte automatique</h2>
        </Link>

        <Link href="/code">
          <h2 className={styles.offer}>Permis B conduite accompagnée</h2>
        </Link>

        <Link href="/codeautoacc">

            <h2 className={styles.offer}>Permis B conduite accompagnée boîte automatique</h2>
        </Link>

        <Link href="/passerelle">

            <h2 className={styles.offer}>Passerelle boîte automatique vers boîte manuelle</h2>
        </Link>

        

        </div>
        {/* <img src="/panneau-toit-voiture-ecrit-francais-autoecole-signifiant-anglais-auto-ecole_633872-478.jpg" alt="Description de l'image" width="300" /> */}
        <img src="/panneau-toit-voiture-ecrit-francais-autoecole-signifiant-anglais-auto-ecole_633872-478.jpg" alt="Description de l'image" className={styles.imqge} />


      </main>
    </div>
  );
}

export default Home;
