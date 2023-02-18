

class Filters {

    touris() {
        // let option = document.querySelector('input[name="status"]:checked');
        let option = document.getElementsByName("status");
        for (let i = 0; i < option.length; i++) {
            option[i].addEventListener("click", () => {
                if (option) {
                    let valueOpt = option[i].value;
                    // console.log(valueOpt)
                    return valueOpt
                } 
                  });
        };
       
    };

    gas_stations() {

    }

    restaurant() {

    }

}

let prueba = new Filters();

console.log(prueba.touris());