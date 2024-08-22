import { UseQuestionsStore } from '../store/questions'
import Header from './Header'
import '/public/styles/start.css'

export const Start = ()=>{
    const fetchQuestion = UseQuestionsStore(state =>  state.fetchFirstQuestion)
    const handleClick = () =>{
        fetchQuestion()
    }

    return(
        <>
            <Header/>
            <button onClick={handleClick} className="button-iniciar">
                ¡Iniziare!
            </button>
        </>
    )
}