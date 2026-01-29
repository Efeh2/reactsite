import React, { useState } from "react";

function UpdateArray() {

    const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

    function handleAddFood(){

        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";

        setFoods(f => [...f, newFood]);
    }
    

    function handleRemoveFood(index){
        
        setFoods(foods.filter((_, i) => i !== index));
    }

    return(
        <div>
           <h2>List Of Foods</h2>
           <ul>
            {foods.map((foods, index) => 
                <li key={index} onClick={() => handleRemoveFood(index)}>
                {foods}</li>)}
           </ul>
           <input type="text" placeholder="Enter food name" 
           id="foodInput"/>
           <button onClick={handleAddFood}>Add Food</button>
        </div>
    )
}

export default UpdateArray