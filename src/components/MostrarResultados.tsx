import { UseRecomendacionesStore } from "../store/recomendaciones"
import { useEffect } from "react"
import '/public/styles/recomendaciones.css'
import ResetTest from "./ResetTest"
import { toast, Toaster } from "sonner"
import { GenerateDefatultProduct, GenerateProductsRecomended } from "../helpers/ProductsDefaultAndRecomendations"

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
      <section className="recomendaciones">
        <GenerateProductsRecomended />
        <GenerateDefatultProduct  />
      </section>
      <ResetTest/>
      <Toaster richColors />
    </>
  )
}

export default MostrarResultados