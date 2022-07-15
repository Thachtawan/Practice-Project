import { useContext } from "react"
import { DataContext } from "../App"

const Menu = () => {
    // useContext use for call the state that you've sent out
    const {setAppState} = useContext(DataContext)
    return (
        <div className="menu">
            <h1>Show them how good you are with the math!</h1>
            <button onClick={() => setAppState("quiz")}>Start the test!</button>
        </div>
    )
}

export default Menu