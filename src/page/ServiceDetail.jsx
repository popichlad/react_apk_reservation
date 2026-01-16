import React from 'react'
import { useParams } from 'react-router-dom'

const ServiceDetail = () => {
  const { id } = useParams() // récupération de l'id depuis l'URL

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

  // trouver le service correspondant à l'id
  const service = services.find(s => s.id === Number(id))

  //  si l'id n'existe pas
  if (!service) {
    return <h2>Service introuvable</h2>
  }

  return (
    <div>
      <p>{service.id}</p> 
    </div>
  )
}

export default ServiceDetail
