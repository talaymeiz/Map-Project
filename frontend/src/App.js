import * as React from 'react';
import Map from 'react-map-gl';

function App() {
  return (
    <Map
      mapboxAccessToken="pk.eyJ1IjoidGFseWFtIiwiYSI6ImNsbmE0Znk1cTAwN2kyanJzajI4cWF5b2oifQ.2smOlnswBobpuAwxkFHrGA"
      initialViewState={{
        longitude: 35,
        latitude: 32,
        zoom: 7
      }}
      style={{width: "100vw", height: "100vh"}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    />
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
