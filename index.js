/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
//let givenNumber = " "
//localStorage.setItem("fromuser", givenNumber);
let fromuser = localStorage.getItem("fromuser");
console.log(fromuser)
function example() {
      let btn = document.querySelector("#convert");
      btn.onclick = function() {
         let givenNumber = document.querySelector("#inputNumber").value;
         localStorage.setItem("fromuser", givenNumber);
         meterFeet()
      };
   }
   example()
   //console.log(givenNumber);
   const length = document.getElementById("header-length")
   const Volume = document.getElementById("header-Volume")
   const mass = document.getElementById("header-mass")
function meterFeet() {
    let meter = (3.281 * Number(fromuser)).toFixed(3)
    let feet = (Number(fromuser) / 3.281).toFixed(3)
    length.innerHTML  = `${fromuser} meters = ${meter} feet | ${fromuser} feet = ${feet} meters`
    litersGallons()
    kilogramsPounds()
   }
function litersGallons() {
    let liter = (0.264 * Number(fromuser)).toFixed(3)
    let gallons = (Number(fromuser) / 0.264).toFixed(3)
    Volume.innerHTML  = `${fromuser} liters = ${liter} gallons | ${fromuser} gallons = ${gallons} meters`
   }
   function kilogramsPounds() {
    let kilograms = (2.204 * Number(fromuser)).toFixed(3)
    let pounds = (Number(fromuser) / 2.204).toFixed(3)
    mass.innerHTML  = `${fromuser} kilos = ${kilograms} pounds | ${fromuser} pounds = ${pounds} kilos`
   }    
  //meterFeet() 
   
   
   