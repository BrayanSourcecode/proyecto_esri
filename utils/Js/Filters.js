
import data from "../data/data.js";

export class Filters {
    
    constructor(){
    }

    searchPlace(placename,data) {
        let newData={}
        if(placename=="Todos"){
            return newData=data
        }else{
                newData[placename]=data[placename];
                return newData;       
            }
    
    }




}

