
// center of R goes left
var capR = document.getElementById('circle-in') //create a variable that fetches a element that has the ID of 'circle-in'

capR.addEventListener('click',AddAnimation)//make the variable capR listen to a click
//when the click happened, do function 'AddAnimation'

capR.addEventListener('mouseup',RemoveClass)//make the variable capR listen to mouse up, when the mouse is not clicking anymore
//when the mouse is no longer clicking, do function 'RemoveClass'

function RemoveClass(){
  setTimeout(DeleteAnimation, 1000);
}
//set the relay for function DeleteAnimation to 1 second

function AddAnimation(){
  capR.classList.add("circle-in-left");
}
//create a function called AddAnimation, that add class "circle-in-left" to the variable capR
function DeleteAnimation(){
  capR.classList.remove("circle-in-left");
}
//create a function called DeleteAnimation, that remove class "circle-in-left" from the variable capR


//O gets red
var capO = document.getElementById('outer-o')//define a variable called capO, fetch the element from the html file that has the id of 'outer-o'

capO.addEventListener('mouseover',AddRed);//make variable capO listen to a click, then activate function AddRed

capO.addEventListener('mouseout',RemoveRed);//make variable capO listen to mouse up, the time when the mouse is no longer clicking, then activate function RemoveRed

function AddRed(){
  capO.style.backgroundColor='red';
}
//create a function that changes the background color of variable capO to red
function RemoveRed(){
  capO.style.backgroundColor='white';
}
//create a function that changes the background color of variable capO to white


//central stroke of A changes in dynamic color

//create a function that generates random background color of something
function RandomBgColor(){
  var aInside= document.getElementById('tri-in');//define a variable called aInside, fetch the element that has an Id called 'tri-in'
  var random=Math.random(); //define a variable called 'random', 'random'equals to the random number that is generated by function "Math.random()"
  console.log(random);//generate random number in console
  //define an if else situation
  if (random<0.4){
    aInside.style.borderBottom="220px solid #7c37c9";
  }
  //when the random variable generated by Math.random function is smaller than 0.4, the borderBottom style of variable aInside is going to be 220px thick, solid style and color purple
  else{
    aInside.style.borderBottom="220px solid #4a8652";
  }
  //otherwise, the borderBottom style of variable aInside is going to be 220px thick, solid style and color green
}
RandomBgColor()//call the function


//inner circle of the O getting huge
var capO2 =document.getElementById('inner-o')//define a variable called capO2, fetch an element has the id of 'inner-o'

capO2.addEventListener('click',Larger);//make variable capO2 listen to a click, then activate funtion 'Larger'

//define function Larger
function Larger(){
  capO2.classList.add('huge');
}
//add a class called 'huge'to the element that is represented by capO2 variable
