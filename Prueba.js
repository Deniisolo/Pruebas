//Implementa una función que compruebe si dos strings son anagramas entre ellos, es decir, 
//si los dos tienen las mismas letras, con el mismo número de apariciones, 
//pero en un orden diferente, ejemplo amor y roma, presa y pesar, tinieblas y sibilante.
//  function anagramas(string1, string2) {

//    }
// console.log("amor"); //true
//   console.log(anagramas("tinieblas", "sibilante")); //true
//   console.log(anagramas("carol", "zero")); //false
//   console.log(anagramas("caro", "zero")); //false

//Deben crear 5 funciones con promesas, cada una de las 5 funciones debe retornar una parte del cuerpo (pies, cabeza, manos) 
//en una funcion asincrona deben llamar a estas 5 funciones y el resultado de esas 5 funciones unirlas en un objeto e imprimir en consola
async function simulacionApiCabeza(){
    return {cabeza: "cabeza"}
}
async function simulacionApiBrazos(){
    return {brazos: "brazos"}
}
async function simulacionApiTronco(){
    return {tronco: "tronco"}
}
async function simulacionApiPiernas(){
    return {piernas: "piernas"}
}
async function simulacionApiOjos(){
    return {ojos: "ojos"}
}
async function llamarApi(){
    const result = (await simulacionApiCabeza()).cabeza;
    const resultdos = (await simulacionApiBrazos()).brazos;
    const resulttres = (await simulacionApiTronco()).tronco;
    const resultcuatro = (await simulacionApiPiernas()).piernas;
    const resultcinco = (await simulacionApiOjos().ojos);
    console.log(result,resultdos, resulttres, resultcuatro, resultcinco)
}
llamarApi()
