import logoRiccia from './assets/logo.webp'
import './App.css'
import { Start } from './components/Start'
import { UseQuestionsStore } from './store/questions'
import { Test } from './components/Test'
import { Arrows } from './Arrows'

function App() {
  const questions = UseQuestionsStore(state => state.questions)
  return (
    <>
      <main>
        <header>
          <div className='header_test'>
            <h1 className='main-title'>Test Recomendaciones</h1>
            <img src={logoRiccia} className='logo' alt="Logo la Ragazza Riccia" title='Logo la Ragazza Riccia'/>
          </div>
          {questions.length > 0 && <Arrows /> } 
        </header>
        <section className='section_test'>
          {questions.length === 0 && <Start />}
          {questions.length > 0 && <Test /> } 
        </section>
      </main>
    </>
  )
}

export default App
