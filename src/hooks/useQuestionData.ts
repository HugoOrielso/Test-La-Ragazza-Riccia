import { UseQuestionsStore } from "../store/questions"

export const useQuestionData = () =>{
    const question = UseQuestionsStore(state => state.questions)
    let unanswered = 0
    question.forEach(question => {
        if(question.userSelectedAnswer == null) unanswered++
    })
    return { unanswered }
}

export const searchThreeAnswers = () =>{
    const userSelected = UseQuestionsStore(state=> state.firstElectionUser)
    let questionsAndAnswersUser = UseQuestionsStore(state => state.questions)
    
    if(userSelected === 'styling'){
        questionsAndAnswersUser = questionsAndAnswersUser.slice(0,3)
    }
    if(userSelected === 'trattamento'){
        questionsAndAnswersUser = questionsAndAnswersUser.slice(3,6)
    }
    if(userSelected === 'lavaggio'){
        questionsAndAnswersUser = questionsAndAnswersUser.slice(5,9)
    }
    return { questionsAndAnswersUser }
}
