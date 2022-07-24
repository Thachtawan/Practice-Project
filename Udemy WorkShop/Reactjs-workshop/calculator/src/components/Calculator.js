import {useState} from 'react'

const Calculator = () => {

    const [inputValue, setInputValue] = useState('0')
    const [inputOper, setInputOper] = useState('')
    const [secondValue, setSecondValue] = useState('')

    const numberInput = (number) => {
        if (inputOper === '') {
            if (inputValue === '0') {
                setInputValue(number)
            } else {
                setInputValue(inputValue + number)
            }
        } else {
            setSecondValue(secondValue + number)
        }
    }

    const calculateNumber = () => {
        if (inputOper === '') {
            return inputValue
        } else if (secondValue === '') {
            if (inputOper === '+') {
                setInputOper('')
                return inputValue
            } else if (inputOper === '-') {
                setInputValue('-' + inputValue)
                setInputOper('')
            } else if (inputOper === '*') {
                setInputValue(inputValue * inputValue)
                setInputOper('')
            }
        } else {
            // eslint-disable-next-line
            setInputValue(eval(inputValue + inputOper + secondValue))
            // eslint-disable-next-line
            console.log(inputValue)
            setSecondValue('')
            setInputOper('')
        }
    }

    const resetValue = () => {
        setInputValue('0')
        setInputOper('')
        setSecondValue('')
    }

    return (
        <div className="calculator">
            <div className="calculator-display">
                <div className='display'>
                    {secondValue !== '' && <h1>{secondValue}</h1>}
                    {secondValue === '' && <h1>{inputValue}</h1>}
                    <h2>{inputOper}</h2>
                </div>
            </div>
            <div className="calculator-button">
                <button className="operator" onClick={() => setInputOper('+')}>+</button>
                <button className="operator" onClick={() => setInputOper('-')}>-</button>
                <button className="operator" onClick={() => setInputOper('*')}>x</button>
                <button className="operator" onClick={() => setInputOper('/')}>÷</button>
                <button onClick={() => numberInput('7')}>7</button>
                <button onClick={() => numberInput('8')}>8</button>
                <button onClick={() => numberInput('9')}>9</button>
                <button onClick={() => numberInput('4')}>4</button>
                <button onClick={() => numberInput('5')}>5</button>
                <button onClick={() => numberInput('6')}>6</button>
                <button onClick={() => numberInput('1')}>1</button>
                <button onClick={() => numberInput('2')}>2</button>
                <button onClick={() => numberInput('3')}>3</button>
                <button onClick={() => numberInput('.')}>.</button>
                <button onClick={() => numberInput('0')}>0</button>
                <button onClick={resetValue}>C</button>
                <button className="equal operator" onClick={calculateNumber}>=</button>
            </div>
        </div>
    )
}

export default Calculator;