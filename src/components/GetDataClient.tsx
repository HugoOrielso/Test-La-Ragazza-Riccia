import { useRef, useState } from "react"
import '/public/styles/dataClient.css'
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
                            <h1>¡Grazie!</h1>
                            <h3>Tra poco vedrai i risultati del tuo test</h3>
                        </div>
                        <div className="sub_header">
                            <p style={{margin:0}}>Ricevi il risultato del tuo test e un codice sconto del 10% </p>
                            <p style={{margin:0}}>Scrivici qui sotto la tua email</p>
                        </div>
                    </div>
                    <div className="popup">
                        <form className="form" onSubmit={handleSubmit} ref={form}>

                            <label htmlFor="email" style={{width:"100%"}}>
                                <input id="email" onChange={(e)=> setDataEmail(e.target.value)} placeholder="Email" title="Email" name="user_email" type="email" autoComplete="true" className="input_field" required/>
                            </label>
                            <label htmlFor="name"  style={{width:"100%"}}>
                                <input autoComplete="true" id="name" onChange={(e)=> setDataName(e.target.value)} placeholder="Nome" title="Nome" name="to_name" type="text" className="input_field" required/>

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