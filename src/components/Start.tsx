import { UseQuestionsStore } from '../store/questions'
import '/public/styles/start.css'

export const Start = ()=>{
    const fetchQuestion = UseQuestionsStore(state =>  state.fetchFirstQuestion)

    const handleClick = () =>{
        fetchQuestion()
    }

    return(
        <button onClick={handleClick} className="button-iniciar">
            ¡Empezar!
        </button>
    )
}