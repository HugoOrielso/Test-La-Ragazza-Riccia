import { useEffect, useState } from "react"
import { UseQuestionsStore } from "../store/questions"
import { type Question as QuestionType} from "../types"
import { FooterQuestions } from "./FooterQuestions"
import '/public/styles/test.css'
import { IndicadorQuestion } from "../Arrows"
import ResetTest from "./ResetTest"

const getBackGroundColor = (info: QuestionType, index: number, ) =>{
    const { userSelectedAnswer } = info
    if(userSelectedAnswer == null) return 
    if(index == userSelectedAnswer) return '#41548c'
}

const Question = ({ info } : {info: QuestionType }) => {
    let witdhGreen: number
    const selectAnswer = UseQuestionsStore(state => state.selectAnswer)
    const currentQuestion = UseQuestionsStore(state => state.currentQuestion)
    const goNextQuestion = UseQuestionsStore(state => state.goNextQuestion)
    const [fadeClass, setFadeClass] = useState('fade-in');
    const handleClick = ( answerIndex:number ) =>  () => {
        selectAnswer(info.id, answerIndex)
        goNextQuestion()
    }
    useEffect(() => {
        setFadeClass('');
        const timeoutId = setTimeout(() => {
            setFadeClass('fade-in');
        }, 350);
        return () => clearTimeout(timeoutId);
    }, [currentQuestion]);

    window.addEventListener('resize',()=>{
        witdhGreen = window.innerWidth
    })
    witdhGreen = window.innerWidth
    return (
        <section className={`container_test`}>
            <div className="card_test" style={{minWidth: witdhGreen < 700 ? `${witdhGreen - 50}px`: "650px",  }}>
                <section className="container_info" >
                    <section className={`header_question`}>
                        <div className="question_number">
                            <h5 className={`question ${fadeClass}`}> {info.question} </h5>
                            <IndicadorQuestion />

                        </div>
                        <div style={{overflow: "hidden"}}>
                            {info.explication && <span className={`span_explanation_question ${fadeClass}`}> {info.explication} </span> }                         
                        </div>
                    </section>
                    <section className={`card_container_answers`}>
                        {info.answers.map((answer,i)=>{
                            let borderBottom = info.answers.length == (i + 1) ? 'none': ""
                            return(
                                <button onClick={handleClick(i)} key={i} style={{border: borderBottom, backgroundColor: getBackGroundColor(info,i) }}>
                                    <span className={`span_answer ${fadeClass}`}>{answer}</span>
                                </button>
                            )
                        })}
                    </section>
                </section>
                <FooterQuestions />
            </div>
        </section>
    )
}

export const Test = () => {
    const questions = UseQuestionsStore(state => state.questions)
    const currentQuestion = UseQuestionsStore(state => state.currentQuestion)
    const questionInfo = questions[currentQuestion]
    
    return(
        <>
            <Question info={questionInfo} />
            <ResetTest/>
        </>
    )
}