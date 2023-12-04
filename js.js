var body = document.body
var navA=document.querySelectorAll('.left  li a')
var nav=document.querySelector('nav')
console.log(nav)



themeimg.addEventListener('click',function(){
    body.classList.toggle('bg-color')
    nav.classList.toggle('nav2')
    nav.classList.toggle('navB')
    
})