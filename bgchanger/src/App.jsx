import { useState } from "react"

  
function App(){
  const [color, setcolor] = useState("olive")

  return (
    <div className='w-screen h-screen' style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
          <button onClick={() => setcolor("red")} className="outline-none px-4 shadow-lg" style={{backgroundColor: "red"}}>red</button>
          <button onClick={() => setcolor("green")} className="outline-none px-4 shadow-lg" style={{backgroundColor: "green"}}>green</button>
          <button onClick={() => setcolor("purple")} className="outline-none px-4 shadow-lg" style={{backgroundColor: "purple"}}>purple</button>
          <button onClick={() => setcolor("brown")} className="outline-none px-4 shadow-lg" style={{backgroundColor: "brown"}}>brown</button>
          <button onClick={() => setcolor("lavender")} className="outline-none px-4 shadow-lg" style={{backgroundColor: "lavender", color: "black"}}>lavender</button>
          <button onClick={() => setcolor("blue")} className="outline-none px-4 shadow-lg" style={{backgroundColor: "blue"}}>blue</button>
        </div>
      </div>
    </div>    
  )
}

export default App
