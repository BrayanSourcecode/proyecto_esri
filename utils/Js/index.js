// modulos de esri
import Map from "https://js.arcgis.com/4.25/@arcgis/core/Map.js"
import MapView from "https://js.arcgis.com/4.25/@arcgis/core/views/MapView.js"
import SceneView from "https://js.arcgis.com/4.25/@arcgis/core/views/SceneView.js"
import Graphic from "https://js.arcgis.com/4.25/@arcgis/core/Graphic.js"
import GraphicsLayer from "https://js.arcgis.com/4.25/@arcgis/core/layers/GraphicsLayer.js"
import BasemapGallery from"https://js.arcgis.com/4.25/@arcgis/core/widgets/BasemapGallery.js"
import esriConfig from "https://js.arcgis.com/4.25/@arcgis/core/config.js";
import Handles from "https://js.arcgis.com/4.25/@arcgis/core/core/Handles.js";
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
   

// function para lugares y mapa principal con sus ventanas emergentes
function MapPrincipal(){
     let view_pri=mapa.createMap(Map,MapView,esriConfig,BasemapGallery,Expand,Search);
     let TypeView=view_pri;
     let placename="Todos";
     let icono="/utils/img/simbol/3701861.png"
     let newData=filters.searchPlace(placename,data)
     let handle="touris"
     mapa.createLayersPlace(TypeView,Graphic,newData,icono,handle);
     return TypeView
    }

let TypeView = MapPrincipal();

// evento para el swicht de cambiar de mapa normal a mapa 3D
const input_swicht=document.getElementById("Map_3D_inp");
input_swicht.addEventListener("click",()=>{
    if(input_swicht.checked){
        let viewScena=mapa.createMap(Map,SceneView,esriConfig,BasemapGallery,Expand,Search);
        TypeView=viewScena;
        let placename="Todos";
        let icono="/utils/img/simbol/3701861.png"
        let newData=filters.searchPlace(placename,data);
        let handle="touris"
        mapa.createLayersPlace(TypeView,Graphic,newData,icono,handle);
    }   else{
      TypeView = MapPrincipal()
    }   
})



// evento para filtro de lugares turisticos con sus ventanas emergentes
const input_radio=document.getElementsByName("status");
for(let i=0;i<input_radio.length;i++){
    input_radio[i].addEventListener("click",()=>{
        let placename=input_radio[i].value;
        let newData=filters.searchPlace(placename,data);
        let icono="/utils/img/simbol/3701861.png"
        let handle="touris"
     
        if(placename=="Ninguno"){
            mapa.removePlaceMap(TypeView,handle)
        }else if( TypeView.graphics.length > 0 || TypeView.graphics.length == 0 ){
            mapa.removePlaceMap(TypeView,handle)
            mapa.createLayersPlace(TypeView,Graphic,newData,icono,handle);
        
        }
       
    })
}



// evento para filtro de hoteles cerca a los lugare turisticos 

const select_option_hotels=document.getElementById("filters_option--hotels");
    select_option_hotels.addEventListener("change",()=>{
        let placename=select_option_hotels.value;
        let newData=filters.searchPlace(placename,datahotels);
        let icono="/utils/img//simbol/h2-removebg-preview.png"
        let handle="hotels"
        if(placename=="Ninguno"){
            mapa.removePlaceMap(TypeView,handle)
        }else if( TypeView.graphics.length > 0 || TypeView.graphics.length == 0 ){
            mapa.removePlaceMap(TypeView,handle)
            mapa.createLayersPlace(TypeView,Graphic,newData,icono,handle);
        }
          
    })

// evento para filtro de gasolineras cerca a los lugare turisticos 

    const select_option_gasStations=document.getElementById("filters_options--gasStations");
    select_option_gasStations.addEventListener("change",()=>{
        let placename=select_option_gasStations.value;
        let newData=filters.searchPlace(placename,datagasStations);
        let icono="/utils/img//simbol/gasolineria-removebg-preview.png"
        let handle="gasStations"
        if(placename=="Ninguno"){
            mapa.removePlaceMap(TypeView,handle)
        }else if( TypeView.graphics.length > 0 || TypeView.graphics.length == 0 ){
            mapa.removePlaceMap(TypeView,handle)
            mapa.createLayersPlace(TypeView,Graphic,newData,icono,handle);
        }
          
    })








                                                                                                                                                                                                                                                                                                                                                                                        










