import React, {useState} from 'react';
import Header from './Header';
import Container from './Container'

function App() {
    const [utensil, SetUtensil] = useState({
        tool: "brush",
        weight: 5,
        color: "black"
    })

    function handleUtensil(updateItem, keyHolder){
        const newUtensil={...utensil}
        if(updateItem === "eraser"){
            newUtensil["color"] = "white";
            newUtensil["tool"] = "brush";
            SetUtensil(newUtensil)
        } else {
            newUtensil[keyHolder] = updateItem.toLowerCase()
            SetUtensil(newUtensil)
        }
    }

    return (
        <>
            <h1 style={{width:"fit-content", margin:"25px auto", fontSize: "35px"}}>Microsoft Paint</h1>
            <Header handleUtensil={handleUtensil} utensil={utensil}/>
            <Container utensil={utensil}/>
        </>
    );
}

export default App;
