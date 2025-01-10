import Navi from '../components/Navi';
import styles from '../styles/Home.module.css';
import Link from 'next/link';


function Codeautoacc() {
    return <div>
        <Navi/>
        <div className={styles.containercode}>


            <Link href="/tarifsaccompagneeautosanscode">
                <div className={styles.wrappercode}>
                    <div>Je n'ai pas le code</div>
                    {/* <ul>
                    <li>1 Frais de gestion</li>
                    <li>1 Livre de code</li>
                    <li>1 Pochette pédagogique B</li>
                    <li>1 Accès illimité à la salle de code</li>
                    <li>1 Pack web</li>
                    <li>20 Leçons de conduite</li>
                    <li>1 Rendez-vous préalable</li>


                </ul> */}
                </div>
            </Link>

            <Link href="/tarifsaccompagneeautoaveccode">
                <div className={styles.wrappercode}>
                    <div>J'ai déjà le code</div>
                    {/* <ul>
                    <li>1 Frais de gestion</li>
                    <li>1 Livre de code</li>
                    <li>1 Pochette pédagogique B</li>
                    <li>1 Accès illimité à la salle de code</li>
                    <li>1 Pack web</li>
                    <li>20 Leçons de conduite</li>
                    <li>1 Rendez-vous préalable</li>


                </ul> */}
                </div>
            </Link>
            {/* <div className={styles.wrapper}>
                <div>1690 €</div>
                <ul>
                    <li>1 Frais de gestion</li>
                    <li>1 Livre de code</li>
                    <li>1 Pochette pédagogique B</li>
                    <li>1 Accès illimité à la salle de code</li>
                    <li>1 Pack web</li>
                    <li>20 Leçons de conduite</li>
                    <li>1 Rendez-vous préalable</li>


                </ul>
            </div> */}
        </div>
    </div>;
}

export default Codeautoacc;
