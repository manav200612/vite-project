import { useState } from 'react'
// import './App.css'
import { Themeprovider } from './Context/Theme'
import { useEffect } from 'react'
import Button from './components/Button'
import Card from './components/Card'
// src/index.js or src/App.js
import './index.css';


function App() {
  
  const [thememode, setthememode] = useState("light")

  const lighttheme = () => {
    setthememode("light")
  }

  const darktheme = () => {
    setthememode("dark")
  }

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(thememode)
  }, [thememode])

  return (
    <Themeprovider value={{thememode, lighttheme, darktheme}}>
      <h1 className='p-3 font-bold text-3xl bg-gray-700 dark:bg-red-600 text-center' >THEME TOGGLER</h1>

      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <Button/>
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card/>
          </div>
        </div>
      </div>

    </Themeprovider>
  )
}

export default App
