
import data from "../data/data.js";

export class Filters {

    constructor() {
    }

    searchPlace(placename, data) {
        let newData = {}
        if (placename == "Todos") {
            return newData = data
        } else {
            newData[placename] = data[placename];
            return newData;
        }

    }


    removePlaceMap(map, handle) {
        let items = map.layers.items
        for (let i = 0; i < items.length; i++) {
            console.log(items[i])
            if (items[i].hasHandles(handle)) {
                // console.log(items.length)
                // console.log("se borro algo")
                map.layers.remove(items[i])
            }
        }
    }

    zoomplace(view, placename, dtUbicationPais,) {

        if (placename == "Todos" || placename == "Ninguno") {
            view.goTo({
                center: [-74.663154, 5.454510],
                zoom: 1
            })

        } else {

            view.goTo({
                center: dtUbicationPais[placename],
                zoom: 4
            })
        }


    }


}

