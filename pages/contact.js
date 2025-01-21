// import Navi from '../components/Navi';
// import styles from '../styles/Home.module.css';


// function Contact() {
//     return <div className={styles.body}>
//         <Navi />
//         <div
//          className={styles.containermail}>
//             <h1 className={styles.heading}>Contactez-nous</h1>
//             <p className={styles.text}>
//                 Cliquez sur le bouton ci-dessous pour nous envoyer un email ou écrivez-nous à <span className={styles.span}>cfc@gmail.com</span>:
//             </p>

//             <a
//                 href="mailto:cfc@gmail.com?subject=Demande%20de%20contact&body=Bonjour%2C%0D%0A%0D%0AJe%20souhaite%20obtenir%20plus%20d'informations%20sur%20vos%20services.%0D%0A%0D%0AMerci%20!"
//                 className={styles.button}
//             >
//                 Envoyer un email
//             </a>

//             <p className={styles.text}>
//                 Vous pouvez également nous joindre au <span className={styles.span}>06 10 20 30 40 </span>:
//             </p>
            
//         </div>
//     </div>;
// }

// export default Contact;




import { useState } from 'react';
import Navi from '../components/Navi';
import styles from '../styles/Home.module.css';

function Contact() {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    telephone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSendEmail = () => {
    const mailtoLink = `mailto:cfc@gmail.com?subject=Demande%20de%20contact&body=Nom%3A%20${encodeURIComponent(
      formData.nom
    )}%0D%0A%0D%0APrénom%3A%20${encodeURIComponent(
      formData.prenom
    )}%0D%0A%0D%0ATéléphone%3A%20${encodeURIComponent(
      formData.telephone
    )}%0D%0A%0D%0AMessage%3A%20${encodeURIComponent(formData.message)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className={styles.body}>
      <Navi />
      <div className={styles.containermail}>
        <h1 className={styles.heading}>Contactez-nous</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendEmail();
          }}
          className={styles.form}
        >
          <label className={styles.label}>
            Nom:
            <input
              type="text"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              required
              className={styles.input}
            />
          </label>
          <label className={styles.label}>
            Prénom:
            <input
              type="text"
              name="prenom"
              value={formData.prenom}
              onChange={handleChange}
              required
              className={styles.input}
            />
          </label>
          <label className={styles.label}>
            Téléphone:
            <input
              type="tel"
              name="telephone"
              value={formData.telephone}
              onChange={handleChange}
              required
              className={styles.input}
            />
          </label>
          <label className={styles.label}>
            Message:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className={styles.textarea}
            />
          </label>
          <button type="submit" className={styles.button}>
            Envoyer
          </button>
        </form>
        <p className={styles.text}>
          Vous pouvez également nous joindre au <span className={styles.span}>06 10 20 30 40</span>.
        </p>
      </div>
    </div>
  );
}

export default Contact;
