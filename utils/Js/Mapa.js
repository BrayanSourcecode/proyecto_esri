import Map from "https://js.arcgis.com/4.25/@arcgis/core/Map.js"
import MapView from "https://js.arcgis.com/4.25/@arcgis/core/views/MapView.js"
import Graphic from "https://js.arcgis.com/4.25/@arcgis/core/Graphic.js"
//HJDGSHSHAJ
import GraphicsLayer from "https://js.arcgis.com/4.25/@arcgis/core/layers/GraphicsLayer.js"
import esriConfig from "https://js.arcgis.com/4.25/@arcgis/core/config.js";

esriConfig.apiKey = "AAPK3a46155e72e141f7a1e526779e26ee9eAjXhDfndw1NljGMOgVuF26eFX3-eeUXZZOyG1ndpeWqpSuegyvOx67wvbav2qGrx";

// tipo de mapa 
const map = new Map({
    basemap: "arcgis-imagery" // Basemap layer service // hay varias bases
  });
// visualizamos el mapa y ajustamos las cordenadas tanbien s epuede hacer en 3d si usamos el  new SceneView
  const view = new MapView({
    map: map,
    center:[-74.663154,5.454510], // Longitude, latitude
    zoom: 16, // Zoom level
    container: "map" // Div element
  });

  const point = { //Create a point
    type: "point",
    longitude: -74.663154,
    latitude: 5.454510
 };
 const simpleMarkerSymbol = {
  type: "simple-marker",
  color: "red",  // Orange
  outline: {
      color: [255, 255, 255], // White
      width: 1
  }
};
const pointGraphic = new Graphic({
  geometry: point,
  symbol: simpleMarkerSymbol
});

const graphicsLayer = new GraphicsLayer();

graphicsLayer.add(pointGraphic);
map.add(graphicsLayer);