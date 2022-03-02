//EX1
/*
let array = Array.from({length: 5}, () => Math.floor(Math.random() *10))
document.write("L'array aleatori és ====> " + array + "<br/>")
document.write("L'array ordenat és ====> " + array.sort() + "<br/>")
document.write("El primer valor de l'array és ====> " + array[0] + "<br/>")
document.write("L'últim valor de l'array és ====> " + array[4])
*/

//EX2
/*
let array = Array.from({length: 5}, () => Math.floor(Math.random() *10))
    document.write("Array inicial ====> " + array)
let array2 = [11,33, ...array]
    document.write("<br/>Array afegint els valors de l'anterior ====> " + array2)
*/

const array1 = [1,2,3,4,5]
const array2 = [1,2,3,4,5,6,7]
const arrayFusionat = array1.concat(array2);
const arrayFinal = new Set (arrayFusionat);
console.log(arrayFinal)

