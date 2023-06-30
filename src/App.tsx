import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <>
      <BrowserRouter basename="/ECAST-Web-Frontend">
        <NavBar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
