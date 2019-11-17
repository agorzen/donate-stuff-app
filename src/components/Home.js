import React from "react";
// import styled from "styled-components";

import Header from "././1.Header/Header";
import ThreeColumns from "././2.ThreeColumns/ThreeColumns";
import FourColumns from "././3.FourColumns/FourColumns";
import AboutUs from "././4.AboutUs/AboutUs";
import JsonSection from "././5.JsonSection/JsonSection";
import ContactForm from "././6.ContactForm/ContactForm";
import Footer from "././7.Footer/Footer";

function Home() {
  return (
    <>
      <Header />
      <ThreeColumns />
      <FourColumns />
      <AboutUs />
      <JsonSection />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Home;
