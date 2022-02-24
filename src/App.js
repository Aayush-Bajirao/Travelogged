import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <div class="bg">
        <Navbar />

        <div className="content white">
          <center>
          <h1>Travelogged Shimla </h1>        
          <h1>2022</h1>
          <p>Discover yourself Discover Shimla, The White Heaven</p>
          </center>
        </div>

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