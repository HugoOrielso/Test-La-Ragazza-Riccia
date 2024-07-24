import { UseQuestionsStore } from '../store/questions'
import '/public/styles/start.css'

export const Start = ()=>{
    const fetchQuestions = UseQuestionsStore(state =>  state.fetchQuestions)

    const handleClick = () =>{
        fetchQuestions()
    }

    return(
        <button onClick={handleClick} className="button-iniciar">
            ¡Empezar!
        </button>
    )
}