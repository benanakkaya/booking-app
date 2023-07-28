import React from "react";
import { itemVariant } from "../../../App";
import { motion } from "framer-motion";

const LocationCard = ({ location }) => {
  return (
    <motion.div variants={itemVariant}>
      <div className="flex flex-col gap-[15px] group cursor-pointer hover:-translate-y-3 duration-500">
        <img
          className="group-hover:opacity-90 transition-all duration-500"
          src={location.image}
        />
        <div className="flex flex-col gap-[6px]">
          <h4 className="text-xl font-bold">{location.name}</h4>
          {location.propCount ? (
            <small className="text-sm ">{location.propCount} properties</small>
          ) : (
            <small className="text-sm ">{location.location}</small>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default LocationCard;
