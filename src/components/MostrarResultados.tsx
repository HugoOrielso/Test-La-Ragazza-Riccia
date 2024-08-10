import { UseRecomendacionesStore } from "../store/recomendaciones"
import { useEffect } from "react"
import '/public/styles/recomendaciones.css'
import ResetTest from "./ResetTest"
import { toast, Toaster } from "sonner"
import { GenerateDefatultProduct, GenerateProductsRecomended } from "../helpers/ProductsDefaultAndRecomendations"
import Consejos from "./Consejos"
import emailjs from '@emailjs/browser'
import generateTemplate from "../emails/generateTemplate"

const MostrarResultados = () => {
  const patternsfromStore = UseRecomendacionesStore(state=> state.fetchPatterns)
  const email = UseRecomendacionesStore(state=> state.emailUser)
  const sendEmail = UseRecomendacionesStore(state=> state.sendRecomendation)
  const recomendationFalse = UseRecomendacionesStore(state=> state.changeSendRecomendacionToFalse)
  let html = generateTemplate()
  
  const getData = () =>{
    patternsfromStore()
  }

  console.log(import.meta.env.VITE_EMAILJS_SERVICE_ID);
  

  const enviarMail = async ()=>{
    try {
      emailjs.init({
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC
      })
      const templateParams = {
        user_email: email,
        my_html: html
      };

      emailjs.send(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, templateParams).then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          recomendationFalse()
          toast.success("Hemos enviado tu cupón de descuento, revisa la bandeja de entrada.")
        },
        (error) => {
          console.log('FAILED...', error);
        },
      );
      
      
    } catch (error) {
      toast.error('Ocurrió un error al enviar tu')
    }
  }

  if(html && sendEmail === true){
    enviarMail()
  }

  useEffect(()=>{
    getData()
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