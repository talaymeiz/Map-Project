import * as React from 'react';
import Map, {Marker, Popup} from 'react-map-gl';
// import {Room, Star} from "@material-ui/icons";
import "./app.css";
import axios from "axios";
import { useEffect, useState } from "react";


function App() {

  const [pins, setPins] = useState([])

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
          <Marker longitude={p.long} latitude={p.lat} color="slateblue">
          </Marker>
        </>
      ))}
     {/* <Popup longitude={35.2355} latitude={31.7767}
        anchor="left"
        onClose={() => setShowPopup(false)}>
        <div className="card">
          <label>Place</label>
          <h4 className='place'>Western Wall</h4>
          <label>Review</label>
          <p className='desc'>A spiritual place</p>
          <label>Rating</label>
          <div className='stars'> 5
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
          </div>
          <label>Information</label>
            <span className='username'>Created by <b>Talya</b></span>
            <span className='date'>2 hour ago</span>
        </div>
      </Popup>  */}

    </Map>
  );
}
export default App;