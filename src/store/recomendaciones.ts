import { create } from 'zustand'
import { Response } from '../types'
import { persist } from 'zustand/middleware'
import { getPatterns } from '../services/getQuestionsAndData'

interface State {
    patterns: Response[]
    threeAnswersUser: Record<number,number> | null
    setThreeAnswersUser: (answerUser:Record<number,number>) => void
    reset: () => void
    fetchPatterns: () => Promise<void>
    recomendacion: Response | null
    setRecommendation: (matchRecomendacion: Response | null) => void
}

export const UseRecomendacionesStore = create<State>()(persist((set) => {
    return {
        patterns: [],
        recomendacion: null,
        threeAnswersUser: null,
        reset: () => {
            set({ threeAnswersUser: null, patterns: [], recomendacion: null })
        },
        fetchPatterns: async () => {
            const allPatterns = await getPatterns()
            set({ patterns: allPatterns })
        },
        setRecommendation(matchRecomendacion) {
            set({ recomendacion: matchRecomendacion })
        },
        setThreeAnswersUser(answerUser) {
            set({ threeAnswersUser: answerUser })
        }
    }
}, {
    name: 'recomendaciones'
}))
