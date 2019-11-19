import React from "react";
// import styled from "styled-components";

import Header from "././1.Header/Header";
import ThreeColumns from "././2.ThreeColumns/ThreeColumns";
import FourColumns from "././3.FourColumns/FourColumns";
import AboutUs from "././4.AboutUs/AboutUs";
import JsonSection from "././5.JsonSection/JsonSection";
import ContactForm from "././6.ContactForm/ContactForm";
import Footer from "././7.Footer/Footer";

//ThreeColumns - component:
const items = [
  {
    number: "10",
    title: "oddanych worków",
    description:
      "Lorem ipsum dolor sit ament, consectetur adipisc. Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat."
  },
  {
    number: "5",
    title: "wspartych organizacji",
    description:
      "Lorem ipsum dolor sit ament, consectetur adipisc. Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat."
  },
  {
    number: "7",
    title: "zorganizowanych zbiórek",
    description:
      "Lorem ipsum dolor sit ament, consectetur adipisc. Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat."
  }
];

function Home() {
  return (
    <>
      <Header />
      <ThreeColumns items={items} />
      <FourColumns />
      <AboutUs />
      <JsonSection />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Home;
