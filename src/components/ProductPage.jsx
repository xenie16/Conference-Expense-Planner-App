import Navbar from "./Navbar";
import SelectionCard from "./SelectionCard";
import Meals from "./Meals";


function ProductPage() {

   const venues = [
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

   const addOns = [
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

   const mealOptions = [
      {
         id: 1,
         name: "Breakfast",
         price: 50,
         img: '/breakfast.jpg'
      },
      {
         id: 2,
         name: "High Tea",
         price: 100,
         img: '/high_tea.jpg'
      },
      {
         id: 3,
         name: "Lunch",
         price: 100,
         img: '/lunch.jpg'
      },
      {
         id: 4,
         name: "Dinner",
         price: 150,
         img: '/dinner.webp'
      },
   ]

   return (
     <>
         <Navbar />
            <section>
               <h1 className="selection-title">Venue Room Selection</h1>
               <SelectionCard options={venues} />
            </section>
            <section>
               <h1 className="selection-title">Add-ons Selection</h1>
               <SelectionCard options={addOns} />
            </section>
            <section className="selection-title">
               <h1>Meal Selection</h1>
               <Meals mealOptions={mealOptions} />
            </section>
     </>
   );
 }
 
 export default ProductPage;