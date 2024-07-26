import { UseRecomendacionesStore } from "../store/recomendaciones"
import { findMatchingRecommendation } from "../services/getQuestionsAndData"
import { useEffect, useState } from "react"
import { Response } from "../types"
import '/public/styles/recomendaciones.css'
import FooterFinalData from "./FooterFinalData"
import { toast, Toaster } from "sonner"


const MostrarResultados = () => {
  
  const [recomendedProduct, setRecomendedProduct] = useState<Response>()
  const threeAnswersUser = UseRecomendacionesStore(state => state.threeAnswersUser)

  async function getPatterns() {
    const res = await fetch(`${import.meta.env.NODE_ENV == 'development' ? 'http://localhost:5173/pattern.json' : "https://test-la-ragazza-riccia.vercel.app/pattern.json" }`)
    const { responses } = await res.json()
    const pattern = responses
    if (!threeAnswersUser)  return
    let match =  findMatchingRecommendation(threeAnswersUser,pattern)
    if(!match) return
    setRecomendedProduct(match)  
  }

  useEffect(()=>{
    getPatterns()
    toast.success("Hemos enviado tu cupón de descuento, revisa la bandeja de entrada.")
  },[])

  return (
    <>
      <section className="recomendaciones">
        <ul className="rutinas">
          {
            recomendedProduct?.recommendation.rutinas.map((rutina,index)=>{
              return(
                <li key={index} className="rutina">
                  <h3 className="rutina_detalle">{index + 1}. { rutina }</h3> 
                </li>
              )
            })
          }
        </ul>
        <div>
          <h3 style={{margin: 0}}>Sugerimos el uso de estos productos.</h3>
          <ul className="productos">
            {
              recomendedProduct?.recommendation.productos.map((producto,index)=>{
                return(
                  <li key={index} className="producto">
                    <img src={producto.urlImage} alt={producto.nombre} />
                    <footer className="footer_producto">
                      <div>
                        <h3> {producto.nombre} </h3>
                        <h4> {producto.precio} € </h4>
                      </div>
                      <a className="product_link" href={producto.webSite}>Ver detalle</a>
                    </footer>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </section>
      <FooterFinalData/>
      <Toaster richColors />
    </>
  )
}

export default MostrarResultados