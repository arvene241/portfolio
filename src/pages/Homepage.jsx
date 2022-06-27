import React from "react";
import {
  Hero,
  About,
  Projects,
  Contact,
  Footer,
  Navbar,
} from "../components/index";

function Homepage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default Homepage;
