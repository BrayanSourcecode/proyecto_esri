export class Mapa {
  constructor() {
    this.apiKey = "AAPK3a46155e72e141f7a1e526779e26ee9eAjXhDfndw1NljGMOgVuF26eFX3-eeUXZZOyG1ndpeWqpSuegyvOx67wvbav2qGrx";
  }

  createMap(Map, TypeView, esriConfig, BasemapGallery, Expand, Search) {

    esriConfig.apiKey = this.apiKey
    // base del mapa
    const map = new Map({
      basemap: "arcgis-streets-night"  // Basemap layer service // hay varias bases
    });

    const view = new TypeView({
      map: map,
      center: [-74.663154, 5.454510],
      zoom: 2,
      container: "map"
    });

    // agregamos el widget de  galria para que el usuario escoja el tipo de mapa que quiera
    const basemapgallery = new BasemapGallery({
      view: view,

    });
    const expand = new Expand({
      expandIconClass: "esri-icon-layer-list",
      view: view,
      content: basemapgallery,
    });

    view.ui.add(expand, "bottom-right");
    //barra de buscar
    const searchWidget = new Search({
      view: view
    });

    view.ui.add(searchWidget, "top-right");

    return view

  }


  createLayersPlace(view, Graphic, newData, icono,handle) {
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

        // creamos la nueva capa o grafico
        var graphicMap = new Graphic({
          //le pasamos el tipo de geometria  y las ubicacionesd e los puntos
          geometry: {
            Handles: "tr",
            type: "point",
            longitude: newData[keysi[i]][keysj[j]]["ubication"][0],
            latitude: newData[keysi[i]][keysj[j]]["ubication"][1]
          },

          //le pasamos elsimbolo y el tama;o y el icono en cada punto
          symbol: {
            type: "picture-marker",
            url: icono,
            width: "50px",
            height: "50px",
          },

          //pasamos la informacion de cada lugar para mostararla en una venta emergente
          popupTemplate: {
            title: newData[keysi[i]][keysj[j]]["title"],
            content: [
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
        graphicMap.addHandles("touris",handle)
        view.graphics.add(graphicMap);
      }
    }

  }

  removePlaceMap(view,handle) {
    let items=view.graphics.items
    for (let i = items.length - 1; i >= 0; i--) {
      // console.log(i)
      if (items[i].hasHandles(handle)) {
        // console.log(items.length)
        // console.log("se borro algo")
        view.graphics.remove(items[i])
      }
    }
  }
  // parentesis de clase
}





