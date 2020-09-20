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
})

// scrollY - show navigation button: ARROW UP
const scrollBtn = document.getElementById('scrollnav');
window.addEventListener("scroll", (event) => {
   let scroll = this.scrollY;
   if(scroll > window.innerHeight){
      scrollBtn.classList.add('change');
   }else{
      scrollBtn.classList.remove('change');
   }
});

// image gallery - display modal window
const modal = document.getElementById('modal');
const modalBtn = document.querySelector('.modal-window_close');
const modalImg= document.getElementById('modal-image');
let x;
for (x=0; x < images.length; x++){
   images[x].addEventListener('click',function(item){
      const imgSource = item.path[0].attributes[0].nodeValue;
      modalImg.src = imgSource;
      modal.classList.toggle('display');
   });
   modalBtn.addEventListener('click',function(){
      modal.classList.remove('display');
   })
}


// copyright - date
const todayis = document.getElementById('todayis');
todayis.innerText = new Date().getFullYear();

