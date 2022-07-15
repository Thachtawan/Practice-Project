import { DataContext } from "../App"
import { useContext } from "react"
import QuestionsData from "../data/QuestionsData"

const Score = () => {
    const {score, setScore, setAppState} = useContext(DataContext)

    const restartApp = () => {
        setScore(0)
        setAppState('menu')
    }

    return (
        <div className="score">
            <h1>Total Score:</h1>
            <h2>{`${score} / ${QuestionsData.length}`}</h2>
            <button onClick={restartApp}>Redo the test?</button>
        </div>
    )
}

export default Score