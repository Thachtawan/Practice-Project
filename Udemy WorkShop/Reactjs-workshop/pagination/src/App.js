import './App.css';
import Foods from './components/Foods';
import { useEffect, useState } from 'react'
import MenuData from './data/MenuData';

function App() {
  //State section
  const [foodData, setFoodData] = useState(MenuData)
  const [dataInPage, setDataInPage] = useState([])
  const [page, setPage] = useState(0)
  // End State section

  //Function section
  const pagination = () => {
    const menuInPage = 4 //menu per page
    const pages = Math.ceil(MenuData.length / menuInPage)
    console.log(`Amount of page: ${pages}`)
    const newFood = Array.from({length:pages}, (data, index) => {
      const start = index * menuInPage
      return MenuData.slice(start, start+menuInPage)
    })
    return newFood
  }

  const handlePage = (index) => {
    setPage(index)
  }
  //End Function section

  //UseEffect section
  useEffect(() => {
    const paginate = pagination()
    setDataInPage(paginate)
    setFoodData(paginate[page])
  }, [page])
  //End USeEffect section

  return (
    <div className="App">
      <h1>FoodCard Pagination</h1>
      <div className='container'>
        {
          foodData.map((item, index) => {
            return <Foods key={index} {...item}/>
          })
        }
      </div>
      <div className='pagination-container'>
        {
          dataInPage.map((item, index) => {
            return (
              <button
                className={`page-btn ${index === page ? 'active-btn' : null}`}
                key={index} onClick={() => handlePage(index)}
              >
                {index+1}
              </button>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
