import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const NotFound = () => {
  return (
    <div className="notfound-container">
      <div className="notfound-card">
        <h1 className="notfound-code">404</h1>
        <h2 className="notfound-title">Page introuvable</h2>
        <p className="notfound-text">
          Désolé, la page que vous cherchez n’existe pas ou a été déplacée.
        </p>

        <Link to="/" className="notfound-btn">
          Retour à l’accueil
        </Link>
      </div>
    </div>
  )
}

export default NotFound
