import Navi from '../components/Navi';
import styles from '../styles/Home.module.css';


function Tarifsaccompagneeaveccode() {
    return <div className={styles.body}>
        <Navi />

        <div className={styles.containertarif}>



            <div className={styles.wrapper}>
                <div>1200 €</div>
                <ul>
                    <li>1 Frais de gestion</li>
                    {/* <li>1 Livre de code</li> */}
                    {/* <li>1 Pochette pédagogique B</li> */}
                    {/* <li>1 Accès illimité à la salle de code</li> */}
                    {/* <li>1 Pack web</li> */}
                    <li>20 Leçons de conduite</li>
                    <li>1 Rendez-vous préalable</li>


                </ul>
            </div>

            <div className={styles.wrapper}>
                <div>1390 €</div>
                <ul>
                    <li>1 Frais de gestion</li>
                    {/* <li>1 Livre de code</li> */}
                    {/* <li>1 Pochette pédagogique B</li> */}
                    {/* <li>1 Accès illimité à la salle de code</li> */}
                    {/* <li>1 Pack web</li> */}
                    <li>25 Leçons de conduite</li>
                    <li>1 Rendez-vous préalable</li>


                </ul>
            </div>

            <div className={styles.wrapper}>
                <div>1590 €</div>
                <ul>
                    <li>1 Frais de gestion</li>
                    {/* <li>1 Livre de code</li> */}
                    {/* <li>1 Pochette pédagogique B</li> */}
                    {/* <li>1 Accès illimité à la salle de code</li> */}
                    {/* <li>1 Pack web</li> */}
                    <li>30 Leçons de conduite</li>
                    <li>1 Rendez-vous préalable</li>


                </ul>
            </div>
        </div>
    </div>;
}

export default Tarifsaccompagneeaveccode;
