import Navi from '../components/Navi';
import styles from '../styles/Home.module.css';


function Coordonnees() {
    return <div className={styles.body}>
        <Navi />
        <div
         className={styles.containermail}>
            <h1 className={styles.heading}>Coordonnées : <br/><br/></h1>
            {/* <p className={styles.text}>
                Cliquez sur le bouton ci-dessous pour nous envoyer un email ou écrivez-nous à <span className={styles.span}>cfc@gmail.com</span>:
            </p> */}


            <p className={styles.text}>
                Nous sommes joignable au <span className={styles.span}>01 72 50 21 16</span>:<br/>
            </p>

            <p className={styles.text}>
                Nous sommes heureux de vous accueillir : <br/>
                Lundi : de 15h00 à 19h00<br/>
                Mardi : de 15h00 à 19h00<br/>
                Mercredi : de 15h00 à 19h00<br/>
                Jeudi : de 15h00 à 19h00<br/>
                Vendredi : de 15h00 à 19h00<br/>
                Samedi : de 10h00 à 16h00<br/>

            </p>

            <p className={styles.text}>
                Retrouvez nous au <span className={styles.span}>18 rue Maurice Berteaux, Sucy-en-Brie </span>:<br/><br/><br/>
            </p>
            <img src="/plan_cfc.jpeg" alt="Plan auto-école" className={styles.plan} />
            
        </div>
    </div>;
}


export default Coordonnees;
