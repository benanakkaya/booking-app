import React from 'react'
import LocationCard from '../VacationLocations/components/LocationCard';
import imgHotel1 from "../../assets/hotel1.png";
import imgHotel2 from "../../assets/hotel2.png";
import imgHotel3 from "../../assets/hotel3.png";
import imgHotel4 from "../../assets/hotel4.png";

const PopularHotels = () => {

    const locations = [
        {
          id: 1,
          name: "Lakeside Motel Warefront",
          location: "Turkey",
          image: imgHotel1,
        },
        {
          id: 2,
          name: "Recce Graham resort",
          location: "Greece",
          image: imgHotel2,
        },
        {
          id: 3,
          name: "Fireside Dinners",
          location: "Malta",
          image: imgHotel3,
        },
        {
          id: 4,
          name: "Oculous Inn Stay",
          location: "Spain",
          image: imgHotel4,
        },
      ];

  return (
    <div className="container flex flex-col gap-[30px]">
      <div className="flex flex-col gap-[15px]">
        <h2 className="font-bold text-[28px]">Popular hotels</h2>
      </div>
      <div className="grid grid-cols-4 gap-[20px]">
        {locations.map(location => (
            <LocationCard location={location} />
        ))}
      </div>
    </div>
  )
}

export default PopularHotels
