import "./Currency.css"

const Currency = (props) => {

    const {currencyChoice, selectCurrency, changeCurrency, amount, onChangeAmount} = props

    return (
        <div className="currency">
            <select value={selectCurrency} onChange={changeCurrency}>
                {
                    currencyChoice.map((cur) => 
                        <option key={cur} value={cur}>{cur}</option>
                    )
                }
            </select>
            <input
                type="number"
                value={amount}
                onChange={onChangeAmount}
            />
        </div>
    )
}

export default Currency;