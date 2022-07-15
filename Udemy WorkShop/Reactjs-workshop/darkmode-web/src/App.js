import Title from './components/Title';
import Contents from './components/Contents';
import './App.css'
import { createContext, useState } from 'react';

export const ThemeContext = createContext()

function App() {

  const [theme, setTheme] = useState(false)

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <div className="App">
        <Title />
        <Contents />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
