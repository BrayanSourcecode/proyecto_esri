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
import dataHotels from "../data/datahotels.js";
import dataGasStations from "../data/datagasstation.js";
import dtUbicationsPais from "../data/dtUbicationPais.js"
// import data from "../data/datapru.js"

// //clases
import { Mapa } from "./Mapa.js";
 const mapa= new Mapa()
import {Filters} from"./Filters.js"
const filters= new Filters();
esriConfig.apiKey = "AAPK3a46155e72e141f7a1e526779e26ee9eAjXhDfndw1NljGMOgVuF26eFX3-eeUXZZOyG1ndpeWqpSuegyvOx67wvbav2qGrx";





 
// elementosd el dom para poder trabajar
const input_radio=document.getElementsByName("status");
const select_option_hotels=document.getElementById("filters_option--hotels");
const select_option_gasStations=document.getElementById("filters_options--gasStations");




// function para lugares y mapa principal con sus ventanas emergentes
function MapPrincipal(view){
     let vm=mapa.createMap(Map,view,esriConfig,BasemapGallery,Expand,Search);
        let placename="Todos";
        select_option_hotels.value=placename;
        select_option_gasStations.value=placename
        let datatouris=filters.searchPlace(placename,data);
        let datahotels=filters.searchPlace(placename,dataHotels);
        let datagasstations=filters.searchPlace(placename,dataGasStations);
        let iconotouris="/utils/img/simbol/3701861.png"
        let iconohotels="/utils/img/simbol/h2-removebg-preview.png"
        let iconogasstations="/utils/img/simbol/gasolineria-removebg-preview.png"
        filters.zoomplace(vm.view,placename,dtUbicationsPais)
        
        mapa.createLayersPlace(vm.map,Graphic,datatouris,iconotouris,"touris",GraphicsLayer);
        mapa.createLayersPlace(vm.map,Graphic,datahotels,iconohotels,"hotels",GraphicsLayer);
        mapa.createLayersPlace(vm.map,Graphic,datagasstations,iconogasstations,"gasstations",GraphicsLayer);
     return vm
    }

let vm = MapPrincipal(MapView);


// evento para el swicht de cambiar de mapa normal a mapa 3D
const input_swicht=document.getElementById("Map_3D_inp");
input_swicht.addEventListener("click",()=>{
    if(input_swicht.checked){
        const form=document.getElementById("form").reset();
        vm = MapPrincipal(SceneView)
    }   else{
        const form=document.getElementById("form").reset();
        vm = MapPrincipal(MapView)
    }   
})



// evento para filtro de lugares turisticos con sus ventanas emergentes
for(let i=0;i<input_radio.length;i++){
    input_radio[i].addEventListener("click",()=>{ 
        console.log(select_option_hotels.value)
        let placename=input_radio[i].value;
        select_option_hotels.value=placename;
        select_option_gasStations.value=placename
        let datatouris=filters.searchPlace(placename,data);
        let datahotels=filters.searchPlace(placename,dataHotels);
        let datagasstations=filters.searchPlace(placename,dataGasStations);
        let iconotouris="/utils/img/simbol/3701861.png"
        let iconohotels="/utils/img/simbol/h2-removebg-preview.png"
        let iconogasstations="/utils/img/simbol/gasolineria-removebg-preview.png"
        filters.zoomplace(vm.view,placename,dtUbicationsPais)
        
        if(placename=="Ninguno"){
            vm.map.layers.removeAll()
        }else {
            // mapa.removePlaceMap(TypeView,handle)
            vm.map.layers.removeAll()
            mapa.createLayersPlace(vm.map,Graphic,datatouris,iconotouris,"touris",GraphicsLayer);
            mapa.createLayersPlace(vm.map,Graphic,datahotels,iconohotels,"hotels",GraphicsLayer);
            mapa.createLayersPlace(vm.map,Graphic,datagasstations,iconogasstations,"gasstations",GraphicsLayer);
        
        }
       
    })
}



// evento para filtro de hoteles cerca a los lugare turisticos 

    select_option_hotels.addEventListener("change",()=>{
        let placename=select_option_hotels.value;
        let datahotels=filters.searchPlace(placename,dataHotels);
        let iconohotels="/utils/img/simbol/h2-removebg-preview.png"
      
        if(placename=="Ninguno"){
            filters.removePlaceMap(vm.map,"hotels")
        }else {
            filters.removePlaceMap(vm.map,"hotels")
            mapa.createLayersPlace(vm.map,Graphic,datahotels,iconohotels,"hotels",GraphicsLayer);
        }
          
    })
    

// evento para filtro de gasolineras cerca a los lugare turisticos 

    select_option_gasStations.addEventListener("change",()=>{
        let placename=select_option_gasStations.value;
        let datagasstation=filters.searchPlace(placename,dataGasStations);
        let iconogasstations="/utils/img//simbol/gasolineria-removebg-preview.png"
        if(placename=="Ninguno"){
            filters.removePlaceMap(vm.map,"gasstations")
        }else {
            filters.removePlaceMap(vm.map,"gasstations")
            mapa.createLayersPlace(vm.map,Graphic,datagasstation,iconogasstations,"gasstations",GraphicsLayer);
        }
          
    })








                                                                                                                                                                                                                                                                                                                                                                                        










