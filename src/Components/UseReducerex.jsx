 

import { useReducer } from "react";

 function UserForm () {
     const  [state, dispatch] = useReducer((state, action) => {
        return {
            ...state,
            ...action,
        }
        
     }, {
        first:'',
        last:""
     })
    
    return(
        <div>
            <input type="text"
            value={state.first}  
            onChange={  (e) =>  dispatch({ first: e.target.value})}
             />
             <input type="text"
            value={state.last}
            onChange={ (e) => dispatch({last : e.target.value})}
             />
             <div>
                first : {state.first} <br />
                last : {state.last}

             </div>
             
        </div>
    )
     
}

const Namelist = () => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "SET_NAME":
        return { ...state, name: action.payload };
       case "ADD_NAME": 
        return { ...state, names: [...state.names, state.name], name: ""}   
      default:
        return state; // Return the current state if the action type is not recognized
    }
  }, {
    names: [], // If you intend to use this in the future
    name: "", // Initial name state
  });

  return (
    <div>
      <div>
           {
            state.names.map((name, index) => (
                <div key={index}>{name}</div>
            ))
           }
      </div>
      <input 
        type="text"
        value={state.name}
        onChange={e => dispatch({ type: "SET_NAME", payload: e.target.value })}
      />
      <div>
        <button 
        onClick={ () => dispatch( { type: "ADD_NAME"})}
        
        
        >Add  Name </button>
      </div>
    </div>
  );
}


function UseReducerex () {

    return (
        <div>
            <Namelist />
            <UserForm />
        </div>
    )
}
export default UseReducerex;
