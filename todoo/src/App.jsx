import { useState } from 'react'
import {Todoprovider} from './Context'
import { useEffect } from 'react'
import Todoform from './components/Todoform'
import Todoitem from './components/Todoitem'


function App() {
  const [todos , settodos] = useState([])

  const addtodo = (todo) => [
    settodos((prev) => [{id: Date.now(), ...todo}, ...prev] )
  ]

  const updaettodo = (id,todo) => {
    settodos((prev) => prev.map((prevtodo) => (prevtodo.id === id ? todo : prevtodo )))
  }

  const deletetodo = (id) => {
    settodos((prev) => prev.filter((todo) => todo.id != id))
  }

  const togglecomplete = (id) => {
    settodos((prev) => prev.map((prevtodo) => prevtodo === id ?{...prevtodo, checked: !prevtodo.checked}: prevtodo))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      settodos(todos)
    }
  }, [])

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  },[todos])

  return (
    
    <Todoprovider value={{addtodo ,deletetodo, todos,togglecomplete, updaettodo}}>

      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <Todoform/> 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {todos.map((todo) => (
                          <div key={todo.id} className='w-full'>
                            <Todoitem todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </Todoprovider>
  )
}

export default App
