
const preloader = document.querySelector('.loading--container')
const headerA = document.querySelector('.hero--header--a h1')
const headerB = document.querySelector('.hero--header--b h1')

window.addEventListener('load',()=>{
    preloader.style.animation = "loader 1.5s ease forwards"
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    headerA.classList.add('slide-in-bottom')
    headerB.classList.add('slide-in-top')
    document.getElementById('progress-value').classList.add('text-focus-in')
    document.getElementById('menuBtn').classList.add('text-focus-in')
})

const cursor = document.querySelector('.cursor');
const cursorScale = document.querySelectorAll('.cursor-scale')
let mouseX = 0;
let mouseY = 0;

gsap.to({},0.016,{
    repeat:-1,

    onRepeat: function(){
        gsap.set(cursor,{
            css:{
                left: mouseX,
                top: mouseY
            }
        })
    }
})

window.addEventListener("mousemove",(e)=>{
    mouseX = e.clientX
    mouseY = e.clientY
})

cursorScale.forEach(link=>{
    link.addEventListener('mouseleave',()=>{
        cursor.classList.remove('cursor-grow');
        cursor.classList.remove('cursor-grow-small');
        cursor.classList.remove('cursor-display-none');
    })
    link.addEventListener('mousemove',()=>{
        cursor.classList.add('cursor-grow')
        if(link.classList.contains('cursor-small')){
            cursor.classList.remove('cursor-grow')
            cursor.classList.add('cursor-grow-small')
        }
        else if(link.classList.contains('cursor-none')){
            cursor.classList.remove('cursor-grow')
            cursor.classList.remove('cursor-grow-small')
            cursor.classList.add('cursor-display-none')
        }
    })
})