import React from "react";

function Navbar() {
   
   return (
      <div className="navbar">
         <h1>Conference Expense Planner</h1>
         <div className="navbar-links">
            <a>Venue</a>
            <a>Add-ons</a>
            <a>Meals</a>
         </div>
         <button className="navbar-button">Show Details</button>
      </div>
   );
}

export default Navbar;