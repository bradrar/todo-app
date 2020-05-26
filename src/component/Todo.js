import React, {useState} from 'react'

export default function Todo() {
    const [list, setList] = useState([]);
    const [item, setItem] = useState("");
    const [finishedItem, setFinishedItem] = useState("");
   
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
        <div>
            <p> What needs to be done? </p>
                <form onSubmit={addTodo}>
                <input type="text" onChange={handleChange} value={item}/>
                <button>Add #{list.length + 1}</button>
                </form>
         
            <div> {list.map((val, id) =>
            <div key={id}>
                    <li > {val} </li> <button onClick={() => handleFinished(val)}> finished </button>
            </div>
                
                )} 
            </div>
        </div>
    )
}
