import React, { useState } from "react";


function ColorForm({ addColor }) {
    let [input, setInput] = useState('')

    const isColor = (strColor) => {
        var s = new Option().style;
        s.color = strColor;
        return s.color == strColor 
    }

    const handleSubmit = (e) => {
        e.preventDefault ()
        if(isColor(input)){
            addColor(input)
            setInput('')
        } else {
            setInput('')
        }
        
    }
    const clear = () => {
        setInput('')
    }
    
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' value = {input}
                onChange={(e) => setInput(e.target.value)}/>
                <button type="submit">Submit!</button>
            </form>
            <button onClick={clear}> Clear</button>
        </div>
    )
}

export default ColorForm