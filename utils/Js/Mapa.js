export class Mapa {
  constructor() {
    this.apiKey = "AAPK3a46155e72e141f7a1e526779e26ee9eAjXhDfndw1NljGMOgVuF26eFX3-eeUXZZOyG1ndpeWqpSuegyvOx67wvbav2qGrx";
  }

  createMap(Map, MapView, esriConfig) {

    esriConfig.apiKey = this.apiKey
    // base del mapa
    const map = new Map({
      basemap: "arcgis-navigation"  // Basemap layer service // hay varias bases
    });

    //visualizacion del mapa
    const view = new MapView({
      map: map,
      center: [-74.663154, 5.454510],
      zoom: 7,
      container: "map"
    });
    return map

  } 23


  createLayersPlace(map, GraphicsLayer, Graphic, newData) {
    //one capa
    // agregamos las capas al mapa
    const graphicsLayer = new GraphicsLayer();
    map.add(graphicsLayer);

    let keysi = Object.keys(newData);
    // console.log(valu[0])
    // console.log(newData["Dorada"]["park_simon"]["ubication"])
    for (let i = 0; i < keysi.length; i++) {
      let keysj = Object.keys(newData[keysi[i]])
      // console.log(keysj)
      for (let j = 0; j < keysj.length; j++) {
        let keysy = Object.keys(newData[keysi[i]][keysj[j]])
        

// creamos el la nueva capa o grafico
        const graphicMap = new Graphic({
          //le pasamos el tipo de geometria  y las ubicacionesd e los puntos
          geometry: {
            type: "point",
            longitude: newData[keysi[i]][keysj[j]]["ubication"][0],
            latitude: newData[keysi[i]][keysj[j]]["ubication"][1]
          },

          //le pasamos elsimbolo y el tama;o y el icono en cada punto
          symbol: {
            type: "picture-marker",
            url: "/utils/img/simbol/3701861.png",
            width: "70px",
            height: "70px",
            color: "red",
            outline: {
              color: [255, 255, 255], // White
              width: 1
            }
          },

          //pasamos la informacion de cada lugar para mostararla en una venta emergente
          popupTemplate:{
              title:newData[keysi[i]][keysj[j]]["title"],
              content:[
                {
                  type: "text", 
                  text: newData[keysi[i]][keysj[j]]["description"]
                },
                {
                  type: "media", // MediaContentElement
                  mediaInfos: [
                    {
                      type: "image",
                      value: {
                        sourceURL:
                        newData[keysi[i]][keysj[j]]["img"]
                      }
                    }
                  ]
                }
              ]
            }

        });
        graphicsLayer.add(graphicMap);
        
    }
  }




  }
   
// parentesis de clase
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

