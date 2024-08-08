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
        questionsAndAnswersUser = questionsAndAnswersUser.slice(5,8)
    }
    return  questionsAndAnswersUser 
}



export const consejos = () => {
    const userSelected = UseQuestionsStore(state=> state.firstElectionUser)
    if(userSelected === 'trattamento'){
        let questionsAndAnswersUser = UseQuestionsStore(state => state.questions).slice(7,10)
        let validation = questionsAndAnswersUser.some((item)=>{
            return item.userSelectedAnswer === 0
        })
        if(validation === true){
            return 'trattamento'
        }
    }
    if(userSelected === 'styling'){
        return 'styling'
    }
    return null
}

