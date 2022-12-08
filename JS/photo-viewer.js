
 
 
 const img = document.getElementsByClassName('thumb');
 for(i=0;i<img.length;i++){
 img[i].addEventListener('click', function(e){
         e.preventDefault();
         let view = document.getElementById('photo-viewer');
        view.style.display = 'block';
     })
}

let view = document.getElementById('photo-viewer');
view.addEventListener('click', function(){
    view.style.display = 'none';
})

 function imgEnlarge(imgs) {
 let selectedImg = document.getElementById("openImage");
 selectedImg.src = imgs.src;
} 