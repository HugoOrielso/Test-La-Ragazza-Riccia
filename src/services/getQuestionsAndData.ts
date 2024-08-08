import { Question, Response } from "../types"

export async function getAllquestions(ruta: string) {
    const urlDominio: string = import.meta.env.VITE_ENV == 'development' ? 'http://localhost:5173/mocks/' : "https://test-la-ragazza-riccia.vercel.app/mocks/" 
    let chosedQuestions: string | null = null
    if(ruta.toLocaleLowerCase() === "styling"){
        chosedQuestions = "/Styling/stylingTest.json"
    }
    if(ruta.toLocaleLowerCase() === "trattamento"){
        chosedQuestions = "/Trattamenti/trattamentiTest.json"
    }
    if(ruta.toLocaleLowerCase() === "lavaggio"){
        chosedQuestions = "/Lavaggio/lavaggiTest.json"
    }
    const res = await fetch(urlDominio + chosedQuestions )
    const { responses } = await res.json()
    const questions = responses
    return questions
}

export async function getFirstQuestion() {
    const url: string = import.meta.env.VITE_ENV == 'development' ? 'http://localhost:5173/mocks/firstElection.json' : "https://test-la-ragazza-riccia.vercel.app/mocks/firstElection.json" 
    const res = await fetch(url)
    const { responses } = await res.json()
    const question = responses[0]
    return question
}

export async function getPatternsAndSetRecomendation(userSelected: string) {
    let jsonUrl :string  = ''
    const domainUrl:string = `${import.meta.env.VITE_ENV == 'development' ? 'http://localhost:5173/mocks/' : "https://test-la-ragazza-riccia.vercel.app/mocks/" }`
    
    if(userSelected.toLocaleLowerCase() == "trattamento"){
      jsonUrl = 'Trattamenti/patternTratamenti.json'
    }
    
    if(userSelected.toLocaleLowerCase() == "styling"){
      jsonUrl = 'Styling/patternStyling.json'
    }

    if(userSelected.toLocaleLowerCase() == "lavaggio"){
        jsonUrl = 'Lavaggio/patternLavaggio.json'
      }
    const request = await fetch(domainUrl + jsonUrl)
    const data = await request.json()
    return data
}

export const findMatchingRecommendation = (threeUserMainQuestios: Record<number, number>, patternsResponses: Response[]) => {
    if(threeUserMainQuestios && patternsResponses){
        const productMatch = patternsResponses.find(elem=>{
            return (JSON.stringify(elem.pattern) === JSON.stringify(threeUserMainQuestios))
        })
        if(productMatch){
            return productMatch as any
        }
    }
};

export const orderDataAndSetData = (threeMainQuestionsUser: Question[]) => {
    
    const userAnswers: Record<string, number> = threeMainQuestionsUser.reduce((acc, { id, userSelectedAnswer }) => {
        if (userSelectedAnswer !== undefined) {
            acc[id] = userSelectedAnswer;
        }
        return acc;
    }, {} as Record<string, number>);
    
    return userAnswers;
}



