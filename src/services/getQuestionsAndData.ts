import { Question, Response } from "../types"

export async function getAllquestions() {
    const res = await fetch(`${import.meta.env.NODE_ENV == 'development' ? 'http://localhost:5173/test.json' : "https://test-la-ragazza-riccia.vercel.app/test.json" }`)
    const { responses } = await res.json()
    const questions = responses
    return questions
}

export async function getPatterns() {
    const res = await fetch(`${import.meta.env.NODE_ENV == 'development' ? 'http://localhost:5173/pattern.json' : "https://test-la-ragazza-riccia.vercel.app/pattern.json" }`)
    const { responses } = await res.json()
    const pattern = responses
    return pattern
}


export const findMatchingRecommendation = (threeUserMainQuestios: Record<number, number>, patternsResponses: Response[]) => {
    if(threeUserMainQuestios && patternsResponses){
        const productMatch = patternsResponses.find(elem=>{
            return (JSON.stringify(elem.pattern) === JSON.stringify(threeUserMainQuestios))
        })
        if(productMatch){
            return productMatch
        }
    }
};


export const orderDataAndSetData = (threeMainQuestionsUser: Question[])=>{
    const userAnswers: Record<string, number> = threeMainQuestionsUser.reduce((acc, { id, userSelectedAnswer }) => {
        if (userSelectedAnswer !== undefined) {
            acc[id] = userSelectedAnswer;
        }
        return acc;
    }, {} as Record<number,number>);
    return userAnswers
}


