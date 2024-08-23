import { useState ,useRef} from "react"

function App() {
  let todoVal=useRef()
  let [todo,setTodo]=useState([])
  
  const addTodo=(event)=>{
    event.preventDefault();
    // console.log(todoVal.current.value);
    todo.push(todoVal.current.value)
    setTodo([...todo])
    console.log(todo);
  todoVal.current.value =""   
  }

  const editTodo=(index)=>{
    // console.log('Edit todo =>',index);
    let editedValue=prompt('Enter Updated Todo :')
    todo.splice(index,1,editedValue)
    setTodo([...todo])
  }

  const deleteTodo=(index)=>{
    // console.log('delete todo =>',index);
    todo.splice(index,1)
     setTodo([...todo])    
  }

  return(
    <div className="mt-5 container">
      <h1 className="text-center">Todo App</h1>
  <form onSubmit={addTodo}>
  <div className="input-group mb-3 mt-3 border border-black border-opacity-25 rounded">
  <input ref={todoVal} required type="text" className="form-control" placeholder="Enter Todo" aria-label="Todo" aria-describedby="basic-addon1"/>
  <span className="input-group-text" id="basic-addon1"><button type="submit" className="btn btn-light">Add</button></span>
 </div>
 </form>
    
    <ul>
{

todo.map((item,index)=>{
    return(
             <div key={index}>
      <div className="d-flex gap-3">
      <li className="fs-4">{item}
      <button className="btn btn-success mx-2 btn-sm" onClick={()=>editTodo(index)}>Edit</button>
      <button className="btn btn-danger btn-sm" onClick={()=>deleteTodo(index)}>Delete</button>
      </li>
      </div>
             </div>
    )
  })}
    </ul>

</div>
)
  
}
export default App