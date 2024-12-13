import React, { useState, useEffect } from "react";

function Meals({
   mealOptions,
   onTotalChange,
   numberOfPeople
}) {
   const [selectedMeals, setSelectedMeals] = useState(
      Object.fromEntries(mealOptions.map(option => [option.id, false]))
   );

   useEffect(() => {
      const people = Number(numberOfPeople) 
      const total = mealOptions.reduce((total, option) => 
         total + (selectedMeals[option.id] ? option.price * people : 0), 
         0
      );
      onTotalChange(total);
   }, [selectedMeals, numberOfPeople]);


   const toggleMeal = (id) => {
      setSelectedMeals(prev => ({
         ...prev,
         [id]: !prev[id]
      }));
   };

   return (
      <div className="meal-card-grid">
         {mealOptions.map((option) => {
            return (
               <div 
                  className={`meal-card ${selectedMeals[option.id] ? 'selected' : ''}`} 
                  key={option.id}
                  onClick={() => toggleMeal(option.id)}
               >
                  <img className="meal-card-img" src={option.img} alt={option.name}></img>
                  <p>{option.name}</p>
                  <p>€ {option.price}</p>
               </div>
            )
         })}
      </div>
   );
}

export default Meals;