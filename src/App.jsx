import { useState } from "react"

function App() {
  const[num,setNum]=useState(0)

  const addCounter=()=>{ setNum(num+1)}
  const lessCounter=()=>{ setNum(num-1)}

  return(
    <>
     <h1>hello world {num}</h1>
     <h1>{num}</h1>
     <button onClick={addCounter}>add {num}</button>
     <button onClick={lessCounter} >less{num}</button>
    </>
  )
  
}
export default App