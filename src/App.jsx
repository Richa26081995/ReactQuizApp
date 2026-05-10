
import './App.css'
import './css/Quiz.css'
import QuizComponent from './Components/QuizComponent'
import { QuizProvider } from './GlobalContext/QuizContext'

function App() {
  return (
    <div className="app-shell">
      <QuizProvider>
      <QuizComponent />
      </QuizProvider>
    </div>
  )
}

export default App
