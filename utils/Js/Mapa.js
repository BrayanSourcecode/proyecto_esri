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
      zoom: 1,
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
    
// retonamos la vista y el mapa para poder utilizarlos
    return { map: map, view: view }

  }


  createLayersPlace(map, Graphic, newData, icono, handle, GraphicsLayer) {
    // sacamos las claves principales del objecto
    let keysi = Object.keys(newData);
    // creamos un array para guardar todos los graficos 
    let newGraphics = []
    // comensamos el recoorido
    for (let i = 0; i < keysi.length; i++) {
      // haora sacamos las clasmes de cada uno de los paises
      let keysj = Object.keys(newData[keysi[i]])
      // entramos en otro bucle a recorer las otras claves
      for (let j = 0; j < keysj.length; j++) {
        // haora por cada ubicacion creamos un graphico
        var graphics = new Graphic({
          // attributes: {
          //   title:newData[keysi[i]][keysj[j]]["title"],
          //   description: newData[keysi[i]][keysj[j]]["description"]
          // },
          geometry: {
            type: "point",
            longitude: newData[keysi[i]][keysj[j]]["ubication"][0],
            latitude: newData[keysi[i]][keysj[j]]["ubication"][1]
          },
          symbol: {
            type: "picture-marker",
            url: icono,
            width: "40px",
            height: "40px",
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
        // agremaos el graphico que se creo ala matriz que se habia creado
        newGraphics.push(graphics)
      }
    }


    // agregamos los graficos ala capa
    const graphicsLayer = new GraphicsLayer({ graphics: newGraphics })
    // agregamos un identificador ala capa
    graphicsLayer.addHandles("touris", handle)
    // agregamos al capa al mapa
    map.add(graphicsLayer);

  }
}





