import React from "react";
import "./CTA.css";
import image from "../../assets/call_to_action_9.png";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <div className="cta">
      <motion.div
        whileInView={{ scale: [0.85, 1] }}
        transition={{ duration: 1 }}
      >
        <img src={image} alt="" />
      </motion.div>
    </div>
  );
};

export default CTA;
