import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Committee from "./components/Committee";

import Footer from "./components/Footer";
// import IntakeForm from "./components/IntakeForm";
import whatisEcast from "./components/aboutComponents/WhatisECAST";
import Workshop from "./components/aboutComponents/Workshop";
import Innovation from "./components/aboutComponents/Innovation";
import Research from "./components/aboutComponents/Research";
import OurPastEvents from "./components/ourEvents/OurPastEvents";
import UpcomingEvents from "./components/ourEvents/UpcomingEvents";
import WholeEvents from "./components/ourEvents/WholeEvents";
import Gallery from "./components/Gallery";
import FormSub from "./components/FormSub";
import Projects from "./components/Projects";

function App() {
  const images = [
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/3.jpg",
    "/images/4.jpg",
    "/images/5.jpg",
    "/images/6.jpg",
    "/images/7.jpg",
    "/images/8.jpg",
    "/images/9.jpg",
    "/images/10.jpg",
    "/images/11.jpg",
    "/images/12.jpg",
  ];

  return (
    <>
      <BrowserRouter basename="/">
        <NavBar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/home" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/committee" Component={Committee} />
          <Route path="/Gallery" element={<Gallery images={images} />} />
          <Route path="/FormSub" Component={FormSub} />
          <Route path="/whatisecast" Component={whatisEcast} />
          <Route path="/workshop" Component={Workshop} />
          <Route path="/innovation" Component={Innovation} />
          <Route path="/research" Component={Research} />
          <Route path="/upcomingevents" Component={UpcomingEvents} />
          <Route path="/pastevents" Component={OurPastEvents} />
          <Route path="/ourevents" Component={WholeEvents} />
          <Route path="/FormSub" Component={FormSub} />
          <Route path="/Projects" Component={Projects} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
