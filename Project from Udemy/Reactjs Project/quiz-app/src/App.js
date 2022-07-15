import {useState, createContext} from "react"
import Menu from "./components/Menu";
import Quiz from "./components/Quiz";
import Score from "./components/Score";
import "./App.css"

// createContext() is for create context
// this process was to prepare the state to be send out
export const DataContext = createContext()

function App() {
  const [appState, setAppState] = useState('menu')
  const [score, setScore] = useState(0)

  return (
    // .Provider is to send out the state to be use by other component
    <DataContext.Provider value={{appState, setAppState, score, setScore}}>
      <div className="App">
        <h1>Quick Math Time!</h1>
        {/* This process is like using if and else in each row */}
        {appState === "menu" && <Menu />}
        {appState === "quiz" && <Quiz />}
        {appState === "score" && <Score />}
      </div>
    </DataContext.Provider>
  );
}

export default App;
