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
  const { unanswered }  = useQuestionData()
  const firstQuestion = UseQuestionsStore(state => state.firstQuestion)
  const email = UseRecomendacionesStore(state=> state.emailUser)
  
    
  return (
    <>
      <main>

        <section className='section_test'>
          {questions.length === 0 && !firstQuestion && <Start />}
          {firstQuestion && questions.length == 0 && <FirstQuestion/>} 
          {( unanswered > 0 && questions.length > 0 ) && <Test /> } 
          { unanswered === 0 &&  questions.length > 0 && !email  && <GetDataClient/>}
          {( unanswered === 0  && email)  && <MostrarResultados/>}
        </section>
      </main>
    </>
  )
}


export default App