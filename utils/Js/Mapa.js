export class Mapa {
  constructor() {
    this.apiKey = "AAPK3a46155e72e141f7a1e526779e26ee9eAjXhDfndw1NljGMOgVuF26eFX3-eeUXZZOyG1ndpeWqpSuegyvOx67wvbav2qGrx";
  }

  createMap(Map, TypeView, esriConfig,BasemapGallery,Expand,Search) {

    esriConfig.apiKey = this.apiKey
    // base del mapa
    const map = new Map({
      basemap:"arcgis-streets-night"  // Basemap layer service // hay varias bases
    });

    const view = new TypeView({
      map: map,
      center: [-74.663154, 5.454510],
      zoom:2,
      container: "map"
    });

    // agregamos el widget de  galria para que el usuario escoja el tipo de mapa que quiera
   const basemapgallery=new BasemapGallery({
    view: view,
   
  });
    const expand=new Expand({
      expandIconClass:"esri-icon-layer-list",
      view:view,
      content:basemapgallery,
    });

    view.ui.add(expand,"bottom-right");
//barra de buscar
  const searchWidget = new Search({
    view: view
  });

  view.ui.add(searchWidget,"top-right");

    return view

  } 


  createLayersPlace(view,Graphic,newData) {
    // one capa
    // agregamos las capas al mapa
    let keysi = Object.keys(newData);
    // console.log(valu[0])
    // console.log(newData["Dorada"]["park_simon"]["ubication"])
    for (let i = 0; i < keysi.length; i++) {
      let keysj = Object.keys(newData[keysi[i]])
      // console.log(keysj)
      for (let j = 0; j < keysj.length; j++) {
        let keysy = Object.keys(newData[keysi[i]][keysj[j]])
        console.log(keysy)
        

// creamos la nueva capa o grafico
        const graphicMap =new Graphic({
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
              width: "50px",
              height: "50px",
              color: "red",
              outline: {
                color: [155, 155, 155],
                width: 10
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
        
        view.graphics.add(graphicMap);
        
    }
  }




  }
  

// parentesis de clase
}





