import React, { useState } from "react";


function ColorForm({ addColor }) {
    let [input, setInput] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault ()
        addColor(input)
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text'
                onChange={(e) => setInput(e.target.value)}/>
                <button type="submit">Submit!</button>
            </form>
        </div>
    )
}

export default ColorForm