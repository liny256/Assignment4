
// center of R goes left
var capR = document.getElementById('circle-in')

capR.addEventListener('click',AddAnimation)

capR.addEventListener('mouseup',RemoveClass)

function RemoveClass(){
  setTimeout(DeleteAnimation, 1000);
}

function AddAnimation(){
  capR.classList.add("circle-in-left");
}

function DeleteAnimation(){
  capR.classList.remove("circle-in-left");
}

//O gets red
var capO = document.getElementById('outer-o')

capO.addEventListener('mouseover',AddRed);

capO.addEventListener('mouseout',RemoveRed);

function AddRed(){
  capO.style.backgroundColor='red';
}

function RemoveRed(){
  capO.style.backgroundColor='white';
}

//central stroke of A changes in dynamic color
function RandomBgColor(){
  var aInside= document.getElementById('tri-in');
  var random=Math.random();
  console.log(random);
  if (random<0.4){
    aInside.style.borderBottom="220px solid #7c37c9";
  }
  else{
    aInside.style.borderBottom="220px solid #4a8652";
  }
}
RandomBgColor()


//inner circle of the O getting huge
var capO2 =document.getElementById('inner-o')

capO2.addEventListener('click',Larger);

function Larger(){
  capO2.classList.add('huge');
}
