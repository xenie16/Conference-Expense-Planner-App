import React from "react";
import { useState } from "react";

function SelectionCard({
   options
}) {
   const [quantity, setQuantity] = useState(
      Object.fromEntries(options.map(option => [option.id, 0]))
   );

   function handleIncrement(id) {
      setQuantity(prev => ({
         ...prev,
         [id]: prev[id] + 1
      }));
   }

   function handleDecrement(id) {
      setQuantity(prev => ({
         ...prev,
         [id]: Math.max(0, prev[id] - 1)
      }));
   }

   return (
      <>
      {options.map((option) => {
         return (
            <article className="selection-card" key={option.id}>
               <img className="selection-card-img" src={option.img} alt={option.name}></img>
               <p className="selection-card-title">{option.name}</p>
               {option.capacity && <p className="selection-card-capacity">Capacity: {option.capacity}</p>}
               <p className="selection-card-price">€ {option.price}</p>
               <div className="selection-card-quantity">
                  <button 
                     onClick={() => handleDecrement(option.id)} 
                     className="selection-card-button selection-card-button-minus">-</button>
                  <form key={`form-${option.id}`}>
                     <input 
                     type="number" 
                     key={`input-${option.id}`} 
                     value={quantity[option.id]}
                     readOnly></input>
                  </form>
                  <button 
                     onClick={() => handleIncrement(option.id)} 
                     className="selection-card-button selection-card-button-plus">+</button>
               </div>
            </article>
            
         )
      })}
      </>
   )
}

export default SelectionCard