import { useState } from 'react' 
import '../App.css'
import{Link} from 'react-router-dom'

function Reservation() {
// Déclaration de varible de type table qui contien des chambres
  const CHAMBRES = [
    { id: 1, type: 'piéce simple', prix: 50000 },
    { id: 2, type: 'chambre salon', prix: 80000 },
    { id: 3, type: '2 chambres salon', prix: 150000 },
    { id: 4, type: 'suite', prix: 200000 },
  ];
  //  
  const [nomComplet, setNomComplet] = useState('');
  const [numero, setNumero] = useState('');
  const [numeroCENI, setNumeroCENI] = useState('');
  const [duree, setDuree] = useState(0);
  const [chambreid, setChambreId] = useState('');
  const [reservations, setReservation] = useState([]);


  function ajouter({ nomComplet, numero, numeroCENI, duree, chambreid }) {
    const reservation = {
      id: Date.now(),
      date: Date.now(),
      nomComplet,
      numero,
      numeroCENI,
      duree,
      statut: "En attente",
      chambre: CHAMBRES.find(chambre => chambre.id == chambreid)
    };
    setReservation([...reservations, reservation]);
  }
  //  map permet de parcourire une iste

  function changerStatut({ NouveauStatut, id }) {
    const reservationsMisAjour = reservations.map(reservation =>
      reservation.id == id
        ? { ...reservation, statut: NouveauStatut }
        : reservation
    );
    setReservation(reservationsMisAjour);
  }
//  la metho filter de la fonction permet de filter les element apres verifivation avec ! qui veux dire saufe element qui est = id ce qui qui fait que ca ne saffiche pqs et suprimer l'id. il filtre et retourne unnouveaux tablo
  function suprimer({id}) {
    const reservationsMisAjour = reservations .filter (reservation => reservation.id!= id);
    setReservation(reservationsMisAjour)
    
  }
//  une methode cest une fontion dune classe : find
// 
  return (
    <div className="app-container">
    
    
    
  

      {/* ===== FORMULAIRE ===== */}
      <section className="reservation-section">
        

        <div className="formulaire" id="formulaire-reservation">
          <div className="liens">
          {/* <Link to={"/"}> accueil </Link>
    <Link to={"/Contact"}> Contact </Link>
    <Link to={"/Service"}> service </Link> */}
    
        </div>
          <h2 className="form-title">Formulaire de réservation</h2>

          <form className="reservation-form">

            <div className="form-group">
              <label className="form-label" htmlFor="nom">
                Nom complet
              </label>
              <input
                className="form-input"
                id="nom"
                type="text"
                value={nomComplet}
                onChange={(e) => setNomComplet(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="numero">
                Numéro de téléphone
              </label>
              <input
                className="form-input"
                id="numero"
                type="text"
                value={numero}
                onChange={(e) => setNumero(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="numeroCENI">
                Numéro CNI
              </label>
              <input
                className="form-input"
                id="numeroCENI"
                type="text"
                value={numeroCENI}
                onChange={(e) => setNumeroCENI(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="duree">
                Durée de réservation
              </label>
              <input
                className="form-input"
                id="duree"
                type="number"
                value={duree}
                onChange={(e) => setDuree(parseInt(e.target.value))}
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="chambres">
                Type de chambre
              </label>
              <select
                className="form-select"
                id="chambres"
                value={chambreid}
                onChange={(e) => setChambreId(e.target.value)}
              >
                <option value="">Choisir une chambre</option>
                {CHAMBRES.map(chambre => (
                  <option
                    key={chambre.id}
                    value={chambre.id}
                  >
                    {chambre.type}
                  </option>
                ))}
              </select>
            </div>

          </form>
        </div>

        <button
          className="btn btn-primary btn-submit"
          id="btn-enregistrer"
          onClick={() => {
            if (nomComplet =="" || numero == "" || numeroCENI == "" || chambreid =="" || duree ==0)
            {alert("entre vos info");
              return;
            }
            ajouter({ nomComplet, numero, numeroCENI, duree, chambreid });
            setNomComplet('');
            setNumero('');
            setNumeroCENI('');
            setDuree('');
            setChambreId('');
          }}
        >
          Enregistrer
          <span className="btn-shin"></span>
        </button>

      </section>

      {/* ===== HISTORIQUE ===== */}
      <section className="historique-section">

        {reservations.map(reservation => (
          <article
            key={reservation.id}
            className="reservation-card"
          >

            <div className="reservation-info">

              <p className="reservation-status">
                {reservation.statut}
              </p>

              <p className="reservation-name">
                {reservation.nomComplet}
              </p>
               <p className="reservation-cni">
                {reservation.numero}
              </p>


              <p className="reservation-room">
                {reservation.chambre.type}
              </p>

              <p className="reservation-cni">
                {reservation.numeroCENI}
              </p>

              <p className="reservation-duration">
                {reservation.duree} jour(s)
              </p>

            </div>

            <div className="reservation-actions">

              <button
                className="btn btn-success btn-confirm"
                onClick={() =>
                  changerStatut({
                    id: reservation.id,
                    NouveauStatut: "Confirmé"
                  })
                }
              >
                Confirmer
              </button>

              <button
                className="btn btn-danger btn-cancel"
                onClick={() =>
                  changerStatut({
                    id: reservation.id,
                    NouveauStatut: "Annulé"
                  })
                }
              >
                Annuler
              </button>

              <button
                className="btn btn-danger btn-cance"
                onClick={() =>
                  suprimer({
                  
                    id: reservation.id
                  })
                }
              >
                suprimer
              </button>

            </div>

          </article>
        ))}

      </section>

    </div>
  );
}

export default Reservation;
