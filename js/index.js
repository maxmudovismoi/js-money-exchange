let btn = document.getElementById("btn");



btn.addEventListener ("click", function(){
 let summ = document.getElementById("summ").value;
let rubl = document.getElementById("rubl");
let dollar = document.getElementById("dollar");
 dollar .value = summ / 11015;
 rubl.value = summ /100; 
});