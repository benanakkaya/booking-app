import React from "react";
import { AiOutlineWarning } from "react-icons/ai";
import { motion } from "framer-motion";
import { containerVariant, itemVariant } from "../../App";

const Alert = () => {
  return (
    <motion.div initial="hidden" animate="visible" className="container " variants={containerVariant}>
    <motion.div
      variants={itemVariant}
      className="mt-[160px] xl:mt-[40px] bg-warning rounded-md p-[25px] flex items-center gap-[20px]"
    >
      <AiOutlineWarning className="text-4xl" />
      <p className="text-lg">
        Check the latest COVID-19 restrictions before you travel.{" "}
        <span>
          <a href="/" className="text-primary">
            Learn more
          </a>
        </span>
      </p>
    </motion.div>
    </motion.div>
  );
};

export default Alert;
