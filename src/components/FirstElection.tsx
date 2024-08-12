import { useEffect, useState } from "react"
import { UseQuestionsStore } from "../store/questions"
import {  type Question as QuestionType} from "../types"
import '/public/styles/test.css'
import { UseRecomendacionesStore } from "../store/recomendaciones"

const FirstQuestionElection = ({ info } : {info: QuestionType }) => {
    const userSelected = UseQuestionsStore(state => state.setFirstElectionUser)
    const ruta = UseRecomendacionesStore(state => state.setRutaUser)
    const fetchAllQuestions = UseQuestionsStore(state => state.fetchQuestions)
    const [fadeClass, setFadeClass] = useState('fade-in');
    const handleClick = ( election: string ) => () => {
        userSelected(election)
        ruta(election)
        fetchAllQuestions()
    }
    useEffect(() => {
        setFadeClass('');
        const timeoutId = setTimeout(() => {
            setFadeClass('fade-in');
        }, 350);
        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <section className={`container_test`}>
            <div className="card_test">
                <section className="container_info" >
                    <section className={`header_question`}>
                        <h5 className={`question ${fadeClass}`}> {info.question} </h5> 
                    </section>
                    <section className={`card_container_answers`}>
                        {info.answers.map((answer,i)=>{
                            let borderBottom = info.answers.length == (i + 1) ? 'none': ""
                            return(
                                <button onClick={handleClick(answer)} key={i} style={{border: borderBottom}}>
                                    <span className={`span_answer ${fadeClass}`}> {answer} </span>
                                </button>
                            )
                        })}
                        
                    </section>
                </section>
            </div>
        </section>
    )
}


export const FirstQuestion = () => {
    const [firstQuestion,setFirstQuestion] = useState<QuestionType>()
    const question = async() =>{
        const urlDominio: string = import.meta.env.VITE_ENV == 'development' ? 'http://localhost:5173/mocks/firstElection.json' : "https://test-la-ragazza-riccia.vercel.app/mocks/firstElection.json" 
        const res = await fetch(urlDominio)
        const { responses } = await res.json()
        setFirstQuestion(responses[0])
    }
    useEffect(()=>{
        question()
    },[])
    return(
        <>
            {firstQuestion && <FirstQuestionElection info={firstQuestion} />}
        </>
    )
}

