import { create } from 'zustand'
import { type Question } from '../types'
import { persist } from 'zustand/middleware'
import { getAllquestions } from '../services/getQuestionsAndData'

interface State {
    questions: Question[]
    currentQuestion: number
    fetchQuestions: () => Promise<void>
    selectAnswer: (questionId: number, answerIndex: number) => void
    goNextQuestion: () => void
    goPreviusQuestion: () => void
    selectQuestion: (selectedQuestion: number) => void
    reset: () => void
}

export const UseQuestionsStore = create<State>()(persist((set, get) => {
    return {
        questions: [],
        recomendacion: null,
        threeAnswersUser: null,
        currentQuestion: 0,
        fetchQuestions: async () => {
            const allQuestions = await getAllquestions()
            set({ questions: allQuestions })
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
            set({ questions: newQuestions })
        },
        goNextQuestion: () => {
            const { currentQuestion, questions } = get()
            const nextQuestion = currentQuestion + 1
            if (nextQuestion < questions.length) {
                set({ currentQuestion: nextQuestion })
            }
        },
        goPreviusQuestion: () => {
            const { currentQuestion } = get()
            const previusQuestion = currentQuestion - 1
            if (currentQuestion >= 0) {
                set({ currentQuestion: previusQuestion })
            }
        },
        selectQuestion: (selectedQuestion) => {
            set({ currentQuestion: selectedQuestion })
        },
        reset: () => {
            set({ currentQuestion: 0, questions: []})
        }
    }
}, {
    name: 'test'
}))
