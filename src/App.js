import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";

function App() {
  return (
    <div className="App">
      <div class="bg">
        <Navbar />
        <Banner />        
      </div>

      <ul role="list">
        <li>Unordered list item</li>
        <li>Cake ice cream sweet sesame snaps dragée cupcake wafer cookie</li>
        <li>Unordered list item</li>
      </ul>
    </div>
  );
}

export default App;
