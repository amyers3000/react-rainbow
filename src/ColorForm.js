import React, { useState } from "react";


function ColorForm({ addColor }) {
    let [input, setInput] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault ()
        addColor(input)
        setInput('')
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