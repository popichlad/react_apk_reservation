import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
// impor de la commande qui nous permet d'utiliser les balise de rez

const Service = () => {
  const services = [
    {
      id: 1,
      title: 'Chambres & Suites',
      description:
        'Des chambres modernes et confortables conçues pour votre bien-être et votre tranquillité.',
      icon: '🛏️'
    },
    {
      id: 2,
      title: 'Restaurant & Bar',
      description:
        'Une cuisine raffinée et des boissons sélectionnées pour une expérience gastronomique unique.',
      icon: '🍽️'
    },
    {
      id: 3,
      title: 'Salle de Conférence',
      description:
        'Des espaces équipés pour vos réunions, formations et événements professionnels.',
      icon: '🏢'
    },
    {
      id: 4,
      title: 'Service Client 24h/24',
      description:
        'Une équipe disponible à tout moment pour répondre à vos besoins.',
      icon: '🛎️'
    }
  ]

  return (
    <section className="hotel-services">
      <div className="hotel-services-header">
        <h1 className="hotel-title">Nos Services</h1>
        <p className="hotel-subtitle">
          Confort, élégance et qualité pour un séjour inoubliable
        </p>
      </div>

      <div className="hotel-services-grid">
        {services.map(service => (
          
          <article className="hotel-service-card" key={service.id}>
            <div className="hotel-service-icon">{service.icon}</div>
            <h3 className="hotel-service-title">{service.title}</h3>
            <p className="hotel-service-description">{service.description}</p>
             {
                    
                         <Link to={`/service/${service.id}`} className="service-link">
                          Découvrir
                          </Link>

                   
                }
              
             
            
        
               
        
          </article>
        ))}
      </div>
       
    </section>
    
  )
}

export default Service
