import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

let [counter,setcounter] = useState(15)


const addvalue = () => {
  // console.log("value added", counter)
  counter = counter + 1
  setcounter(counter)
}
 
const Removevalue = () => {
  if (counter > 0) {
    counter = counter - 1
    setcounter(counter)
  }
  else {
    counter = "value cant be negative"
    setcounter(counter)
    counter = 0
  }
 
}
  return (
    <>
      <h1>Manav Jaiswal</h1>
      <h2>counter value: {counter}</h2>

      <button onClick={addvalue}>add value</button>
      <br /><br />
      <button onClick={Removevalue}>remove value</button>
    </>
  )
}

export default App
