// import Navi from '../components/Navi';
// import styles from '../styles/Home.module.css';


// function Contact() {
//   return <div className={styles.body}>
//         <Navi/>
//         <div>
//             <p>téléphone</p>
//             <p>adresse mail</p>
//         </div>
//     </div>;
// }

// export default Contact;


import Navi from '../components/Navi';
import styles from '../styles/Home.module.css';


function Contact() {
    return <div className={styles.body}>
        <Navi />
        <div
         className={styles.containermail}>
            <h1 className={styles.heading}>Contactez-nous</h1>
            <p className={styles.text}>
                Cliquez sur le bouton ci-dessous pour nous envoyer un email ou écrivez-nous à cfc@gmail.com:
            </p>

            <a
                href="mailto:cfc@gmail.com?subject=Demande%20de%20contact&body=Bonjour%2C%0D%0A%0D%0AJe%20souhaite%20obtenir%20plus%20d'informations%20sur%20vos%20services.%0D%0A%0D%0AMerci%20!"
                className={styles.button}
            >
                Envoyer un email
            </a>

            <p className={styles.text}>
                Vous pouvez également nous joindre au <span className={styles.span}>06 10 20 30 40 </span>:
            </p>
            
        </div>
    </div>;
}

// const styles = {
//     container: {
//       textAlign: 'center',
//       marginTop: '50px',
//     },
//     heading: {
//       fontSize: '2rem',
//       color: '#333',
//     },
//     text: {
//       fontSize: '1.2rem',
//       marginBottom: '20px',
//     },
//     button: {
//       display: 'inline-block',
//       padding: '10px 20px',
//       backgroundColor: '#333',
//       color: 'white',
//       textDecoration: 'none',
//       fontSize: '1rem',
//       borderRadius: '5px',
//       transition: 'background-color 0.3s',
//     },
//     buttonHover: {
//       backgroundColor: '#555',
//     },
//   };


export default Contact;
