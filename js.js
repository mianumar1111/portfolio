var body = document.body
var navA=document.querySelectorAll('.left  li a')
var nav=document.querySelector('nav')
var themeimg = document.querySelector('#themeimg')
// console.log(themeimg)


var toggle = true;
themeimg.addEventListener('click',function(){
    body.classList.toggle('bg-color')
    nav.classList.toggle('nav2')
    nav.classList.toggle('navB')
    
    toggle = !toggle
    if(toggle){
        themeimg.src = 'night.png'   
    }else{
        themeimg.src='day.png'
    }
    // console.log(toggle)
})