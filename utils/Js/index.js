// modulos de esri
import Map from "https://js.arcgis.com/4.25/@arcgis/core/Map.js"
import MapView from "https://js.arcgis.com/4.25/@arcgis/core/views/MapView.js"
import Graphic from "https://js.arcgis.com/4.25/@arcgis/core/Graphic.js"
import GraphicsLayer from "https://js.arcgis.com/4.25/@arcgis/core/layers/GraphicsLayer.js"
import esriConfig from "https://js.arcgis.com/4.25/@arcgis/core/config.js";
import data from "../data/data.js";

//clases
import { Mapa } from "./Mapa.js";
 const mapa= new Mapa("arcgis-navigation")
import {Filters} from"./Filters.js"
const filters= new Filters();



/// DOM EVENTOS

//evento para lugares y mapa principal
function principal(){    
    let map_prin=mapa.createMap(Map,MapView,esriConfig);
    let placename="Todos";
    let newData=filters.searchPlace(placename,data);
    console.log(newData);
    mapa.createLayers(map_prin,GraphicsLayer,Graphic,newData);
}
principal();

//evento para filtro de lugares turisticos 
const input_radio=document.getElementsByName("status");
for(let i=0;i<input_radio.length;i++){
    input_radio[i].addEventListener("click",()=>{
        let placename=input_radio[i].value;
        let newData=filters.searchPlace(placename,data);
        let map_fil=mapa.createMap(Map,MapView,esriConfig);
        let filtro1=mapa.createLayers(map_fil,GraphicsLayer,Graphic,newData);
    })
}





// visualizacion del mapa


                                                                                                                                                                                                                                                                                                                                                                                        










