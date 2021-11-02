import GoogleMapReact from "google-map-react";
import { useState } from "react";
import { FaMapMarkerAlt, FaCrosshairs } from "react-icons/fa";
const MapComp = ({ location, setLocation }) => {
  const AnyReactComponent = ({ text, icon }) => (
    <div>
      {icon}
      {text}
    </div>
  );
  const ButtonComp = ({ icon }) => <div>{icon}</div>;
  const [zoom, setzoom] = useState(13);
  const [status, setStatus] = useState(null);

  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus("Geolocation is not supported by your browser");
    } else {
      setStatus("Locating...");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setStatus(null);
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          setzoom(15);
        },
        () => {
          setStatus("Unable to retrieve your location");
        }
      );
    }
  };

  return (
    <div style={{ height: "85vh", width: "100%" }}>
      <button className="btn btn-primary" onClick={getLocation}>
        Current Location
      </button>
      {location ? (
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "YOUR MAP API KEY HERE",
            libraries: ["places"],
          }}
          center={location}
          zoom={zoom}
          draggable={true}
          yesIWantToUseGoogleMapApiInternals
        >
          <AnyReactComponent
            lat={location?.lat}
            lng={location?.lng}
            icon={<FaMapMarkerAlt size={25} color="red" />}
            text="Location"
          />
        </GoogleMapReact>
      ) : (
        "null"
      )}
    </div>
  );
};

export default MapComp;
