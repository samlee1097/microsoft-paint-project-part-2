import React from 'react';
import ColorCard from './ColorCard'
import './Header.css'

const colorList = ["red", "blue", "green", "yellow", "pink", "black", "white", "brown", "purple", "grey", "orange"];

function ColorContainer({handleUtensil, utensil}) {
    
    const colorGrid = colorList.map((color) => <ColorCard handleUtensil={handleUtensil} key={color} color={color}/>)
    return (
        <>
        <div id="color-grid">
            {colorGrid}
        </div>
        <span>
            <p className="selected-color">Selected Color
                <div className="color-icon" style={{backgroundColor:`${utensil.color}`}}>
                </div>
            </p>
        </span>
        </>
    );
}

export default ColorContainer;
