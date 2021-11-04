import "./App.css";
import { useState } from "react";
import AutoComplete from "./components/AutoComplete/index";
import MapComp from "./components/MapComponent/index";
import CustomMap from "./components/MapComponent/map2";
import { withScriptjs } from "react-google-maps";

function App() {
  const [location, setLocation] = useState({ lat: 24.8607, lng: 67.0011 });
  const MapLoader = withScriptjs(CustomMap);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 ">
          {/* <AutoComplete setLocation={setLocation} /> */}
        </div>

        <div>
          <MapLoader
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=YOUR-API-kEY-HERE"
            loadingElement={<div style={{ height: `100%` }} />}
          />
          {/* <CustomMap location={location} setLocation={setLocation} /> */}
        </div>
        {/* <MapComp location={location} setLocation={setLocation}/> */}
      </div>
    </div>
  );
}

export default App;
