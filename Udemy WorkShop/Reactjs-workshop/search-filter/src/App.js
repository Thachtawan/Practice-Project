import { useState, useEffect } from 'react'
import './App.css';


function App() {

  const [country, setCountry] = useState([])
  const [word, setWord] = useState("")
  const dataFilter = ["name", "region"]


  useEffect(() => {
    fetch('https://restcountries.com/v2/all')
      .then(res => res.json())
      .then(data => {
        setCountry(data)
      })
  }, [])

  const searchCountry = (country) => {
    return country.filter((item) => {
      // eslint-disable-next-line
      return dataFilter.some((filter) => {
        if(item !== null && item[filter] !== undefined) {
          return item[filter].toString().toLowerCase().indexOf(word.toLowerCase()) > -1
        }
      })
    })
  }

  const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

  return (
    <div className="container">
      <div className="search-container">
        <label htmlFor="search-form">
          <input
            type="text"
            className="search-input"
            placeholder="Name the Country, Region or Capital..."
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />
        </label>
      </div>
      <ul className="row">
        {
          searchCountry(country).map((item, index) => {
          // country.map((item, index) => {
            return (
              <li key={index} className="card">
                <div className="card-title">
                  <img src={item.flag} alt={item.name} />
                </div>
                <div className="card-body">
                  <div className="card-description">
                    <h2>{item.name}</h2>
                    <ul className="card-list">
                      <li>Population: <span>{formatNumber(item.population)}</span></li>
                      <li>Region: <span>{item.region}</span></li>
                      <li>Capital: <span>{item.capital}</span></li>
                    </ul>
                  </div>
                </div>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default App;
