import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Itinerary from "./components/Itinerary";

function App() {
  return (
    <div className="App">
      <div class="bg">
        <Navbar />
        <Banner />        
      </div>

      <div className="itinerary">
        <Itinerary />
      </div>  
      
    </div>
  );
}

export default App;
