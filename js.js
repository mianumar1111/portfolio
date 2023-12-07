var body = document.body
var navA=document.querySelectorAll('.left  li a')
var nav=document.querySelector('nav')
var themeimg = document.querySelector('#themeimg')
var progress = document.querySelector('.progress')
// console.log(themeimg)


var toggle = true;
themeimg.addEventListener('click',function(){
    body.classList.toggle('bg-color')
    nav.classList.toggle('nav2')
    nav.classList.toggle('navB')
    progress.classList.toggle('progress')
    progress.classList.toggle('progress-dark')
    
    toggle = !toggle
    if(toggle){
        themeimg.src = 'night.png'   
    }else{
        themeimg.src='day.png'
    }
})

function updateWidthOnScroll() {
    var scrollPosition = window.scrollY;
    var newWidth = (scrollPosition / (document.body.scrollHeight - window.innerHeight)) * 100;
    progress.style.width = newWidth + '%';
}

window.onscroll = function() {
    updateWidthOnScroll();
};