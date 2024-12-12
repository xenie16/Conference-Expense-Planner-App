import React from "react";

function Meals({
   mealOptions
}) {
   return (
      <>
         {mealOptions.map((option) => {
            return (
               <React.Fragment key={option.id}>
                  <img src={option.img}></img>
                  <p>{option.name}</p>
                  <p>€ {option.price}</p>
               </React.Fragment>
            )
         })}
      </>
   );
}

export default Meals;