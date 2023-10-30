import * as React from 'react';
import Map, {Marker} from 'react-map-gl';

function App() {

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
    <Marker longitude={35.2355} latitude={31.7767}>
      {/* <view style = {{color:"red"}}/> */}
    </Marker>
    </Map>
  );
}
export default App;

// import {useState} from react;
// import ReactMapGL from 'react-map-gl';

// function App() {
//   const [viewport, setViewport] = useState({
//     width: 400,
//     height: 400,
//     latitude : 37,
//     longitude: -122,
//     zoom: 8
//   });
//   return (
//     <div className="App">
//      <ReactMapGL
//      {...viewport}
//      onViewportChange={nextViewport => setViewport(nextViewport)}
//      />
//     </div>
//   );
// }

// export default App;