import React, { useState } from "react";
import {FaPlus} from 'react-icons/fa';

function TodoForm(props){
    const [text, setText] = useState("")

    function handleChange(event){
        let inputText = event.target.value;
        setText(inputText);
    };

    function addItem(event){
        event.preventDefault();
        if(text){
            // setItems([...items, text]);
            props.onAddItem(text);
            setText("");
        }
        
    };

    return(
        <>
            <form>
                <input onChange={handleChange} type="text" className="inputField" value={text}></input>
                <button className="addBtn" onClick={addItem}><FaPlus/></button>
            </form>
        </>
    )

}

export default TodoForm;