

const meditationImg = document.querySelector('.meditation--img')
const mailContainer = document.querySelector('.contact--personal--container')

meditationImg.addEventListener('click',()=>{
    meditationImg.style.display = "none"
    mailContainer.style.display = "flex"
})

const projectlinks = document.querySelectorAll('.project--content--name')
const projectAtab = document.querySelectorAll('.project--tab--container')
const projectTab = document.querySelectorAll('project--tab')

projectlinks[0].addEventListener('click',()=>{
    projectAtab[0].style.transform = "translateY(0%)";
})
projectlinks[1].addEventListener('click',()=>{
    projectAtab[1].style.transform = "translateY(0%)";
})
projectlinks[2].addEventListener('click',()=>{
    projectAtab[2].style.transform = "translateY(0%)";
})
projectlinks[3].addEventListener('click',()=>{
    projectAtab[3].style.transform = "translateY(0%)";
})
document.getElementById('closeA').addEventListener('click',()=>{
    projectAtab[0].style.transform = "translateY(100%)";
})
document.getElementById('closeB').addEventListener('click',()=>{
    projectAtab[1].style.transform = "translateY(100%)";
})
document.getElementById('closeC').addEventListener('click',()=>{
    projectAtab[2].style.transform = "translateY(100%)";
})
document.getElementById('closeD').addEventListener('click',()=>{
    projectAtab[3].style.transform = "translateY(100%)";
})

const eyeball = document.querySelector('.hero--eyeball');
const eye = document.querySelector('hero--eye')
//document.querySelector('#firstSection').addEventListener('mousemove',)
document.onmousemove = () =>{
    const x = event.clientX*100/window.innerWidth+"%"
    const y = event.clientY*100/window.innerHeight+"%"
    eyeball.style.left = x;
    eyeball.style.top = y;
    eye.style.transform = "translate(-"+x+",-"+y+")"
}

const copyMail = ()=>{
    let copyText = document.getElementById("emailID");
    navigator.clipboard.writeText(copyText.innerHTML);
    copyText.innerHTML = "Copied to Clipboard";
    document.getElementById('copyBtn').style.display = "none";
}

document.querySelectorAll('#backtotop').forEach(item => {
    item.addEventListener('click', () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    })
})

