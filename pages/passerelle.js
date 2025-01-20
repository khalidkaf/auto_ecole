import Navi from '../components/Navi';
import styles from '../styles/Home.module.css';


function Passerelle() {
    return <div className={styles.body}>
        <Navi />

        <div className={styles.containertarif}>



            <div className={styles.wrapper}>
                <div>410 €</div>
                <ul>
                    {/* <li>1 Frais de gestion</li> */}
                    <li>Attestation de formation</li>
                    <li>Fabrication permis</li>
                    <li>Frais administratifs inclus</li>
                    {/* <li>1 Pack web</li> */}
                    {/* <li>1 Evaluation de départ</li> */}

                    <li>7 heures de formation</li>
                    {/* <li>1 Rendez-vous préalable</li> */}
                    {/* <li>1 Présentation à l'examen</li> */}



                </ul>
            </div>

        </div>
    </div>;
}

export default Passerelle;
