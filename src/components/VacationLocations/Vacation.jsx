import React from "react";
import Australia from "../../assets/australia.png";
import Japan from "../../assets/japan.png";
import NewZealand from "../../assets/new-zealand.png";
import Greece from "../../assets/greece.png";
import LocationCard from "./components/LocationCard";

const Vacation = () => {
  const locations = [
    {
      id: 1,
      name: "Australia",
      propCount: 2246,
      image: Australia,
    },
    {
      id: 2,
      name: "Japan",
      propCount: 1278,
      image: Japan,
    },
    {
      id: 3,
      name: "New Zealand",
      propCount: 480,
      image: NewZealand,
    },
    {
      id: 4,
      name: "Greece",
      propCount: 320,
      image: Greece,
    },
  ];

  return (
    <div className="container flex flex-col gap-[30px]">
      <div className="flex flex-col gap-[15px]">
        <h2 className="font-bold text-[28px]">Enjoy your dream vacation</h2>
        <p className="leading-[22.4px]">
          Plan and book our perfect trip with expert advice, travel tips,
          destination information and <br /> inspiration from us
        </p>
      </div>
      <div className="grid grid-cols-4 gap-[20px]">
        {locations.map(location => (
            <LocationCard location={location} />
        ))}
      </div>
    </div>
  );
};

export default Vacation;
