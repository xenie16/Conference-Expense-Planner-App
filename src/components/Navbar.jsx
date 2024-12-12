import React from "react";
import { useNavigate } from 'react-router-dom';

function Navbar() {
   const navigate = useNavigate();
   const handleRedirect = () => {
      navigate('/');
   }

   return (
      <div className="navbar">
         <h1 onClick={handleRedirect}>Conference Expense Planner</h1>
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