import { create } from 'zustand'
import { ObjectOfRecommendation } from '../types'
import { persist } from 'zustand/middleware'
import { findMatchingRecommendation, getPatternsAndSetRecomendation } from '../services/getQuestionsAndData'

interface State {
    rutaUser: string | null,
    setRutaUser: (ruta: string) => void
    threeAnswersUser: Record<number,number> | null
    setThreeAnswersUser: (answerUser:Record<number,number>) => void
    reset: () => void
    fetchPatterns: () => Promise<void>
    setRecommendation: (matchRecomendacion: ObjectOfRecommendation) => void
    recomendacion: ObjectOfRecommendation | null
    defaultProduct: ObjectOfRecommendation | null
}

export const UseRecomendacionesStore = create<State>()(persist((set,get) => {
    return {
        rutaUser: null,
        recomendacion: null,
        defaultProduct: null,
        threeAnswersUser: null,
        setRutaUser(ruta) {
            set({ rutaUser: ruta })
        },
        fetchPatterns: async () => {
            const { rutaUser, threeAnswersUser } = get()
            if(rutaUser && threeAnswersUser){
                const allPatterns: any = await getPatternsAndSetRecomendation(rutaUser)
                let match:ObjectOfRecommendation = findMatchingRecommendation(threeAnswersUser,allPatterns.responses)
                set({ recomendacion: match, defaultProduct: allPatterns.defaultProduct })
            }
        },
        setRecommendation(matchRecomendacion) {
            set({ recomendacion: matchRecomendacion })
        },
        setThreeAnswersUser(answerUser) {
            set({ threeAnswersUser: answerUser })
        },
        reset: () => {
            set({ threeAnswersUser: null, recomendacion: null })
        },
        
    }
}, {
    name: 'recomendaciones'
}))
