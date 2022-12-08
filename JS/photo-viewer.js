
 const img = document.getElementsByClassName('thumb');
 for(i=0;i<img.length;i++){
 img[i].addEventListener('click', function(e){
         e.preventDefault();
     })
}

 function imgEnlarge(imgs) {
 let selectedImg = document.getElementById("openImage");
 selectedImg.src = imgs.src;
} 