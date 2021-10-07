import React from 'react';
import Tools from './Tools';
import ColorContainer from './ColorContainer';
import Brush from './Brush';
import './Header.css'

function Header({handleUtensil}) {

    return (
        <>
            <div id="top-page">
                    <span>🎨 untitled - Paint</span>
                    <span>🔴 🟠 🟢</span>    
            </div>
            <div id="header">
                <Tools handleUtensil={handleUtensil}/>
                <Brush handleUtensil={handleUtensil}/>
                <ColorContainer handleUtensil={handleUtensil}/>
            </div>
        </>
    );
}

export default Header;