import React from "react";
import { useState, useEffect } from "react";

function SelectionCard({
   options,
   onTotalChange
}) {
   const [quantity, setQuantity] = useState(
      Object.fromEntries(options.map(option => [option.id, 0]))
   );

   useEffect(() => {
      const total = options.reduce((total, option) => total + option.price * quantity[option.id], 0);
      onTotalChange(total);
   }, [quantity, options, onTotalChange]);

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
      <div className="selection-card-grid">
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
                     <p>{quantity[option.id]}</p>
                     <button 
                        onClick={() => handleIncrement(option.id)} 
                        className="selection-card-button selection-card-button-plus">+</button>
                  </div>
               </article>
            )
         })}
      </div>
   )
}

export default SelectionCard