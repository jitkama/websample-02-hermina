const hamburger = document.getElementById('hamburger');
const hamburgerLine = document.querySelectorAll('.hamburger-line');
const hamLinesArr = Array.from(hamburgerLine);
const navMenuMobile = document.getElementById('nav-menu-menu');
const images = Array.from(document.querySelectorAll('.galerie-img'));

// hamburger menu
hamburger.addEventListener('click',function(){
   hamLinesArr.forEach(function(item){
      item.classList.toggle('change');
   });
   navMenuMobile.classList.toggle('change');
   console.log(navMenuMobile.classList);
})

// image gallery - display modal window
let x;
for (x=0; x < images.length; x++){
   images[x].addEventListener('click',function(item){
      console.log(item);
   })
}

// copyright - date
const todayis = document.getElementById('todayis');
todayis.innerText = new Date().getFullYear();

