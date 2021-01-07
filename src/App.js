import './App.css';
import Navbar from "./components/Navbar/Navbar"
import Slideshow from "./components/Slideshow/Slideshow"
import Header from "./components/Header/Header"
import HomeInfo from "./components/HomeInfo/HomeInfo"

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Slideshow></Slideshow>
      <Header></Header>
      <HomeInfo></HomeInfo>
    </div>
  );
}

export default App;
