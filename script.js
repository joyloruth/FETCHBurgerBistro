var images = [
  "burger-slides/burgerslide1.jpeg",
  "burger-slides/burgerslide2.jpg",
  "burger-slides/burgerslide3.jpg",
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
})