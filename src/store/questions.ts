import { create } from 'zustand'
import { type Question } from '../types'
import { persist } from 'zustand/middleware'
import { getAllquestions } from '../components/getQuestions'
interface State {
    questions: Question[]
    currentQuestion: number
    fetchQuestions: () => Promise<void>
    selectAnswer: (questionId: number, answerIndex: number) => void
    goNextQuestion: () => void
    goPreviusQuestion: () => void
    reset: () => void
}

export const UseQuestionsStore = create<State>()(persist(( set, get)=>{
    return{
        questions: [],
        currentQuestion: 0,
        fetchQuestions: async () => {
            const questions = await getAllquestions()
            set({ questions })
        },
        selectAnswer(questionId, answerIndex) {
            const { questions } = get()
            const newQuestions = structuredClone(questions)    
            const questionIndex = newQuestions.findIndex(q => q.id === questionId)
            const questionInfo = newQuestions[questionIndex]
            newQuestions[questionIndex] = {
                ...questionInfo,
                userSelectedAnswer: answerIndex
            }
            set({ questions: newQuestions})
        },
        goNextQuestion: () => {
            const { currentQuestion, questions } = get()
            const nextQuestion = currentQuestion + 1
            if(nextQuestion < questions.length){
                set({ currentQuestion: nextQuestion })
            }
        },
        goPreviusQuestion: () => {
            const { currentQuestion } = get()
            const previusQuestion = currentQuestion - 1
            if(currentQuestion >= 0){
                
                set({ currentQuestion: previusQuestion })
            }
        },
        reset: () =>{
            set({ currentQuestion: 0 , questions: [] })
        }
    }
},{
    name: 'questions', 
}))