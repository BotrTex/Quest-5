console.log("Welcome to the Menu Screen!");
var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');

c.font = "30px Arial";
c.fillText("Welcome to the menu", 300, 70);
c.fillText("1 - 2 - 3 - 4 - 5", 300, 120);

//var number = 0;
//number = prompt("Select what number you want");
//console.log(number);


