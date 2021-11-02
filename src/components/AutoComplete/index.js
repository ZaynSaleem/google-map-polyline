import Autocompletes from "react-google-autocomplete";
import "./style.css";
const AutoComplete = (props) => {
  return (
    <div>
      <Autocompletes
        apiKey={"YOUR MAP API KEY HERE"}
        onPlaceSelected={(place) =>
          props.setLocation({
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng(),
          })
        }
        options={{
          types: ["(regions)"],
          componentRestrictions: { country: "pk" },
        }}
      />
    </div>
  );
};

export default AutoComplete;
