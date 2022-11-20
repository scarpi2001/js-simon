//FUNZIONI
//numero random min max
function randomNumMinMax (min, max){
    return Math.floor(Math.random() * (max - min) + min);
}

//crea array di tot(es.16) numeri unici scegliendoli randomicamente da un totale di tot(es.100) numeri
function arrRandomNumMinMax (howMany, numMin, numMax) {
    const array = [];

    while(array.length < howMany) {
        let numero = randomNumMinMax(numMin, numMax);
        
        if (!array.includes(numero)) {
            array.push(numero);
        }
    }
    
    return array;
    
}

//crea array di tot numeri unici prendendoli dall'input dell'utente
function arrInput (howMany, input) {
    const array = [];

    while(array.length < howMany) {
        
        if (!array.includes(input)) {
            array.push(input);
        }
    }
    
    return array;
    
}

//crea input
function createInput(type, value, id) {
    const newElement = document.createElement("input");
    newElement.type = type;
    newElement.value = value;
    newElement.id = id;
    
    return newElement;
}