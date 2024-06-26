

import { useState } from 'react'
import './App.css'
import UseReducerex from './Components/UseReducerex';
import UserForm from './Components/UseReducerex';


function NameList() {
  const [list,setList] = useState(["Jack","Jill","John"]);
  const [name,setName] = useState("")


  const addName = () => {
    
    setList([name,...list])
    setName('')

  }

  return (
       <div>
          <ul>
              {list.map((name) => (
                   <li key={name}>{name}</li>
              ))}
          </ul>
          <input type='text' value={name} onChange={(e) => setName(e.target.value)}  />
          <button onClick={addName}> Add  Name </button>
       </div>
  )


    
}

function Counter() {
  const [count,setCount] = useState(10)
  
  function addone() {
    setCount(count + 1)
  }
  return (
    <>
    <button onClick={addone}>count : {count}</button>
      
    </>
  )
}


 function App () {
   return (
    <>
     {/* <Counter />
     <NameList /> */}
     <UseReducerex />    
     
      </>


   )
 }
export default App
