import * as React from 'react';
import Map, {Marker, Popup} from 'react-map-gl';
// import {Room, Star} from "@material-ui/icons";
import "./app.css";
import axios from "axios";
import { useEffect, useState } from "react";
// import {format} from "timeago.js";


function App() {

  const currentUser = "Talya"
  const [pins, setPins] = useState([])
  const [currentPlaceId, setCurrentPlaceId] = useState(null)
  const [newPlace, setNewPlace] = useState(null)
  const [viewState, setViewState] = useState({
    longitude: 35,
    latitude: 32,
    zoom: 6
  });

  useEffect(()=>{
    const getPins = async ()=>{
      try{
        const res = await axios.get("/pins");
        setPins(res.data);
      } catch(err){
        console.log(err)
      }
    };
    getPins()
  },[])

  const handleMarkerClick = (id,lat,long) => {
    setCurrentPlaceId(id);
    setViewState({longitude:long, latitude:lat, zoom:6}) 
  };

  const handleAddClick = (e) => {    
    const long = e.lngLat.lng;
    const lat = e.lngLat.lat;
    setNewPlace({
      lat,
      long,
    });
  };

  return (    
    <Map
      mapboxAccessToken="pk.eyJ1IjoidGFseWFtIiwiYSI6ImNsbmE0Znk1cTAwN2kyanJzajI4cWF5b2oifQ.2smOlnswBobpuAwxkFHrGA"
      {...viewState}
      onMove={evt => setViewState(evt.viewState)}
      style={{width: "100vw", height: "100vh"}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      onDblClick={handleAddClick}
      transitionDuration="200" // not working
    >
      {pins.map(p => (
        <>
          <Marker 
            longitude={p.long} 
            latitude={p.lat} 
            color={currentUser === p.username ? "tomato" : "slateblue"}
            onClick={e => {
              e.originalEvent.stopPropagation();
              handleMarkerClick(p._id,p.lat,p.long);}}
          >
          </Marker>

          {p._id === currentPlaceId && (
          <Popup 
            longitude={p.long} 
            latitude={p.lat}
            anchor="left"
            onClose={() => setCurrentPlaceId(null)}
            >
            <div className="card">
              <label>Place</label>
              <h4 className='place'>{p.title}</h4>
              <label>Review</label>
              <p className='desc'>{p.desc}</p>
              <label>Rating</label>
              <div className='stars'> 5
                {/* <Star/>
                <Star/>
                <Star/>
                <Star/>
                <Star/> */}
              </div>
              <label>Information</label>
                <span className='username'>Created by <b>{p.username}</b></span>
                <span className='date'>123</span> 
                {/* {format(p.createdAt)} */}
            </div>
          </Popup> 
          )}
        </>
      ))}
      {newPlace && (
      <Popup
        longitude={newPlace.long} 
        latitude={newPlace.lat}
        anchor="left"
        onClose={() => setNewPlace(null)}
        > 
        <div>
          <form>
            <label>Title</label>
            <input placeholder="Enter a title"/>
            <label>Review</label>
            <textarea placeholder="Tell us something about this place"/>
            <label>Rating</label>
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <button className="submitButton" type="submit">Add Pin</button>
          </form>
          </div>        
      </Popup>
      )}
    </Map>
  );
}
export default App;