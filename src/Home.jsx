import React from "react";
import img1 from "./Images/pic2.jpg";
import Common from "./Common";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Common
        fname="Welcome to the official page of"
        lname="Rick And Morty"
        visit="/main"
        btname="Take a look"
        imgsrc={img1}
      />
      <Footer />
    </>
  );
};

export default Home;
