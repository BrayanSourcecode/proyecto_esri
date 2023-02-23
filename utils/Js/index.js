// modulos de esri
import Map from "https://js.arcgis.com/4.25/@arcgis/core/Map.js"
import MapView from "https://js.arcgis.com/4.25/@arcgis/core/views/MapView.js"
import SceneView from "https://js.arcgis.com/4.25/@arcgis/core/views/SceneView.js"
import Graphic from "https://js.arcgis.com/4.25/@arcgis/core/Graphic.js"
import GraphicsLayer from "https://js.arcgis.com/4.25/@arcgis/core/layers/GraphicsLayer.js"
import BasemapGallery from"https://js.arcgis.com/4.25/@arcgis/core/widgets/BasemapGallery.js"
import esriConfig from "https://js.arcgis.com/4.25/@arcgis/core/config.js";
// widgets
import Expand from"https://js.arcgis.com/4.25/@arcgis/core/widgets/Expand.js"
import Search from"https://js.arcgis.com/4.25/@arcgis/core/widgets/Search.js"
//data
import data from "../data/data.js";
// import data from "../data/datapru.js"

//clases
import { Mapa } from "./Mapa.js";
 const mapa= new Mapa()
import {Filters} from"./Filters.js"
const filters= new Filters();


// esriConfig.apiKey ="AAPK3a46155e72e141f7a1e526779e26ee9eAjXhDfndw1NljGMOgVuF26eFX3-eeUXZZOyG1ndpeWqpSuegyvOx67wvbav2qGrx";
// // base del mapa
// const map = new Map({
//   basemap:"arcgis-streets-night"  // Basemap layer service // hay varias bases
// });

// //  if(typeView==SceneView){
// //   console.log("recibe esena")
// //  }else{
// //   console.log("no ecena")
// //  }
// //visualizacion del mapa
// const view = new SceneView({
//   map: map,
//   center: [-74.663154, 5.454510],
//   zoom: 3,
//   container: "map"
// });



// function para lugares y mapa principal con sus ventanas emergentes
function MapPrincipal(){
     let view_pri=mapa.createMap(Map,MapView,esriConfig,BasemapGallery,Expand,Search);
     let TypeView=view_pri;
     let placename="Todos";
     let newData=filters.searchPlace(placename,data)
     mapa.createLayersPlace(TypeView,Graphic,newData);
     return TypeView
    }
let TypeView = MapPrincipal();

// evento Para el swicht del mapa 3d
const input_swicht=document.getElementById("Map_3D_inp");
input_swicht.addEventListener("click",()=>{
    if(input_swicht.checked){
        let viewScena=mapa.createMap(Map,SceneView,esriConfig,BasemapGallery,Expand,Search);
        TypeView=viewScena;
        let placename="Todos";
        let newData=filters.searchPlace(placename,data);
        mapa.createLayersPlace(TypeView,Graphic,newData);
    }   else{
      TypeView = MapPrincipal()
    }   
})



//evento para filtro de lugares turisticos con sus ventanas emergentes
const input_radio=document.getElementsByName("status");
for(let i=0;i<input_radio.length;i++){
    input_radio[i].addEventListener("click",()=>{
        let placename=input_radio[i].value;
        let newData=filters.searchPlace(placename,data);
        if(!TypeView.graphics.length ==0 ){
            TypeView.graphics.removeAll();
            let filtro1=mapa.createLayersPlace(TypeView,Graphic,newData);
        }
    })
}










                                                                                                                                                                                                                                                                                                                                                                                        










