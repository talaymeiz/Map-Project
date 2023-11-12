import * as React from 'react';
import Map, {Marker, Popup} from 'react-map-gl';
// import {Room, Star} from "@material-ui/icons";
import "./app.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Register from "./components/Register";
import Login from "./components/Login";
// import {format} from "timeago.js";


function App() {

  const [currentUser, setCurrentUser] = useState(null)
  const [pins, setPins] = useState([])
  const [currentPlaceId, setCurrentPlaceId] = useState(null)
  const [newPlace, setNewPlace] = useState(null)
  const [title, setTitle] = useState(null);
  const [desc, setDesc] = useState(null);
  const [rat, setRateing] = useState(0);
  const [showRegister, setShowRegister] = useState(false);  
  const [showLogin, setShowLogin] = useState(false);  
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPin = {
      username: currentUser,
      title,
      desc,
      rat,
      lat: newPlace.lat,
      long: newPlace.long,
    };

    try {
      const res = await axios.post("/pins", newPin);
      setPins([...pins, res.data]);
      setNewPlace(null);
    } catch (err) {
      console.log(err);
    }
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
              <div className='stars'>{p.rat}</div>
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
          <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input placeholder="Enter a title" onChange={(e)=> setTitle(e.target.value)}/>
            <label>Review</label>
            <textarea placeholder="Tell us something about this place" onChange={(e)=> setDesc(e.target.value)}/>
            <label>Rating</label>
            <select onChange={(e)=> setRateing(e.target.value)}>
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
      {currentUser ? (
        <button className="button logout">log out</button>
      ) : (
        <div className="buttons">
          <button className="button login" onClick={()=>setShowLogin(true)}>log in</button>
          <button className="button register" onClick={()=>setShowRegister(true)}>register</button>
        </div>
      )}
      {showRegister && <Register setShowRegister={setShowRegister}/>}
      {showLogin && <Login setShowLogin={setShowLogin}/>}
    </Map>
  );
}
export default App;