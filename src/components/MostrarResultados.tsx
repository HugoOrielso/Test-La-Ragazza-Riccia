import { UseRecomendacionesStore } from "../store/recomendaciones"
import { useEffect } from "react"
import '/public/styles/recomendaciones.css'
import ResetTest from "./ResetTest"
import { toast, Toaster } from "sonner"
import { GenerateDefatultProduct, GenerateProductsRecomended } from "../helpers/ProductsDefaultAndRecomendations"
import Consejos from "./Consejos"

const MostrarResultados = () => {
  const patternsfromStore = UseRecomendacionesStore(state=> state.fetchPatterns)
  const getData = () =>{
    patternsfromStore()
  }

  useEffect(()=>{
    getData()
    toast.success("Hemos enviado tu cupón de descuento, revisa la bandeja de entrada.")
  },[])

  return (
    <>
      <section className="wrapper_final_results">
        <section className="recomendaciones">
          <GenerateProductsRecomended />
          <GenerateDefatultProduct  />
        </section>
        <Consejos/>
        <ResetTest/>
      </section>
      <Toaster richColors />
    </>
  )
}

export default MostrarResultados