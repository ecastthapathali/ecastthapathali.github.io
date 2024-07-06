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
// import FormSub from "./components/FormSub"; // Uncomment Next Intake
import Projects from "./components/Projects";
import NotFound from "./components/404";

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
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/committee" element={<Committee />} />
          <Route path="/gallery" element={<Gallery images={images} />} />
          <Route path="/whatisecast" Component={whatisEcast} />
          <Route path="/workshop" element={<Workshop />} />
          <Route path="/innovation" element={<Innovation />} />
          <Route path="/research" element={<Research />} />
          <Route path="/upcomingevents" element={<UpcomingEvents />} />
          <Route path="/pastevents" element={<OurPastEvents />} />
          <Route path="/ourevents" element={<WholeEvents />} />
          {/* <Route path="/formsub" element={<FormSub />} /> */}
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
