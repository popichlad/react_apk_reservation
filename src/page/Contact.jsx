// import React from 'react'

// const Contact = () => {
//   return (
//     <div>
//       <h1>Bienvenue sur ma page contact</h1>
//     </div>  
//   )
// }

// export default Contact

import React from 'react';
import '../App.css';

const Contact = () => {

  
  return (
    
    <div className="contact-page">
      <div className="contact-overlay"></div>
      
      <div className="contact-container">
        {/* Section Infos */}
        <div className="contact-info">
          <h1 className="contact-title">Contactez l'Excellence</h1>
          <p className="contact-description">
            Une question sur votre séjour ? Notre conciergerie est à votre entière disposition 24h/24 pour répondre à vos exigences les plus raffinées.
          </p>

          <div className="info-items">
            <div className="info-item">
              <span className="info-icon">📍</span>
              <div>
                <h3>Adresse</h3>
                <p>128 Boulevard de tomdé, 75008 Kara, Togo</p>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">📞</span>
              <div>
                <h3>Téléphone</h3>
                <p>+228 91 12 61 29</p>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">📧</span>
              <div>
                <h3>Email</h3>
                <p>contact@salif-hotel.com</p>
              </div>
            </div>
          </div>

          <div className="social-links">
            <span className="social-dot">Instagram</span>
            <span className="social-dot">Facebook</span>
            <span className="social-dot">LinkedIn</span>
          </div>
        </div>

        {/* Section Formulaire */}
        <div className="contact-form-container">
          <form className="luxury-form">
            <div className="form-row">
              <div className="input-group">
                <label>Nom Complet</label>
                <input type="text" placeholder="Ex: Jean Dupont" />
              </div>
              <div className="input-group">
                <label>Email</label>
                <input type="email" placeholder="jean@exemple.com" />
              </div>
            </div>

            <div className="input-group">
              <label>Sujet</label>
              <select>
                <option>Réservation de Suite</option>
                <option>Organisation d'Événement</option>
                <option>Demande Spéciale</option>
                <option>Autre</option>
              </select>
            </div>

            <div className="input-group">
              <label>Message</label>
              <textarea rows="5" placeholder="Comment pouvons-nous vous aider ?"></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Envoyer la demande
              <span className="btn-shine"></span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;