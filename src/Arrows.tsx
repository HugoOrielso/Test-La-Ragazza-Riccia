import { UseQuestionsStore } from "./store/questions"

export const IndicadorQuestion = () =>{
    const questions = UseQuestionsStore(state => state.questions)
    const currentQuestion = UseQuestionsStore(state => state.currentQuestion)
    return(
        <>
            <section className="indicadores">
                <p>{currentQuestion + 1}</p> 
                <p>/</p>
                <p>{questions.length}</p>
            </section>
        </>
    )
}


export const ArrowLeft = ({currentQuestion}: {currentQuestion: number} ) =>{
    const goPrevius = UseQuestionsStore(state => state.goPreviusQuestion)
    
    return(
        <button className="button_arrow" onClick={goPrevius} disabled={currentQuestion === 0}>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="arrow-left" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"/>
            </svg>
        </button>
    )
}


export const ArrowRight = ({currentQuestion}: {currentQuestion: number}) =>{
    const questions = UseQuestionsStore(state => state.questions)
    const goNext = UseQuestionsStore(state => state.goNextQuestion)
    return(
        <button className="button_arrow" onClick={goNext} disabled={currentQuestion > questions.length - 1}>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="arrow-right" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
            </svg>
        </button>
    )
}

