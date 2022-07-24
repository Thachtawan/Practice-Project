import './App.css';
import {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import List from './components/List';
import Alert from './components/Alert';

function App() {
  // State Area
  const [todo, setTodo] = useState("")
  const [list, setList] = useState([])
  const [alert, setAlert] = useState({show: false, msg: '', type: ''})
  const [checkEditItem, setCheckEditItem] = useState(false)
  const [editId, setEditId] = useState(null)


  // Submit Button Function
  const submitData = (e) => {
    e.preventDefault()
    if (!todo) {
      setAlert({show: true, msg: 'Please fill the data before add to the list.', type: 'error'})
    } else if (checkEditItem && todo) {
      // check if checkEditItem is true and todo is not blank
      setList(list.map((item) => {
          if (item.id === editId) {
            return {...item, title: todo}
          }
          return item
        })
      )
      setCheckEditItem(false)
      setTodo('')
      setAlert({show: true, msg: 'Edited Todo successful!', type: 'success'})
      setEditId(null)
    } else {
      const newItem = {
        id: uuidv4(),
        title: todo
      }
      console.log(newItem)
      setList([...list, newItem])
      setTodo('')
      setAlert({show: true, msg: 'Add Todo successful!', type: 'success'})
    }
  }
  // End submit Button

  // Edit and Delete button
  const removeItem = (id) => {
    setList(list.filter( (item) => item.id !== id ))
    setAlert({show: true, msg: 'Delete item from the list!', type: 'error'})
  }

  const editItem = (id) => {
    setCheckEditItem(true)
    setEditId(id)
    const searchItem = list.find( (item) => item.id === id )
    setTodo(searchItem.title)
  }
  // End Edit and Delete button

  return (
    <section className="container">
      <h1>"TodoList" App</h1>
      {alert.show && <Alert {...alert} setAlert={setAlert} list={list}/>}
      <form className="form-group" onSubmit={submitData}>
        <div className="form-control">
          <input
            type="text"
            className="text-input"
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
          />
          <button type="submit" className={checkEditItem ? "submit-button edit" : "submit-button"} >
            {checkEditItem ? "Update item": "Add new Todo"}
          </button>
        </div>
      </form>
      <section className='list-container'>
        {
          list.map((data, index) => {
            return <List key={index} {...data} removeItem={removeItem} editItem={editItem}/>
          })
        }
      </section>
    </section>
  );
}

export default App;
