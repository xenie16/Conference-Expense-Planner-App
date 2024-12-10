import Navbar from "./Navbar";
import SelectionCard from "./SelectionCard";
function ProductPage() {
   const venues = [
      {
         id: 1,
         name: "Auditorium Hall",
         capacity: 200,
         price: 5500
      },
      {
         id: 2,
         name: "Conference Room",
         capacity: 15,
         price: 3500
      },
      {
         id: 3,
         name: "Presentation Room",
         capacity: 50,
         price: 7000
      },
      {
         id: 4,
         name: "Large Meeting Room",
         capacity: 10,
         price: 1100
      },
      {
         id: 5,
         name: "Small Meeting Room",
         capacity: 6,
         price: 900
      }
   ]

   const addOns = [
      {
         id: 1,
         name: "Speakers",
         price: 35
      },
      {
         id: 2,
         name: "Microphones",
         price: 45
      },
      {
         id: 3,
         name: "Whiteboards",
         price: 80
      },
      {
         id: 4,
         name: "Projectors",
         price: 200
      },
      {
         id: 5,
         name: "Signage",
         price: 80
      }
   ]
   return (
     <>
         {venues.map((venue) => (
            <SelectionCard key={venue.id} img="" title={venue.name} capacity={venue.capacity} price={venue.price} />
         ))}

         {addOns.map((addOn) => (
            <SelectionCard key={addOn.id} img="" title={addOn.name} price={addOn.price} />
         ))}
     </>
   );
 }
 
 export default ProductPage;