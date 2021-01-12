import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import Navbar from "./components/Navbar/Navbar"
import Slideshow from "./components/Slideshow/Slideshow"
import Header from "./components/Header/Header"
import HomeInfo from "./components/HomeInfo/HomeInfo"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Slideshow></Slideshow>
      <Header></Header>
      <HomeInfo></HomeInfo>
      <Footer></Footer>
    </div>
  );
}

export default App;
