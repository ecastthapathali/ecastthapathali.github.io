import NavBar from "./components/NavBar"
import Background from './assets/background.jpg'

function App() {

  return (
    <>
      <NavBar/>
      <img src={Background} className="brightness-75"></img>
    </>
  )
}

export default App
