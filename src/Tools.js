import React from 'react';

import './Header.css';

function Tools({handleUtensil}) {
    return (
        <div style={{backgroundColor:'lightgrey', padding:'5px', width:'120px', textAlign:"center"}}>
            <button style={{width:"33px"}} name="brush" className="tool-icon" onClick={event=>handleUtensil(event.target.name, "tool")}><img src="https://cdn-icons-png.flaticon.com/512/588/588395.png" style={{width:"12px"}} /></button>
            <button style={{width:"33px"}} name="bucket" className="tool-icon" onClick={event=>handleUtensil(event.target.name, "tool")}><img src="https://cdn-icons.flaticon.com/png/512/1959/premium/1959697.png?token=exp=1639883976~hmac=cc3120a00ea2099bb8afca4efa0ebf98" style={{width:"12px"}} /></button>
            <button style={{width:"33px"}} name="eraser" className="tool-icon" onClick={event=>handleUtensil(event.target.name, "tool")}><img src="https://cdn-icons.flaticon.com/png/512/2708/premium/2708410.png?token=exp=1639883886~hmac=38d0936af645575549708ebedd7b3fc4" style={{width:"12px"}} /></button>
        </div>
    );
}

export default Tools;
