import { create } from 'zustand'
import { PatternAndRecomendation } from '../types'
import { persist } from 'zustand/middleware'
import { findMatchingRecommendation, getPatternsAndSetRecomendation } from '../services/getQuestionsAndData'

interface State {
    rutaUser: string | null
    nameUser: string | null
    emailUser: string | null
    setDataUser: (name: string, email: string) => void
    setRutaUser: (ruta: string) => void
    threeAnswersUser: Record<number,number> | null
    setThreeAnswersUser: (answerUser:Record<number,number>) => void
    reset: () => void
    fetchPatterns: () => Promise<void>
    setRecommendation: (matchRecomendacion: PatternAndRecomendation) => void
    recomendacion: PatternAndRecomendation | null
    sendRecomendation: boolean | null
    changeSendRecomendacionToTrue: () => void
    changeSendRecomendacionToFalse: () => void
    defaultProduct: PatternAndRecomendation | null
}

export const UseRecomendacionesStore = create<State>()(persist((set,get) => {
    return {
        rutaUser: null,
        nameUser: null,
        emailUser: null,
        sendRecomendation: null,
        recomendacion: null,
        defaultProduct: null,
        threeAnswersUser: null,
        setDataUser(name, email) {
            set({nameUser: name, emailUser: email})
        },
        setRutaUser(ruta) {
            set({ rutaUser: ruta })
        },
        changeSendRecomendacionToTrue() {
            set({ sendRecomendation: true })
        },
        changeSendRecomendacionToFalse() {
            set({sendRecomendation:false})
        },
        fetchPatterns: async () => {
            const { rutaUser, threeAnswersUser } = get()
            if(rutaUser && threeAnswersUser){
                const allPatterns: any = await getPatternsAndSetRecomendation(rutaUser)
                let match:PatternAndRecomendation = findMatchingRecommendation(threeAnswersUser,allPatterns.responses)
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
            set({ threeAnswersUser: null, recomendacion: null, sendRecomendation: null, nameUser: null, emailUser: null, rutaUser: null, defaultProduct: null})
        },
        
    }
}, {
    name: 'recomendaciones'
}))