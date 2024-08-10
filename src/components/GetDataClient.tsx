import { useRef, useState } from "react"
import '/public/styles/dataClient.css'
import { EmailIcon } from "../icons"
import { toast, Toaster } from 'sonner'
import { UseRecomendacionesStore } from "../store/recomendaciones"
import { orderAnswersUser } from "../hooks/useQuestionData"
import Loader from "./Loader"


const GetDataClient = () => {
    const form = useRef<HTMLFormElement>(null);
    const setAnswersUser = UseRecomendacionesStore(state => state.setThreeAnswersUser)
    const changeToTrue = UseRecomendacionesStore(state => state.changeSendRecomendacionToTrue)
    const setDataUSer = UseRecomendacionesStore(state => state.setDataUser)
    const [dataEmail,setDataEmail] = useState<string>()
    const [dataName, setDataName] = useState<string>()
    const threeAnswersUser: Record<number,number> | any = orderAnswersUser()
    const [loader,setLoader] = useState <boolean> (false)
    

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (!dataEmail || !dataName) {
            toast.error("Faltan datos por enviar")
            return
        }


        setDataUSer(dataName,dataEmail)
        setLoader(true)
        
        try {
        if (form.current) {
            setTimeout(()=>{
                setLoader(false)
                changeToTrue()
                setAnswersUser(threeAnswersUser)
            },2500)
        } 
        } catch (error: any) {
            if(error.status === 422){
                toast.error('Envía un formato correcto de email.')
                return
            }
            toast.error("Ocurrió un error enviando la información, intenta de nuevo.")
        }
    }

    return (
        <>  
        
            {!loader &&
                <section className="send_email">
                    <div>
                        <div className="sub_header">
                            <h3>¡Grazie!</h3>
                            <h3>Stiamo analizzando le tue risposte</h3>
                        </div>
                        <div className="sub_header">
                            <h3>Ora, vorresti ricevere uno sconto?</h3>
                            <h3>Riceverai uno sconto del 10% sul tuo prossimo acquisto</h3>
                        </div>
                    </div>

                    <div className="popup">
                        <form className="form" onSubmit={handleSubmit} ref={form}>
                            <div className="form_header">
                                <div className="note">
                                    <h1 className="title">Ottieni sconto</h1>
                                </div>
                                <div className="icon">
                                    <EmailIcon />
                                </div>
                            </div>
                            <div>
                                <span className="span_proveer">
                                    Forniscici la tua email e il tuo nome per inviarti un buono sconto monouso
                                </span>
                            </div>
                            <label htmlFor="email" style={{width:"100%"}}>
                                <input id="email" onChange={(e)=> setDataEmail(e.target.value)} placeholder="Enter your e-mail" title="Enter your e-mail" name="user_email" type="email" autoComplete="true" className="input_field" />
                            </label>
                            <label htmlFor="name"  style={{width:"100%"}}>
                                <input autoComplete="true" id="name" onChange={(e)=> setDataName(e.target.value)} placeholder="Enter your name" title="Enter your e-mail" name="to_name" type="text" className="input_field" />

                            </label>
                            <button type="submit" className="submit">vedere il risultato</button>
                        </form>
                    </div>
                    <Toaster richColors />
                </section>
            }   
            {loader && <Loader/>}
        </>
    )
}

export default GetDataClient
