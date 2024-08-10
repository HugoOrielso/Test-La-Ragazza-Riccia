import '/public/styles/loader.css'
import logoRiccia from '../assets/logo.webp'

const Loader = () => {
  return (
    <section className='container_loader'>
        <div className="loader">
            <img src={logoRiccia}  className='logo' alt="Logo la Ragazza Riccia" title='Logo la Ragazza Riccia'/>
            <label className='label_loader'>Aspetta Ricciolutta!...</label>
            <h5>Stiamo scrivendo le tue raccomandazioni</h5>
            <div className="loading"></div>
        </div>
    </section>
  )
}

export default Loader