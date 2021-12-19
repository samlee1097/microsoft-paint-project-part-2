import React from 'react';

function Brush({handleUtensil}) {
    
    return (
        <>
            <select onChange={(event)=>handleUtensil(event.target.value, "weight")} id="brush-detail">
                <option value="3">Thin</option>
                <option value="5">Normal</option>
                <option value="9">Thick</option>
            </select>
        </>
    );
}

export default Brush;
