import React from "react";
import img1 from "./Images/pic3.jpg";
import Common from "./Common";
import Footer from "./Footer";
import Navbar from "./Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <Common
        fname="The page consists of"
        lname="Characters, Episodes & Locations"
        visit="/contact"
        btname="Contact Now"
        imgsrc={img1}
      />

      <Footer />
    </>
  );
};

export default About;
