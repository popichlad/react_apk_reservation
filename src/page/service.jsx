import React, { useEffect, useState} from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import api from '../components/api/axios';
// impor de la commande qui nous permet d'utiliser les balise de rez
// on utiliseuse useeffet pou declancer une action apres un changement d'etat
const Service = () => {
  const[ services, setservice]= useState([])
  useEffect(() => {
    api.get('/services').then(response => {
      console.log(response)
      setservice(response.data)
    })
    // .then = apres avoir
    // '/services' cest le andpoint d'acces a l'api
    // responce la reponse  apres la requette


  },[]
)
  

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
