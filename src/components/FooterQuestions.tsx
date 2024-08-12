import { ArrowLeft, ArrowRight } from "../Arrows"
import { useQuestionData } from "../hooks/useQuestionData"
import { UseQuestionsStore } from "../store/questions"

import '/public/styles/footerQuestions.css'

export const FooterQuestions = () =>{
    const { unanswered } = useQuestionData()    
    const currentQuestion = UseQuestionsStore(state => state.currentQuestion)
    const widthScreen = window.innerWidth
    const questions = UseQuestionsStore(state => state.questions)
    const selectQuestion = UseQuestionsStore(state => state.selectQuestion)
    let paginationObject 
    if(widthScreen < 500){
        paginationObject = questions.slice(currentQuestion, currentQuestion + 6)
        if(paginationObject.length < 5){
            paginationObject = questions.slice(currentQuestion - 4, currentQuestion + 2)
        }
    }else{
        paginationObject = questions
    }
    
    return(
        <footer className="footerQuestions">
            <strong>
                {` ${unanswered} ❓ senza rispondere`}
            </strong>
            <section className="controls_pagination">
                <ArrowLeft currentQuestion={currentQuestion} />
                <ul className="slider_questions">
                    {
                        paginationObject.map((question,index)=>{
                                return(
                                <li onClick={()=>{selectQuestion(question.id - 1)}} className={`indexQuestion ${currentQuestion === question.id - 1 ? "active" : null}`} key={index}>
                                    {question.id}
                                </li>
                            )
                        })
                    }
                </ul>
                <ArrowRight currentQuestion={currentQuestion} />
            </section>
        </footer>
    )
}