import React, {useState} from 'react'

export default function Todo() {
    const [list, setList] = useState([]);
    const [item, setItem] = useState("");
   
    function addTodo(e) {
        e.preventDefault();
        setList(list.concat(item))
        // I used concat instead of push because .push returns length of array, This is due too immutability, so I treated the array as if it were immutable
        setItem("")
    }

    function handleChange(e) {
        e.preventDefault()
        setItem(e.target.value)
    }

    function handleFinished(props) {
        let newList = [...list] //new copy of list array
        let index = newList.indexOf(props)
        
        if(index !== -1) {
            newList.splice(index, 1)
            setList(newList)
        }
    }

    return (
        <div className="todo-app">
            <h2> What needs to be done? </h2>
                <form onSubmit={addTodo}>
                <input className="input-todo" type="text" onChange={handleChange} value={item}/>
                <button className="btn-shine">
                    <span>Add #{list.length + 1}</span>
                </button>
                </form>

             <hr/>   
            
            <div> {list.map((val, id) =>
            <div key={id}>
                <ul>
                    <li > {val} </li> <button  className="button-li" onClick={() => handleFinished(val)}> finished </button>
                </ul>
                   
            </div>
                
                )} 
            </div>
        </div>
    )
}
