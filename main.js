/*var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");*/
canvas = document.getElementById('myCanvas');
 ctx = canvas.getContext("2d");
var car_width = 202;
var car_height = 110;
var background_image = "BackgroundCar.jpg";
var car1X = 20;
var car1Y = 20;
var car2X = 20;
var car2Y = 330;

var car1Image = "Car1.png";
var car2Image = "Car2.png";

function add(){
    console.log("I am inside add() function!");
    background_object = new Image();
    background_object.onload = canvas_bg;
    background_object.src = background_image;

    car1_object = new Image();
    car1_object.onload = canvas_Car1;
    car1_object.src = car1Image;

    car2_object = new Image();
    car2_object.onload = canvas_Car2;
    car2_object.src = car2Image;
}

function canvas_bg(){
    console.log("I am inside canvas_bg() function!");
    ctx.drawImage(background_object, 0, 0, canvas.width, canvas.height);
    
}
function canvas_Car1(){
    ctx.drawImage(car1_object, car1X, car1Y ,car_width, car_height);
}

function canvas_Car2(){
    ctx.drawImage(car2_object, car2X, car2Y ,car_width, car_height);
}

window.addEventListener("keydown", userKeydown);

function userKeydown(e){
    console.log("I am inside userKeydown() function!");
    if (e.keyCode == "38"){
       upCar1();
       console.log("User clicked on the \"up\" key");
    }
    else if (e.keyCode == "39"){
     rightCar1();
     console.log("User clicked on the \"right\" key");
    }
    else if (e.keyCode == "37"){
        leftCar1();
        console.log("User clicked on the \"left\" key");
       }
    else if (e.keyCode == "81"){
        rightCar2();
        console.log("User clicked on the \"Q\" key");
       }
       else if (e.keyCode == "87"){
        leftCar2();
        console.log("User clicked on the \"W\" key");
       }
       else if (e.keyCode == "69"){
           upCar2();
           console.log("User clicked on the \"E\" key");
          }
       else if (e.keyCode == "82"){
           downCar2();
           console.log("User clicked on the \"R\" key");
          }
          else if (e.keyCode == "40"){
            downCar1();
            console.log("User clicked on the \"down\" key");
           }
    
}
function upCar1(){
if (car1Y >= 0){
   car1Y = car1Y - 10 ;
   console.log("x = " + car1X + "|" + "y = " + car1Y);
   canvas_bg();
   canvas_Car1();
   canvas_Car2();
}
}
function rightCar1(){
    if (car1X <= 598)  {
        car1X = car1X + 10;
        console.log("x = " + car1X + "|" + "y = " + car1Y);
        canvas_bg();
        canvas_Car1();
        canvas_Car2();
    }  
    if (car1X >= 598){
         console.log("Car 1 (dark blue) won !!!!")
         document.getElementById("gameStatus").innerHTML = "Car 1 (dark blue) won !!!!"
    }
}
function leftCar1(){
   if (car1X >= 0){
       car1X = car1X - 10;
       console.log("x = " + car1X + "|" + "y = " + car1Y);
       canvas_bg();
       canvas_Car1();
       canvas_Car2();
   }
}
function downCar1(){
    if (car1Y <= 490){
        car1Y = car1Y + 10;
        console.log("x = " + car1X + "|" + "y = " + car1Y);
        canvas_bg();
        canvas_Car1();
        canvas_Car2();
     }   
}
function upCar2(){
    if (car2Y >= 0){
        car2Y = car2Y - 10 ;
        console.log("x = " + car2X + "|" + "y = " + car2Y);
        canvas_bg();
        canvas_Car1();
        canvas_Car2();
     }
     
}
function rightCar2(){
  if (car2X <= 598)  {
      car2X = car2X + 10;
      console.log("x = " + car2X + "|" + "y = " + car2Y);
      canvas_bg();
      canvas_Car1();
      canvas_Car2();
  }
  if (car2X >= 598){
    console.log("Car 2 (Turquoise) won !!!!")
    document.getElementById("gameStatus").innerHTML = "Car 2 (Turquoise) won !!!!"
}
}
function leftCar2(){
    if (car2X >= 0){
        car2X = car2X - 10;
        console.log("x = " + car2X + "|" + "y = " + car2Y);
        canvas_bg();
        canvas_Car1();
        canvas_Car2();
    }  
}
function downCar2(){
    if (car2Y <= 490){
        car2Y = car2Y + 10;
        console.log("x = " + car2X + "|" + "y = " + car2Y);
        canvas_bg();
        canvas_Car1();
        canvas_Car2();
     }      
}

