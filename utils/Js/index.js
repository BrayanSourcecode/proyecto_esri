// modulos de esri
import Map from "https://js.arcgis.com/4.25/@arcgis/core/Map.js"
import MapView from "https://js.arcgis.com/4.25/@arcgis/core/views/MapView.js"
import SceneView from "https://js.arcgis.com/4.25/@arcgis/core/views/SceneView.js"
import Graphic from "https://js.arcgis.com/4.25/@arcgis/core/Graphic.js"
import GraphicsLayer from "https://js.arcgis.com/4.25/@arcgis/core/layers/GraphicsLayer.js"
import FeatureLayer from "https://js.arcgis.com/4.25/@arcgis/core/layers/FeatureLayer.js";
import BasemapGallery from"https://js.arcgis.com/4.25/@arcgis/core/widgets/BasemapGallery.js"
import esriConfig from "https://js.arcgis.com/4.25/@arcgis/core/config.js";
import Handles from "https://js.arcgis.com/4.25/@arcgis/core/core/Handles.js";
import Multipoint from "https://js.arcgis.com/4.25/@arcgis/core/geometry/Multipoint.js";
import Point from "https://js.arcgis.com/4.25/@arcgis/core/geometry/Point.js";
// widgets
import Expand from"https://js.arcgis.com/4.25/@arcgis/core/widgets/Expand.js"
import Search from"https://js.arcgis.com/4.25/@arcgis/core/widgets/Search.js"
//data
import data from "../data/data.js";
import datahotels from "../data/datahotels.js";
import datagasStations from "../data/datagasstation.js";
// import data from "../data/datapru.js"

//clases
import { Mapa } from "./Mapa.js";
 const mapa= new Mapa()
import {Filters} from"./Filters.js"
const filters= new Filters();
esriConfig.apiKey = "AAPK3a46155e72e141f7a1e526779e26ee9eAjXhDfndw1NljGMOgVuF26eFX3-eeUXZZOyG1ndpeWqpSuegyvOx67wvbav2qGrx";


const map = new Map({
    basemap: "arcgis-streets-night"  // Basemap layer service // hay varias bases
  });

  const view = new MapView ({
    map: map,
    center: [-74.663154, 5.454510],
    zoom: 2,
    container: "map"
  });


//   const trailheadsLayer = new FeatureLayer({
//     url: "https://services.arcgis.com/diQdIhSzjZP7X9B2/arcgis/rest/services/Hoteles_gdb/FeatureServer"
//   });

 const puntos=new Multipoint({
    type:"multipoint",
    points:[[-73.365690, 5.535312],[-74.477888, 5.009164]],
    color: [226, 119, 40],
    width: 4
 })
 const point={
    type: "point", // autocasts as SimpleLineSymbol()
    color: [226, 119, 40],
    width: 4
 }

var graphicMap = new Graphic({
    //le pasamos el tipo de geometria  y las ubicacionesd e los puntos
    geometry:{
        type:puntos
        
    
    },
    //le pasamos elsimbolo y el tama;o y el icono en cada punto
    symbol: {
      type: "picture-marker",
      url: "/utils/img/simbol/h2-removebg-preview.png",
      width: "50px",
      height: "50px",
    },

    //pasamos la informacion de cada lugar para mostararla en una venta emergente
    popupTemplate: {
      title: "gfdfsgfsdgdf",
      content: [
        {
          type: "text",
          text: "dsfdsfafds"
        },
        {
          type: "media", // MediaContentElement
          mediaInfos: [
            {
              type: "image",
              value: {
                sourceURL:
                  "/utils/img/simbol/gasolineria-removebg-preview.png"
              }
            }
          ]
        }
      ]
    }
  });
//   graphicMap.addHandles("touris",handle)
//  map.add(trailheadsLayer);

view.graphics.add(graphicMap)







// function para lugares y mapa principal con sus ventanas emergentes
// function MapPrincipal(){
//      let view_pri=mapa.createMap(Map,MapView,esriConfig,BasemapGallery,Expand,Search);
//      let TypeView=view_pri;
//      let placename="Todos";
//      let icono="/utils/img/simbol/3701861.png"
//      let newData=filters.searchPlace(placename,data)
//      let handle="touris"
//      mapa.createLayersPlace(TypeView,Graphic,newData,icono,handle);
//      return TypeView
//     }

// let TypeView = MapPrincipal();

// evento para el swicht de cambiar de mapa normal a mapa 3D
// const input_swicht=document.getElementById("Map_3D_inp");
// input_swicht.addEventListener("click",()=>{
//     if(input_swicht.checked){
//         const form=document.getElementById("form").reset(); 
//         let viewScena=mapa.createMap(Map,SceneView,esriConfig,BasemapGallery,Expand,Search);
//         TypeView=viewScena;
//         let placename="Todos";
//         let icono="/utils/img/simbol/3701861.png"
//         let newData=filters.searchPlace(placename,data);
//         let handle="touris"
//         mapa.createLayersPlace(TypeView,Graphic,newData,icono,handle);
//     }   else{
//         const form=document.getElementById("form").reset();
//         TypeView = MapPrincipal()
//     }   
// })



// evento para filtro de lugares turisticos con sus ventanas emergentes
// const input_radio=document.getElementsByName("status");
// for(let i=0;i<input_radio.length;i++){
//     input_radio[i].addEventListener("click",()=>{
//         let placename=input_radio[i].value;
//         let newData=filters.searchPlace(placename,data);
//         let icono="/utils/img/simbol/3701861.png"
//         let handle="touris"
     
//         if(placename=="Ninguno"){
//             mapa.removePlaceMap(TypeView,handle)
//         }else if( TypeView.graphics.length > 0 || TypeView.graphics.length == 0 ){
//             mapa.removePlaceMap(TypeView,handle)
//             mapa.createLayersPlace(TypeView,Graphic,newData,icono,handle);
        
//         }
       
//     })
// }



// evento para filtro de hoteles cerca a los lugare turisticos 

// const select_option_hotels=document.getElementById("filters_option--hotels");
//     select_option_hotels.addEventListener("change",()=>{
//         let placename=select_option_hotels.value;
//         let newData=filters.searchPlace(placename,datahotels);
//         let icono="/utils/img//simbol/h2-removebg-preview.png"
//         let handle="hotels"
//         if(placename=="Ninguno"){
//             mapa.removePlaceMap(TypeView,handle)
//         }else if( TypeView.graphics.length > 0 || TypeView.graphics.length == 0 ){
//             mapa.removePlaceMap(TypeView,handle)
//             mapa.createLayersPlace(TypeView,Graphic,newData,icono,handle);
//         }
          
//     })

// evento para filtro de gasolineras cerca a los lugare turisticos 

    // const select_option_gasStations=document.getElementById("filters_options--gasStations");
    // select_option_gasStations.addEventListener("change",()=>{
    //     let placename=select_option_gasStations.value;
    //     let newData=filters.searchPlace(placename,datagasStations);
    //     let icono="/utils/img//simbol/gasolineria-removebg-preview.png"
    //     let handle="gasStations"
    //     if(placename=="Ninguno"){
    //         mapa.removePlaceMap(TypeView,handle)
    //     }else if( TypeView.graphics.length > 0 || TypeView.graphics.length == 0 ){
    //         mapa.removePlaceMap(TypeView,handle)
    //         mapa.createLayersPlace(TypeView,Graphic,newData,icono,handle);
    //     }
          
    // })








                                                                                                                                                                                                                                                                                                                                                                                        










