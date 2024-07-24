import { UseQuestionsStore } from "../store/questions"
import { type Question as QuestionType} from "../types"
import { Footer } from "./Footer"
import '/public/styles/test.css'

const getBackGroundColor = (info: QuestionType, index: number) =>{
    const { userSelectedAnswer } = info
    if(userSelectedAnswer == null) return ''

    if(index == userSelectedAnswer) return 'green'
}

const Question = ({ info } : {info: QuestionType }) => {
    const selectAnswer = UseQuestionsStore(state => state.selectAnswer)
    const handleClick = ( answerIndex:number ) => () => {
        selectAnswer(info.id, answerIndex)
    }

    return (
        <section className="container_test">
            <div className="card_test">
                <div className="container_info" >
                    <h5> {info.question} </h5>
                    <div className="card_container_answers">
                        {info.answers.map((answer,i)=>{
                            let borderBottom = info.answers.length == (i + 1) ? 'none': ""
                            return(
                                <button onClick={handleClick(i)} key={i} style={{border: borderBottom, backgroundColor: getBackGroundColor(info,i) }}>
                                    {answer}
                                </button>
                            )
                        })}
                    </div>
                </div>
                <Footer/>
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
        </>
    )
}