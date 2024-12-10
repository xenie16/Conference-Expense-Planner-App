import React from "react";

function SelectionCard({
   img,
   title,
   capacity = null,
   price
}) {
   return (
      <>
         <img src={img}></img>
         <p>{title}</p>
         <p>{capacity}</p>
         <p>{price}</p>
         <div>
            <button>-</button>
            <form>
               <input type="number"></input>
            </form>
            <button>+</button>
         </div>
      </>
   )
}

export default SelectionCard