import logoRiccia from './assets/logo.webp'
import './App.css'
import { Start } from './components/Start'
import { UseQuestionsStore } from './store/questions'
import { Test } from './components/Test'
import { useQuestionData } from './hooks/useQuestionData'
import GetDataClient from './components/GetDataClient'
import MostrarResultados from './components/MostrarResultados'
import { UseRecomendacionesStore } from './store/recomendaciones'
import { FirstQuestion } from './components/FirstElection'

function App() {
  const questions = UseQuestionsStore(state => state.questions)
  const threeAnswersUser = UseRecomendacionesStore(state => state.threeAnswersUser)
  const { unanswered }  = useQuestionData()
  const firstQuestion = UseQuestionsStore(state => state.firstQuestion)
  
    
  return (
    <>
      <main>
        <header>
          <div className='header_test'>
            <h1 className='main-title'>Test Recomendaciones</h1>
            <img src={logoRiccia} className='main_logo' alt="Logo la Ragazza Riccia" title='Logo la Ragazza Riccia'/>
          </div>
        </header>
        <section className='section_test'>
          {questions.length === 0 && !firstQuestion && <Start />}
          {firstQuestion && questions.length == 0 && <FirstQuestion/>} 
          {( unanswered > 0 && questions.length > 0 ) && <Test /> } 
          { unanswered === 0 &&  questions.length > 0 && !threeAnswersUser  && <GetDataClient/>}
          {( unanswered === 0  && threeAnswersUser)  && <MostrarResultados/>}
        </section>
      </main>
    </>
  )
}


export default App
