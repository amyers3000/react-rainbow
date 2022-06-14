import React from "react";

function ColorBlock({ color }){
    return (
        <div className="colorBlock"
        style={{'backgroundColor': color}}>
            <p>{color}</p>

        </div>
    )
}

export default ColorBlock