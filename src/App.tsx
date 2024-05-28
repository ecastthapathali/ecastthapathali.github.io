import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Committee from "./components/Committee";
import Footer from "./components/Footer"
import IntakeForm from "./components/IntakeForm";
import whatisEcast from "./components/aboutComponents/WhatisECAST";
import Workshop from "./components/aboutComponents/Workshop";
import Innovation from "./components/aboutComponents/Innovation";
import Research from "./components/aboutComponents/Research";
import OurPastEvents from "./components/ourEvents/OurPastEvents";
import UpcomingEvents from "./components/ourEvents/UpcomingEvents";
import WholeEvents from "./components/ourEvents/WholeEvents";

function App() {
  return (
    <>
{/*       <BrowserRouter basename="/ECAST-Web-Frontend"> */}
        <BrowserRouter basename="/">
        <NavBar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/committee" Component={Committee} />
          <Route path="/form" Component={IntakeForm} />
          <Route path="/whatisecast" Component={whatisEcast} />
          <Route path="/workshop" Component={Workshop} />
          <Route path="/innovation" Component={Innovation} />
          <Route path="/research" Component={Research} />
          <Route path="/upcomingevents" Component={UpcomingEvents} />
          <Route path="/pastevents" Component={OurPastEvents} />
          <Route path="/ourevents" Component={WholeEvents} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
