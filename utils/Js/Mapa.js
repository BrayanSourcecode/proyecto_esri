import Map from "https://js.arcgis.com/4.25/@arcgis/core/Map.js"
import MapView from "https://js.arcgis.com/4.25/@arcgis/core/views/MapView.js"

import esriConfig from "https://js.arcgis.com/4.25/@arcgis/core/config.js";

esriConfig.apiKey = "AAPK3a46155e72e141f7a1e526779e26ee9eAjXhDfndw1NljGMOgVuF26eFX3-eeUXZZOyG1ndpeWqpSuegyvOx67wvbav2qGrx";

// tipo de mapa 
const map = new Map({
    basemap: "arcgis-streets-relief" // Basemap layer service // hay varias bases
  });
// visualizamos el mapa y ajustamos las cordenadas tanbien s epuede hacer en 3d si usamos el  new SceneView
  const view = new MapView({
    map: map,
    center:[-74.075833,4.598056], // Longitude, latitude
    zoom: 13, // Zoom level
    container: "map" // Div element
  });