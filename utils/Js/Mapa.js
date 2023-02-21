 export class Mapa{
    constructor(base){
      this.base=base;
      this.apiKey="AAPK3a46155e72e141f7a1e526779e26ee9eAjXhDfndw1NljGMOgVuF26eFX3-eeUXZZOyG1ndpeWqpSuegyvOx67wvbav2qGrx";
    }

    createMap(Map,MapView,esriConfig){

      esriConfig.apiKey=this.apiKey
      // base del mapa
      const map = new Map({
        basemap: this.base // Basemap layer service // hay varias bases
      });

      //visualizacion del mapa
      const view = new MapView({
        map: map,
        center:[-74.663154,5.454510], 
        zoom: 7, 
        container:"map" 
      });
      return map

    }23

    // resetMap(){
    //  
    // }
    createLayers(map,GraphicsLayer,Graphic,newData){
      //one capa
      // agregamos las capas al mapa
      const graphicsLayer = new GraphicsLayer(); 
      map.add(graphicsLayer);
      
      let keys=Object.keys(newData);
      // console.log(valu[0])
      for(let i=0; i <keys.length;i++){
              let subKeys=Object.keys(newData[keys[i]])
              // console.log(objec2)
          for(let j=0;j<subKeys.length;j++){
             const graphicMap = new Graphic({
                    geometry:{ type: "point",
                      longitude:newData[keys[i]][subKeys[j]][0],
                      latitude:newData[keys[i]][subKeys[j]][1]
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

