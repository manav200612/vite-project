import { useState, useCallback, useEffect, useRef} from 'react'


function App() {
  const [length, setlenght] = useState(8)
  const [numberall, setnumberall] = useState(false)
  const [character, setcharacter] = useState(false)
  const [pass, setpass] = useState("")


  //useref hook
  const passRef = useRef(null)

  const copyPasswordtoclipboard = useCallback(() => {
    passRef.current?.select();
    window.navigator.clipboard.writeText(pass)
  }, [pass])

  const passgenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberall) str +=  "0123456789"
    if (character) str +=  "!@#$%^&*_?"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
          }

          setpass(pass)

  },
   [length, numberall, character, setpass])

   useEffect(() => {passgenerator()}, [length, numberall, character, passgenerator])

  return (
    <>
      
      <div className='w-full max-w-md mx-auto shadow-md rounded-md p-4 my-8 text-white bg-gray-800'>
      <h1 className='text-center m-2'>PASSWORD GENERATOR</h1>
        <div className='flex shadow-md rounded-md overflow-hidden mb-4'>
          <input type="text" value={pass} className='outline-none w-full py-1 px-3' placeholder='Password' readOnly ref={passRef}/>
          <button className='px-2 bg-gray-700 text-gray-300 align-middle justify-center' onClick={copyPasswordtoclipboard}>copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={8} max={30} value={length} className='cursor-pointer' onChange={(e) => {setlenght(e.target.value)}}/>
            <label>Length:{length}</label>
          </div>

          <div className='flex items-center gap-x-2 mx-5'>
            <input type="checkbox" defaultChecked={numberall} id="numbrtinput" onChange={() => {setnumberall((prev)=> !prev)}} />
            <label>Numbers</label>
          </div>

          <div className='flex items-center gap-x-2'>
            <input type="checkbox" defaultChecked={character} id="numbrtinput" onChange={() => {setcharacter((prev)=> !prev)}} />
            <label>characters</label>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
