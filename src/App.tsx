import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Committee from "./components/Committee";
import Footer from "./components/Footer";
import whatisEcast from "./components/aboutComponents/WhatisECAST";
import Workshop from "./components/aboutComponents/Workshop";
import Innovation from "./components/aboutComponents/Innovation";
import Research from "./components/aboutComponents/Research";
import OurPastEvents from "./components/ourEvents/OurPastEvents";
import OnGoingEvents from "./components/ourEvents/OnGoingEvents";
import WholeEvents from "./components/ourEvents/WholeEvents";
import Projects from "./components/Projects";
import NotFound from "./components/404";
import Contact from "./components/contact";
import EventRegistration from "./static/EventRegistration";
import Chatbot from "./components/chatBot/ChatBot";
import Alumni from "./components/Alumni";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {

  return (
    <>
      <BrowserRouter basename="/">
        <NavBar />
        <Chatbot />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/committee" element={<Committee />} />
          <Route path="/whatisecast" Component={whatisEcast} />
          <Route path="/workshop" element={<Workshop />} />
          <Route path="/innovation" element={<Innovation />} />
          <Route path="/research" element={<Research />} />
          <Route path="/ongoingevents" element={<OnGoingEvents />} />
          <Route path="/pastevents" element={<OurPastEvents />} />
          <Route path="/ourevents" element={<WholeEvents />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/alumni" element={<Alumni/>}/>
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/register/:eventId" element={<EventRegistration />} />
          <Route path="*" element={<NotFound />} />
          {/* <Route path="/join-us" element={<SubForm />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
