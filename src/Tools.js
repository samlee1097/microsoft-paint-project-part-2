import React from 'react';
import './Header.css';

function Tools({handleUtensil}) {
    return (
        <div style={{backgroundColor:'lightgrey', padding:'5px', width:'120px', textAlign:"center"}}>
            <button name="brush" className="tool-icon" onClick={event=>handleUtensil(event.target.name, "tool")}>✏️</button>
            <button name="bucket" className="tool-icon" onClick={event=>handleUtensil(event.target.name, "tool")}>🥣</button>
            <button name="eraser" className="tool-icon" onClick={event=>handleUtensil(event.target.name, "tool")}>🧼</button>
        </div>
    );
}

export default Tools;
