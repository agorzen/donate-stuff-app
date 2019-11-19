import React from "react";
// import styled from "styled-components";

import Header from "././1.Header/Header";
import ThreeColumns from "././2.ThreeColumns/ThreeColumns";
import FourColumns from "././3.FourColumns/FourColumns";
import AboutUs from "././4.AboutUs/AboutUs";
import JsonSection from "././5.JsonSection/JsonSection";
import ContactForm from "././6.ContactForm/ContactForm";
import Footer from "././7.Footer/Footer";

//ThreeColumns - component - array:
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

//FourColumns - component - array:
const itemsNext = [
  {
    title: "Wybierz rzeczy",
    description: "ubrania, zabawki, sprzęt i inne"
  },
  {
    title: "Spakuj je",
    description: "skorzystaj z worków na śmieci"
  },
  {
    title: "Zdecyduj komu chcesz pomóc",
    description: "wybierz zaufane miejsce"
  },
  {
    title: "Zamów kuriera",
    description: "kurier przyjedzie w dogodnym terminie"
  }
];
function Home() {
  return (
    <>
      <Header />
      <ThreeColumns items={items} />
      <FourColumns itemsNext={itemsNext} />
      <AboutUs />
      <JsonSection />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Home;
