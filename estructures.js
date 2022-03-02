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

//EX3
/*
const array1 = [1,2,3,4,5]
const array2 = [1,2,3,4,5,6,7]
const arrayFusionat = array1.concat(array2);
const arrayFinal = new Set (arrayFusionat);
console.log(arrayFinal)
*/

var array1 = [1,2,3,5,7,9]
var array2 = [1,2,4,5,8,10]
const arrayfusionat = array1.concat(array2);
var array3 = []
var a= 0
for (i = 0; i < arrayfusionat.length; i++){
  if(array1[i] != array2[i]){
    array3[a] = array1[i]
    a++
  }
  if(array1[i] != array2[i]){
    array3[a] = array2[i]
    a++
  }
}
document.write("Primer array<br>" + array1 + "<br>")
document.write("Segon array<br>" + array2 + "<br>") 
  
document.write("Array sense repeticions <br>" + array3)


