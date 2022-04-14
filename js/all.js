// $(document).ready(function() {
//    $(".content").hide();
// });

// function open(){
//    $(".content").show();
// };


const menuIcons = document.querySelectorAll('.menu-icon')
let isMenuOpen = false;

menuIcons.forEach((icon)=>{
  icon.addEventListener('click',()=>{
  isMenuOpen = !isMenuOpen
  isMenuOpen ? icon.classList.add('open') : icon.classList.remove('open')
})
})