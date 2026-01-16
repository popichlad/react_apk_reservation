import react from 'react'
import Reservation from './page/Reservation'
import Contact from './page/Contact'
import Service from './page/service';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from './page/NotFound';
import ServiceDetail from './page/ServiceDetail';

// import des pages et de comande qui nous pertra d'utilser react dans le code



const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path ={'/'}element={<Reservation/>}/>
    <Route path ={'contact'}element={<Contact/>}/>
    <Route path ={'Service'}element={<Service/>}/>
    <Route path= {'/service/:id' } element ={<ServiceDetail/>}></Route>
    
    <Route path ={'*'}element={<NotFound/>}/>
    
    {/* le premier contacte cest ceu
   lui quon mis au nivau du bouton il est comme le # comme la balise <a 
    path = destination*/}

    </Routes>



    </BrowserRouter>
  )
}
export default App
// la balise Bro... est utiliser pour indiquer au les les pages a fficher 
// elle se trouve dans la commande quo'on n'a instaler dans le terminal y compri les balises routes et
// et route qui va affiche les page sans chargement des pages 