import { UseRecomendacionesStore } from "../store/recomendaciones"
import '/public/styles/recomendaciones.css'
import ResetTest from "./ResetTest"
import { toast, Toaster } from "sonner"
import { GenerateDefatultProduct, GenerateProductsRecomended } from "../helpers/ProductsDefaultAndRecomendations"
import Consejos from "./Consejos"
import emailjs from '@emailjs/browser'
import generateTemplate from "../emails/generateTemplate"
import Header from "./Header"

const MostrarResultados = () => {
  const emailUser = UseRecomendacionesStore(state=> state.emailUser)
  const nameUser = UseRecomendacionesStore(state=> state.nameUser)
  const sendEmail = UseRecomendacionesStore(state=> state.sendRecomendation)
  const recomendationFalse = UseRecomendacionesStore(state=> state.changeSendRecomendacionToFalse)
  const html = generateTemplate()
  
  const enviarMail = async ()=>{
    try {
      emailjs.init({
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC
      })
      const templateParams = {
        user_email: emailUser,
        to_name: nameUser, 
        my_html: html
      };
      const request = await emailjs.send(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, templateParams)
      const response = request.status
      if(response === 200){
        recomendationFalse()
        toast.success("Ricciolutta abbiamo inviato il tuo buono sconto 🤩, controlla la tua casella di posta.")
      }
    } catch (error) {
      toast.error("Si è verificato un errore durante l'invio della tua email 😒, riprova più tardi .")
    }
  }

  if(html && sendEmail === true){
    enviarMail()
  }

  return (
    <>
      <section className="wrapper_final_results">
        <Header/>
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