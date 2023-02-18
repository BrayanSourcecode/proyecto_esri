// modulos de esri
import Map from "https://js.arcgis.com/4.25/@arcgis/core/Map.js"
import MapView from "https://js.arcgis.com/4.25/@arcgis/core/views/MapView.js"
import Graphic from "https://js.arcgis.com/4.25/@arcgis/core/Graphic.js"
import GraphicsLayer from "https://js.arcgis.com/4.25/@arcgis/core/layers/GraphicsLayer.js"
import esriConfig from "https://js.arcgis.com/4.25/@arcgis/core/config.js";
import data from "../data/data.js";
//data 
const datos=data;
esriConfig.apiKey = "AAPK3a46155e72e141f7a1e526779e26ee9eAjXhDfndw1NljGMOgVuF26eFX3-eeUXZZOyG1ndpeWqpSuegyvOx67wvbav2qGrx";

// base del mapa
const map = new Map({
  basemap: "arcgis-navigation" // Basemap layer service // hay varias bases
});

//visualizacion del mapa
const view = new MapView({
  map: map,
  center:[-74.663154,5.454510], 
  zoom: 7, 
  container: "map" 
});

//mas capas

//one capa
// agregamos las capas al mapa
const graphicsLayer = new GraphicsLayer(); 
map.add(graphicsLayer);

let keys=Object.keys(datos);
// console.log(valu[0])
for(let i=0; i <keys.length;i++){
        let subKeys=Object.keys(datos[keys[i]])
        // console.log(objec2)
    for(let j=0;j<subKeys.length;j++){
       const graphicMap = new Graphic({
              geometry:{ type: "point",
                longitude:datos[keys[i]][subKeys[j]][0],
                latitude:datos[keys[i]][subKeys[j]][1]
              },
              symbol:{ type:"picture-marker",
              url:"/utils/img/simbol/3701861.png",
              width:"70px",
              height:"70px",
              color:"red",
              outline: {
              color: [255, 255, 255], // White
              width: 1
              }
              } 
              
            });  
            graphicsLayer.add(graphicMap);
       }
  }

// const graphicsLayer = new GraphicsLayer(); 
// map.add(graphicsLayer);

//  for(let key in touristPlace){
//   for(let keyj in touristPlace[key]){
//     const graphicMap = new Graphic({
//       geometry:{ type: "point",
//         longitude:touristPlace[keyj][0],
//         latitude:touristPlace[keyj][1]
//       },
//       symbol:{ type:"picture-marker",
//       url:"/utils/img/simbol/tree-alt-solid-24.png",
//       width:"50px",
//       height:"50px",
//       color:"red",
//       outline: {
//       color: [255, 255, 255], // White
//       width: 1
//       }
//       } 
//     });  

//     graphicsLayer.add(graphicMap);
//   }
// };

