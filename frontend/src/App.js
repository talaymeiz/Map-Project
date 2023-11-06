import * as React from 'react';
import Map, {Marker, Popup} from 'react-map-gl';
// import {Room, Star} from "@material-ui/icons";
import "./app.css";
import axios from "axios";
import { useEffect, useState } from "react";
// import {format} from "timeago.js";


function App() {

  const [pins, setPins] = useState([])
  const [currentPlaceId, setCurrentPlaceId] = useState(null)

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

  return (    
    <Map
      mapboxAccessToken="pk.eyJ1IjoidGFseWFtIiwiYSI6ImNsbmE0Znk1cTAwN2kyanJzajI4cWF5b2oifQ.2smOlnswBobpuAwxkFHrGA"
      initialViewState={{
        longitude: 35,
        latitude: 32,
        zoom: 6
      }}
      style={{width: "100vw", height: "100vh"}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    >
      {pins.map(p => (
        <>
          <Marker 
            longitude={p.long} 
            latitude={p.lat} 
            color="slateblue"
            onClick={e => {
              e.originalEvent.stopPropagation();
              setCurrentPlaceId(p._id);}}
          >
          </Marker>

          {p._id === currentPlaceId && (
          <Popup 
            longitude={p.long} 
            latitude={p.lat}
            anchor="left"
            onClose={() => setCurrentPlaceId(null)}>
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
    </Map>
  );
}
export default App;