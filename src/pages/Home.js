import React from "react";
import Hero from "../Components/Hero";
import Menus from "../Components/Menus";
import About from "../Components/About";
import BookTable from "../Components/BookTable";

export default function Home() {
  return (
    <>
      <Hero />
      <Menus />
      <About />
      <BookTable />
    </>
  );
}
