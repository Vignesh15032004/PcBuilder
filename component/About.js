import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
import Footer from "./Footer";
const About = () => {
  return (
    <section className="hero">
      <div className="a2">
        <img src="https://4.imimg.com/data4/VS/JN/MY-10355329/computer-assembling-service-500x500.jpg"></img>
      </div>
      <div className="a1">
        <h2>Build Your Custom Assembled PC</h2>
        <p>
          BuildPC is the first truly remarkable, innovative, high-performance
          online PC builder, PC Maker tool, PC parts compatibility checker to
          build custom PC, assemble PC, custom desktops, custom gaming rigs,
          custom workstation, custom media center, and high power custom
          workstations to provides the juice for all your needs.
        </p>
        <p>
          Chose each and every part according to your choice, our advanced
          algorithms under the hood check compatibility of every part with each
          other to make sure you won't spend money on wrong parts. With a
          passion to build custom high-performance computers and custom build
          PC's BuildPC.in is the best place to build your dream workstation,
          gaming rigs, and custom computers.
        </p>
      </div>
      <Footer/>
    </section>
  );
};

export default About;
