$(document).ready(function(){
   $(".content").hide();
   $('.showmenu').on('click',  function(e){
      e.preventDefault();
      $('body').toggleClass('menu-show');
   });
});

function open1(){
   $(".content").show();
   // if($(".content").is(":hidden")){
      // $(".content").show();
   // }else{
      // $(".content").hide();
   // }
};

function open2(){
   // $(".burgerList").show();
   if($(".burgerList").is(":hidden")){
      $(".burgerList").show();
   }else{
      $(".burgerList").hide();
   }
 };


const menuIcons = document.querySelectorAll('.menu-icon')
let isMenuOpen = false;

menuIcons.forEach((icon)=>{
  icon.addEventListener('click',()=>{
  isMenuOpen = !isMenuOpen
  isMenuOpen ? icon.classList.add('open') : icon.classList.remove('open')
})
})