const ubica={
    Dorada:"-74.663154,5.454510",
    2:"-74.663154,5.454510",
    3:"-74.663154,5.454510"
}

class Filters{
turism () {
    const option=document.getElementsByName("status");
    for(let i=0;i<option.length;i++){
        option[i].addEventListener("click",()=>{
            if(option) {
                console.log(option[i].value);
                let Value_opt=option[i].value;
                console.log(Value_opt)
                let pru=ubica[`${Value_opt}`];
                console.log(pru)
            } else {
                console.log("no hay chaeck");
            }
        });
    };
};

gas_stations(){

}

restaurant(){

}

}

let prueba =new Filters();

prueba.turism();