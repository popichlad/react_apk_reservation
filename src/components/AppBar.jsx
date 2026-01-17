// import React from 'react'
// import { Link } from 'react-router-dom'

// const AppBar = () => {
//   return (
//     <div>
//     <Link to={"/"}> accueil </Link>
//     <Link to={"/Contact"}> Contact </Link>
//     <Link to={"/Service"}> service </Link>
//     </div>
//   )
// }

// export default AppBar

import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const AppBar = () => {
  return (
    <nav className="glass-nav">
      <div className="nav-content">
        {/* Logo Stylisé */}
        <div className="nav-logo">
          <span className="gold-dot"></span>
          SALIF<span>HOTEL</span>
        </div>

        {/* Liens de navigation */}
        <div className="nav-links">
          <Link Array to={"/"} className="nav-item">Accueil</Link>
          <Link to={"/Service"} className="nav-item">Services</Link>
          <Link to={"/Contact"} className="nav-item nav-btn">Contact</Link>
        </div>
      </div>
    </nav>
  )
}

export default AppBar