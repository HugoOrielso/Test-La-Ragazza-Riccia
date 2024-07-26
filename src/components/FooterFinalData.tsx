import { UseQuestionsStore } from '../store/questions'
import { UseRecomendacionesStore } from '../store/recomendaciones'

export const FooterFinalData = () => {
  const resetQuestions =  UseQuestionsStore(state => state.reset)
  const resetRecomendations = UseRecomendacionesStore(state => state.reset)
  function handleReset(){
    resetQuestions()
    resetRecomendations()
  }

  return (
    <div className='container-btn-repetir'>
      <button className="button" onClick={handleReset}>
        <svg className="svg-icon" fill="none" height="25" viewBox="0 0 20 20" width="25" xmlns="http://www.w3.org/2000/svg"><g stroke="#ff342b" strokeLinecap="round" strokeWidth="1.5"><path d="m3.33337 10.8333c0 3.6819 2.98477 6.6667 6.66663 6.6667 3.682 0 6.6667-2.9848 6.6667-6.6667 0-3.68188-2.9847-6.66664-6.6667-6.66664-1.29938 0-2.51191.37174-3.5371 1.01468"></path><path d="m7.69867 1.58163-1.44987 3.28435c-.18587.42104.00478.91303.42582 1.0989l3.28438 1.44986"></path></g></svg>
        <span className="lable">Repetir</span>
      </button>
    </div>
  )
}

export default FooterFinalData