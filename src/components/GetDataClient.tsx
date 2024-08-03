import { useRef, useState } from "react"
import '/public/styles/dataClient.css'
import { EmailIcon } from "../icons"
import { toast, Toaster } from 'sonner'
import { orderDataAndSetData } from "../services/getQuestionsAndData"
import { UseRecomendacionesStore } from "../store/recomendaciones"
import emailjs from '@emailjs/browser';
import { searchThreeAnswers } from "../hooks/useQuestionData"



const GetDataClient = () => {
    const form = useRef<HTMLFormElement>(null);
    const [answersUserOrdered, setAnswersUserOrdered] = useState<Record<number,number> | null>(null)
    const setAnswersUser = UseRecomendacionesStore(state => state.setThreeAnswersUser)
    const [dataEmail,setDataEmail] = useState<string>()
    const [dataName, setDataName] = useState<string>()
    const threeAnswersUser = searchThreeAnswers()
    
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        let keyAndValuesUser = orderDataAndSetData(threeAnswersUser)
        setAnswersUserOrdered(keyAndValuesUser)
        

        if (!dataEmail || !dataName) {
            toast.error("Faltan datos por enviar")
            return
        }
    
        try {
            if (form.current) {
                const res = await emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID , import.meta.env.VITE_EMAILJS_TEMPLATE_ID, form.current, {
                    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC,
                })
                if(res.status === 200){
                    setTimeout(()=>{
                        if(answersUserOrdered && keyAndValuesUser){
                            setAnswersUser(answersUserOrdered)
                        }
                    },100)
                }
            } 
        } catch (error) {
            toast.error("Ocurrió un error enviando la información, intenta de nuevo.")
        }
    }

    return (
        <section className="send_email">
            <div>
                <div className="sub_header">
                    <h3>¡Gracias!</h3>
                    <h3>Estamos analizando tus respuestas</h3>
                </div>
                <div className="sub_header">
                    <h3>Ahora, ¿te gustaría recibir un descuento?</h3>
                    <h3>Recibirás 10% de descuento en tu próxima compra</h3>
                </div>
            </div>

            <div className="popup">
                <form className="form" onSubmit={handleSubmit} ref={form}>
                    <div className="form_header">
                        <div className="note">
                            <label className="title">Obtener descuento</label>
                        </div>
                        <div className="icon">
                            <EmailIcon />
                        </div>
                    </div>
                    <input onChange={(e)=> setDataEmail(e.target.value)} placeholder="Enter your e-mail" title="Enter your e-mail" name="user_email" type="email" className="input_field" />
                    <input onChange={(e)=> setDataName(e.target.value)} placeholder="Enter your name" title="Enter your e-mail" name="to_name" type="text" className="input_field" />
                    <button type="submit" className="submit">Ver resultado</button>
                </form>
            </div>
            <Toaster richColors />
        </section>
    )
}

export default GetDataClient
