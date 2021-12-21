import React from 'react';
import brush from './pictures/pencil.png'
import eraser from './pictures/eraser.png'
import bucket from './pictures/bucket.png'

import './Header.css';

function Tools({handleUtensil}) {

    return (
        <div style={{backgroundColor:'lightgrey', padding:'5px', width:'140px', textAlign:"center"}}>
            <button style={{width:"33px"}} name="brush" className="tool-icon" onClick={event=>handleUtensil("brush", "tool")}><img src={brush} style={{width:"12px"}} alt="brush"/></button>
            <button style={{width:"33px"}} name="bucket" className="tool-icon" onClick={event=>handleUtensil("bucket", "tool")}><img src={bucket} style={{width:"12px"}} alt="bucket"/></button>
            <button style={{width:"33px"}} name="eraser" className="tool-icon" onClick={event=>handleUtensil("eraser", "tool")}><img src={eraser} style={{width:"12px"}} alt="eraser"/></button>
        </div>
    );
}

export default Tools;
