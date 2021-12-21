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
        if (keyHolder === "color" && updateItem === "brush"){
            newUtensil[keyHolder] = updateItem.toLowerCase()
            SetUtensil(()=>newUtensil)
            console.log(newUtensil)
        } else {
            if(updateItem === "eraser"){
                newUtensil["color"] = "white";
                newUtensil["tool"] = "eraser";
                SetUtensil(()=>newUtensil)
                console.log(newUtensil)
            } else {
                newUtensil[keyHolder] = updateItem.toLowerCase()
                SetUtensil(()=>newUtensil)
                console.log(newUtensil)
            }
        }
    }

    return (
        <div className="container">
            <h1 style={{width:"fit-content", margin:"25px auto", fontSize: "35px"}}>Microsoft Paint</h1>
            <Header handleUtensil={handleUtensil} utensil={utensil}/>
            <Container utensil={utensil}/>
        </div>
    );
}

export default App;
