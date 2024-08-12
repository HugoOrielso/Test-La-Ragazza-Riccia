import { useRef, useState } from "react"
import '/public/styles/dataClient.css'
import { EmailIcon } from "../icons"
import { toast, Toaster } from 'sonner'
import { UseRecomendacionesStore } from "../store/recomendaciones"
import { orderAnswersUser } from "../hooks/useQuestionData"
import Loader from "./Loader"


const GetDataClient = () => {
    const form = useRef<HTMLFormElement>(null);
    const threeAnswersUser: Record<number,number> | any = orderAnswersUser()
    const patternsfromStore = UseRecomendacionesStore(state=> state.fetchPatterns)
    const setAnswersUser = UseRecomendacionesStore(state => state.setThreeAnswersUser)
    const changeToTrue = UseRecomendacionesStore(state => state.changeSendRecomendacionToTrue)
    const setDataUSer = UseRecomendacionesStore(state => state.setDataUser)
    const [dataEmail,setDataEmail] = useState<string>()
    const [dataName, setDataName] = useState<string>()
    const [loader,setLoader] = useState <boolean> (false)
    
    const getData = () =>{
        patternsfromStore()
    }
    

    const handleSubmit =  (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setAnswersUser(threeAnswersUser)
        if (!dataEmail || !dataName) {
            toast.error("Non ci sono dati da inviare.")
            return
        }

        setLoader(true)
        
        try {
            getData()
            if (form.current) {
                setTimeout(()=>{
                setLoader(false)
                changeToTrue()
                setDataUSer(dataName,dataEmail)
            },2500)
        } 
        } catch (error: any) {
            if(error.status === 422){
                toast.error('Invia un formato email corretto.')
                return
            }
            toast.error("Si è verificato un errore durante l'invio delle informazioni, riprova.")
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
                                <input id="email" onChange={(e)=> setDataEmail(e.target.value)} placeholder="Enter your e-mail" title="Enter your e-mail" name="user_email" type="email" autoComplete="true" className="input_field" required/>
                            </label>
                            <label htmlFor="name"  style={{width:"100%"}}>
                                <input autoComplete="true" id="name" onChange={(e)=> setDataName(e.target.value)} placeholder="Enter your name" title="Enter your e-mail" name="to_name" type="text" className="input_field" required/>

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