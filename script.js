var images = [
  "burger-menu/baconburger.png",
  "burger-menu/bluecheeseburger.png",
  "burger-slides/classicburger.jpg",
]
var i = 0;
var time = 3500;
function setImage(){
  console.log(i);
  document.slide.src = images[i];
}

window.onload=viewSlide;





function viewSlide(){

  if(i < images.length - 1){
    i++;
  }
  else{
    i = 0;
  }

  setImage();
  setTimeout("viewSlide()",time);

}

var rightBtn = document.getElementById("right");
rightBtn.addEventListener("click", function(){
  
  if(i < images.length - 1){
    i++;
  }
  else{
    i = 0;
  }

  setImage();
})

var leftBtn = document.getElementById("left");
leftBtn.addEventListener("click", function(){
  if(i > 0){
    --i;
  }

  else{
    i = images.length -1;
  }
  
  setImage();
});

function initMap(){
  var location = {lat: 36.193180, lng: -86.803740};
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4, 
    center: location
  });
}

console.log("print");
