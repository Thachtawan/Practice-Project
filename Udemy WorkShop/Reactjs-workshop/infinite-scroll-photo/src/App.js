import './App.css';
import Photo from './components/Photo';
import { useState, useEffect } from 'react'

function App() {

  const apiKey = `dVAv2OPstHLryietrmn3Zm-RpXia19zmbXoIeREBJ4M`
  
  const [photo, setPhoto] = useState([])
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)

  const fetchImage = async () => {
    setIsLoading(true)
    try {
      const apiUrl = `https://api.unsplash.com/photos/?client_id=${apiKey}&page=${page}`
      const response = await fetch(apiUrl)
      const data = await response.json()
      setPhoto((oldData) => {
        return [...oldData, ...data]
      })
    } catch (error) {
      console.log(error)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    fetchImage()
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    const event = window.addEventListener('scroll', () => {
      if (window.innerHeight+window.scrollY > document.body.offsetHeight-500 && !isLoading) {
        setPage((oldPage) => {
          return oldPage + 1
        })
      }
    })
    return () => window.removeEventListener('scroll', event)
    // eslint-disable-next-line
  }, [])

  return (
    <main className="App">
      <h1>Infinite Scroll Photo | Unsplash API</h1>
      <section className='photos'>
        <div className='display-photo'>
          {
            photo.map((item, index) => {
              return (
                <Photo key={index} {...item}/>
              )
            })
          }
        </div>
      </section>
    </main>
  );
}

export default App;
