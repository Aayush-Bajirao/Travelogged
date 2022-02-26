import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Itinerary from "./components/Itinerary";
import Inclusions from "./components/Inclusions";
import Reviews from "./components/Reviews";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";



function App() {
  return (
    <div className="App">
      <div class="bg">
        <div className="container">
          <Navbar />
          <Banner />
        </div>
      </div>

      <div className=" container">
        <div className="itinerary">
          <Itinerary />
        </div>
      </div>

      <div className="container">
        <Inclusions />
      </div>

      <div className="rev-color">
      <div className="container ">
        <Reviews />
      </div>
      </div>
      
      <div className="container">
        <AboutUs />
      </div>

      <div>
        <Footer />
      </div>
      
      

    </div>
  );
}

export default App;
