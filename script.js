var  images = ['slidergang1.png','slidergang2.png','slidegang3.png','rijksMuseum.jpg','rijksmuseumdonker.png'];
var i =0;
  function slideShow() {
    document.getElementById("img-slider").src=images[i];

    if(i<images.length-1){
      i++;
    }
    else {
      i=0;
    }
    setTimeout("slideShow()" , 5000);
  }
  window.onload= slideShow();
