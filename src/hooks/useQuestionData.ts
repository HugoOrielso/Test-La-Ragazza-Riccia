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
    return questionsAndAnswersUser
}


// "productos": [
//     {
//       "nombre": "Shampoo 250 ml",
//       "urlImage": "https://i0.wp.com/laragazzariccia.com/wp-content/uploads/2023/05/SHAMPOO-250-ML-rizos-felicess.jpg?fit=1000%2C1000&ssl=1",
//       "precio": 24.00,
//       "webSite": "https://laragazzariccia.com/prodotto/shampoo-250ml/"
//     },
//     {
//       "nombre": "Conditioner 250 ml",
//       "urlImage": "https://i0.wp.com/laragazzariccia.com/wp-content/uploads/2023/05/Ragazza-riccia-prodotti-conditioner.jpg?fit=1000%2C1000&ssl=1",
//       "precio": 24.90,
//       "webSite": "https://laragazzariccia.com/prodotto/balsamo-e-leave-in/"
//     },
//     {
//       "nombre": "Crema 3 en 1 250 ml",
//       "urlImage": "https://i0.wp.com/laragazzariccia.com/wp-content/uploads/2023/05/crema-3-in-1-250ml.jpg?fit=1000%2C1000&ssl=1",
//       "precio": 25,
//       "webSite": "https://laragazzariccia.com/prodotto/crema-3-in-1/"
//     },
//     {
//       "nombre": "Gel modelante 250 ml",
//       "urlImage": "https://i0.wp.com/laragazzariccia.com/wp-content/uploads/2023/05/GEL-MODELLANTE-250-ML.jpg?fit=1000%2C1000&ssl=1",
//       "precio": 24.90,
//       "webSite": "https://laragazzariccia.com/prodotto/gel-modellante-250-ml/"
//     }
//   ]