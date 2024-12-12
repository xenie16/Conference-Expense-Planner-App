import React from "react";

function SelectionCard({
   options
}) {
   return (
      <>
      {options.map((option) => {
         return (
            <article className="selection-card" key={option.id}>
               <img className="selection-card-img" src={option.img} alt={option.name}></img>
               <p className="selection-card-title">{option.name}</p>
               
               <p className="selection-card-price">€ {option.price}</p>
               <div className="selection-card-quantity">
                  <button className="selection-card-button selection-card-button-minus">-</button>
                  <form key={`form-${option.id}`}>
                     <input type="number" key={`input-${option.id}`}></input>
            </form>
                  <button className="selection-card-button selection-card-button-plus">+</button>
         </div>
            </article>
            
         )
      })}
      </>
   )
}

export default SelectionCard