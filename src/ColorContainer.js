import React, {useState} from 'react';
import ColorCard from './ColorCard'
import brush from './pictures/pencil.png'
import eraser from './pictures/eraser.png'
import bucket from './pictures/bucket.png'
import './Header.css'

const colorList = ["red", "blue", "green", "yellow", "pink", "black", "white", "brown", "purple", "grey", "orange"];

function ColorContainer({handleUtensil, utensil}) {
    
    const colorGrid = colorList.map((color) => <ColorCard handleUtensil={handleUtensil} key={color} color={color}/>)

    return (
        <>
        <div id="color-grid">
            {colorGrid}
        </div>
        <div className='selected-box'>
            <p className="selected-color">Color
                <div style={{backgroundColor:`${utensil.color}`}}>
                </div>
            </p>
            <p className="selected-tool">Tool
                <img src={utensil.tool === "brush" ? brush : utensil.tool === "eraser" ? eraser : bucket} style={{width:"12px", margin:"0 2px"}} alt="brush"/>
            </p>
        </div>
        </>
    );
}

export default ColorContainer;
