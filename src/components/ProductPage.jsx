import { useState } from "react";

import Navbar from "./Navbar";
import SelectionCard from "./SelectionCard";
import Meals from "./Meals";
import TotalPrice from "./TotalPrice";

function ProductPage() {
   const sections = {
      venues: {
         title: "Venue Room Selection",
         options: [
            {
               id: 1,
               name: "Auditorium Hall",
               capacity: 200,
               price: 5500,
               img: "/auditorium_hall.jpg"
            },
            {
               id: 2,
               name: "Conference Room",
               capacity: 15,
               price: 3500,
               img: '/conference_room.jpg'
            },
            {
               id: 3,
               name: "Presentation Room",
               capacity: 50,
               price: 7000,
               img: '/presentation_room.jpg'
            },
            {
               id: 4,
               name: "Large Meeting Room",
               capacity: 10,
               price: 1100,
               img: '/large_meeting_room.jpg'
            },
            {
               id: 5,
               name: "Small Meeting Room",
               capacity: 6,
               price: 900,
               img: '/small_meeting_room.jpg'
            }
         ]
      },
      addOns: {
         title: "Add-Ons Selection",
         options: [
            {
               id: 1,
               name: "Speakers",
               price: 35,
               img: '/speaker.jpg'
            },
            {
               id: 2,
               name: "Microphones",
               price: 45,
               img: '/microphone.jpg'
            },
            {
               id: 3,
               name: "Whiteboards",
               price: 80,
               img: '/whiteboard.jpg'
            },
            {
               id: 4,
               name: "Projectors",
               price: 200,
               img: '/projector.jpg'
            },
            {
               id: 5,
               name: "Signage",
               price: 80,
               img: '/signage.jpg'
            }
         ]
      },
      meals: {
         title: "Meal Selection",
         options: [
            {
               id: 1,
               name: "Breakfast",
               price: 50,
               img: '/breakfast.jpg'
            },
            {
               id: 2,
               name: "High Tea",
               price: 25,
               img: '/high_tea.jpg'
            },
            {
               id: 3,
               name: "Lunch",
               price: 65,
               img: '/lunch.jpg'
            },
            {
               id: 4,
               name: "Dinner",
               price: 70,
               img: '/dinner.webp'
            },
         ]
      }
   }

   const [sectionTotals, setSectionTotals] = useState({
      venues: 0,
      addOns: 0,
      meals: 0
   });

   const updateSectionTotals = (section, total) => {
      setSectionTotals(prev => ({
         ...prev,
         [section]: total
      }));
   };

   const grandTotal = Object.values(sectionTotals).reduce((acc, total) => acc + total, 0);

   return (
     <>
         <header>
            <Navbar />
         </header>
         <main>
            <section>
               <h1 className="selection-title">{sections.venues.title}</h1>
               <SelectionCard 
                  options={sections.venues.options}
                  onTotalChange={total => updateSectionTotals('venues', total)}
               />
               <TotalPrice total={sectionTotals.venues} />
            </section>
            <section>
               <h1 className="selection-title">{sections.addOns.title}</h1>
               <SelectionCard 
                  options={sections.addOns.options} 
                  onTotalChange={total => updateSectionTotals('addOns', total)}
               />
               <TotalPrice total={sectionTotals.addOns} />
            </section>
            <section className="selection-title">
               <h1>{sections.meals.title}</h1>
               <Meals 
                  mealOptions={sections.meals.options} 
                  onTotalChange={total => updateSectionTotals('meals', total)}
               />
               <TotalPrice total={sectionTotals.meals} />
            </section>
         </main>
     </>
   );
 }
 
 export default ProductPage;