//EX1
/*
let array = Array.from({length: 5}, () => Math.floor(Math.random() *10))
document.write("L'array aleatori és ====> " + array + "<br/>")
document.write("L'array ordenat és ====> " + array.sort() + "<br/>")
document.write("El primer valor de l'array és ====> " + array[0] + "<br/>")
document.write("L'últim valor de l'array és ====> " + array[4])
*/

let array = Array.from({length: 5}, () => Math.floor(Math.random() *10))
    document.write("Array inicial ====> " + array)
let array2 = [11,33, ...array]
    document.write("<br/>Array afegint els valors de l'anterior ====> " + array2)