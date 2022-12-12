//unhide thumbnails element
document.addEventListener("DOMContentLoaded", function(){
    let thumbnails = document.getElementById('thumbnails');
    thumbnails.style.display = 'block';
});


 //array loop to deactivate clickable links of thumbnails and reveal photo-viewer
 const img = document.getElementsByClassName('thumb');
 for(i=0;i<img.length;i++){
 img[i].addEventListener('click', function(e){
         e.preventDefault();
         let view = document.getElementById('photo-viewer');
        view.style.display = 'block';
     });
}


//function to enlarge thumbnails and place them in photo-viewer
function imgEnlarge(imgs) {
    let selectedImg = document.getElementById("openImage");
    selectedImg.src = imgs.src;
   } 

//function to make photo-viewer disappear after being clicked
let view = document.getElementById('photo-viewer');
view.addEventListener('click', function(){
    view.style.display = 'none';
});

