import "./App.css";
import { useState } from "react";
import AutoComplete from "./components/AutoComplete/index";
import MapComp from "./components/MapComponent/index";

function App() {
  const [location, setLocation] = useState({ lat: 24.8607, lng: 67.0011});

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 ">

        <AutoComplete setLocation={setLocation} />
        </div>
      </div>
      <div>
        <MapComp location={location} setLocation={setLocation}/>
      </div>
    </div>
  );
}

export default App;
