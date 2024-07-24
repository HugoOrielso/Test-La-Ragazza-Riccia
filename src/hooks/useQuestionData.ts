import { UseQuestionsStore } from "../store/questions"

export const useQuestionData = () =>{
    const question = UseQuestionsStore(state => state.questions)
    let unanswered = 0

    question.forEach(question => {
        if(question.userSelectedAnswer == null) unanswered++
    })

    return { unanswered }
}