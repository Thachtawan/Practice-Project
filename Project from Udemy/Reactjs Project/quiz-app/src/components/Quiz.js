import QuestionsData from "../data/QuestionsData"
import { useEffect, useState, useContext } from "react"
import { DataContext } from "../App"


const Quiz = () => {
    const [current, setCurrent] = useState(0)
    const [selectChoice, setSelectChoice] = useState('')
    const {score, setScore, setAppState} = useContext(DataContext)

    // use to check if there's an alter with the selectChoice 
    useEffect(() => {
        checkAnswer()
        // eslint-disable-next-line
    }, [selectChoice])

    const checkAnswer = () => {
        if (selectChoice !== "") {
            if (selectChoice === QuestionsData[current].answer) {
                setScore(score+1)
                console.log("Right Answer!!")
                nextQuestion()
            } else {
                console.log("Wrong Answer!!!")
                nextQuestion()
            }
        }
    }

    const nextQuestion = () => {
        if (current === QuestionsData.length-1) {
            setAppState('score')
        }
        setCurrent(current+1)
        setSelectChoice('')
    }

    return (
        <div className="quiz">
            <h1>{QuestionsData[current].question}</h1>
            <div className="choices">
                <button onClick={() => setSelectChoice('A')}>{QuestionsData[current].A}</button>
                <button onClick={() => setSelectChoice('B')}>{QuestionsData[current].B}</button>
                <button onClick={() => setSelectChoice('C')}>{QuestionsData[current].C}</button>
                <button onClick={() => setSelectChoice('D')}>{QuestionsData[current].D}</button>
            </div>
            <p>{`${current+1} / ${QuestionsData.length}`}</p>
        </div>
    )
}

export default Quiz