import React from "react";
import "./About.css";
import { motion } from "framer-motion";
import aboutImg from "../../assets/Rectangle 83.png";
import howItWorks from "../../assets/how it works.png";

const About = () => {
  return (
    <section>
      <div className="about">
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 1 }}
        >
          <div>
            <img className="img-cont" src={aboutImg} alt="" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ x: [100, 0], opacity: [0, 1] }}
          transition={{ duration: 1 }}
        >
          <div className="about__content">
            <h2>About Ideasmarketplace</h2>
            <p>
              Ideasmarketplace is an online marketplace that connects buyers and
              sellers of ideas and intellectual property (IP) together. The
              marketplace will display ideas from different industries and
              categories including patents, copyrights, utility models,
              television commercials, print ads, new application ideas for
              mobile devices, product improvement ideas, reality television
              ideas, business strategy ideas and much more
            </p>
          </div>
        </motion.div>
      </div>
      <motion.div
        whileInView={{ scale: [0.85, 1] }}
        transition={{ duration: 1 }}
      >
        <img src={howItWorks} alt="" className="howItWorks" />
      </motion.div>
    </section>
  );
};

export default About;
