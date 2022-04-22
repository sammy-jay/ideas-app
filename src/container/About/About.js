import React from "react";
import "./About.css";
import { motion } from "framer-motion";
import aboutImg from "../../assets/Rectangle 83.png";
import howItWorks from "../../assets/hiw.png";

const About = () => {
  return (
    <section className="section" id="about">
      <div className="about">
        <motion.div
          whileInView={{ x: [-10, 0], opacity: [0, 1] }}
          transition={{ duration: 1 }}
        >
          <div>
            <img className="img-cont" src={aboutImg} alt="" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ x: [10, 0], opacity: [0, 1] }}
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
        id="hiw"
      >
        <div className="howItWorks">
          <div className="howItWorksOne">
            <h2>How it Works</h2>
            <p>
              We have created a new product that will help designers, developers
              and companies create websites for their startups quickly and
              easily.
            </p>
          </div>
          <img src={howItWorks} alt="" />
        </div>
      </motion.div>
    </section>
  );
};

export default About;
