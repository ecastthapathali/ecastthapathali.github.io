import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Committee from "./components/Committee";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";

function App() {

  const images = [
    '/images/1.jpg',
    '/images/2.jpg',
    '/images/3.jpg',
    '/images/4.jpg',
    '/images/5.jpg',
    '/images/6.jpg',
    '/images/7.jpg',
    '/images/8.jpg',
    '/images/9.jpg',
    '/images/10.jpg',
    '/images/11.jpg',
    '/images/12.jpg',
  ];

  return (
    <>
      <BrowserRouter basename="/">
        <NavBar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/committee" Component={Committee} />
          <Route path="/Gallery" element={<Gallery images={images} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
