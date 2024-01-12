import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Committee from "./components/Committee";
import Footer from "./components/Footer";

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
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
