/* global google */
import React from "react";
import {GoogleApiWrapper } from "google-maps-react";
import PlacesAutocomplete from "react-places-autocomplete";
import classes from './SearchBox.module.css';
import SearchButton from './SearchButton';


class SearchBox extends React.Component {
    

  constructor(props) {
    super(props);
    this.state = { address: "" };
    this.placesService = new window.google.maps.places.PlacesService(
      document.createElement("div")
    );
    this.handleChange = this.handleChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleChange = address => {
    this.setState({ address });
  };

  handleSelect = (address, placeId) => {
    this.setState({ address });

    const request = {
      placeId: placeId,
      fields: ["name", "geometry"]
    };
    this.placesService.getDetails(request, (place, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        this.props.onPlaceChanged(place);
      }
    });
  };

  render() {
    return (
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div className="autocomplete-container">
        <div className={classes.SearchBox}> 
            <div className={classes.SearchBoxInputGroup}>
              <input
                {...getInputProps({
                  placeholder: "e.g. 'London', 'SW1', 'SW1X 7PA' or 'Euston Station'",
                  className: "location-search-input"
                })}
              />
              <SearchButton onClick={this.props.onSearchButtonClick} />
            </div>
            <div className={classes.AutocompleteDropdownContainer}>
              <div className={classes.AutocompleteDropdown} style={{display:suggestions.length>0||loading?null:"none"}}>
                {loading && <div>Loading...</div>}
                {suggestions.map(suggestion => {
                  const className = suggestion.active
                    ? "suggestion-item--active"
                    : "suggestion-item";
                  // inline style for demonstration purpose
                  
                  const style = suggestion.active
                    ? { backgroundColor: "#fafafa", cursor: "pointer" }
                    : { backgroundColor: "#ffffff", cursor: "pointer" }
                  
                  return (
                    <div
                      {...getSuggestionItemProps(suggestion, {
                        className,
                        style
                      })}
                    >
                      <span>{suggestion.description}</span>
                      
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        

        )}
      </PlacesAutocomplete>
    );
  }
}

class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { places: [] };
    this.showPlace = this.showPlace.bind(this);
    this.mapRef = React.createRef();
  }

  showPlace(place) {
    this.setState(prevState => ({
      places: [...prevState.places, place]
    }));
    this.mapRef.current.map.setCenter(place.geometry.location);
  }

  render() {
    return (
      <div className="map-container">
        <SearchBox onPlaceChanged={this.showPlace} onSearchButtonClick={()=>this.props.history.push("/forms")}/>
        {/* <Map
          ref={this.mapRef}
          google={this.props.google}
          className={"map"}
          zoom={4}
          initialCenter={this.props.center}
        >
          {this.state.places.map((place, i) => {
            return <Marker key={i} position={place.geometry.location} />;
          })}
        </Map> */}
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyA5Y65vMkia2Fj87KdQOSxjET_pVXxHa2A",
  //my api key
//   apiKey:"AIzaSyCkm1ZooE5B2Qpor89Wpt8L9Vpc14rB3Vc",
  libraries: ["places"]
})(MapContainer);