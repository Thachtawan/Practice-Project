import { useState } from 'react'
import './App.css';
import Dropdown from './components/Dropdown';
import FoodComponent from './components/FoodComponent';
import MenuData from './data/MenuData';

function App() {

  const [foods, setFoods] = useState(MenuData)

  const changeMenuValue = (e) => {
    console.log(`Change menu value from dropdown. The value is now: ${e.target.value}`)
    const category = e.target.value
    if (category === "all-menu") {
      setFoods(MenuData)
    } else {
      const result = MenuData.filter((item) => {
        return item.menu === category
      })
      setFoods(result)
    }
  }

  return (
    <div className="container">
      <Dropdown changeMenuValue={changeMenuValue}/>
      <div className="food">
        {
          foods.map((item, index) => {
            return <FoodComponent item={item} key={index}/>
          })
        }
      </div>
    </div>
  );
}

export default App;
