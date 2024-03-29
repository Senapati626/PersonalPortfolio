
gsap.registerPlugin(ScrollTrigger)

const setupScrollAnimation = ()=>{
    const tl = gsap.timeline()

    tl.to('#firstPointer',{scaleX:1,
        scrollTrigger:{
            trigger:"#firstPointer",
            start:"top bottom",
            end:"+=500",
            scrub:2,
    }})
    tl.to('#firstContent',{opacity:1,
        scrollTrigger:{
            trigger:"#firstPointer",
            start:"top bottom",
            end:"+=500",
            scrub:2,
    }},1)
    tl.to('#secondPointer',{scaleX:1,
        scrollTrigger:{
            trigger:"#secondPointer",
            start:"top bottom",
            end:"+=500",
            scrub:2,
    }})
    tl.to('#secondContent',{opacity:1,
        scrollTrigger:{
            trigger:"#secondPointer",
            start:"top bottom",
            end:"+=500",
            scrub:2,
    }},1)
    tl.to('#thirdPointer',{scaleX:1,
        scrollTrigger:{
            trigger:"#thirdPointer",
            start:"top bottom",
            end:"+=500",
            scrub:2,
    }})
    tl.to('#thirdContent',{opacity:1,
        scrollTrigger:{
            trigger:"#thirdPointer",
            start:"top bottom",
            end:"+=500",
            scrub:2,
    }},1)
    tl.to('#fourthPointer',{scaleX:1,
        scrollTrigger:{
            trigger:"#fourthPointer",
            start:"top bottom",
            end:"+=500",
            scrub:2,
    }})
    tl.to('#fourthContent',{opacity:1,
        scrollTrigger:{
            trigger:"#fourthPointer",
            start:"top bottom",
            end:"+=500",
            scrub:2,
    }},2)
    tl.to('#fifthPointer',{scaleX:1,
        scrollTrigger:{
            trigger:"#fifthPointer",
            start:"top bottom",
            end:"+=500",
            scrub:2,
    }})
    tl.to('#fifthContent',{opacity:1,
        scrollTrigger:{
            trigger:"#fifthPointer",
            start:"top bottom",
            end:"+=500",
            scrub:2,
    }},2)
    tl.to('#firstworkflow',{rotate: 0, opacity: 1,
        scrollTrigger:{
            trigger:"#firstworkflow",
            start:"top bottom",
            end:"+=500",
            scrub:2,
    }},2)
    tl.to('#secondworkflow',{rotate: 0, opacity: 1,
        scrollTrigger:{
            trigger:"#secondworkflow",
            start:"top bottom",
            end:"+=500",
            scrub:2,
    }},2)
    tl.to('#thirdworkflow',{rotate: 0, opacity: 1,
        scrollTrigger:{
            trigger:"#thirdworkflow",
            start:"top bottom",
            end:"+=500",
            scrub:2,
    }},2)
    tl.to('#fourthworkflow',{rotate: 0, opacity: 1,
        scrollTrigger:{
            trigger:"#fourthworkflow",
            start:"top bottom",
            end:"+=500",
            scrub:2,
    }},2)
}

setupScrollAnimation()

let scrollPercentage = ()=>{
    let progressValue = document.getElementById('progress-value');
    let progressMarker = document.getElementById('progress-marker')
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight-document.documentElement.clientHeight;
    let scrollValue = Math.round(pos*100/calcHeight)
    progressValue.innerHTML = scrollValue+'%'
    progressMarker.style.transform = 'scaleX('+scrollValue/100+')'
}
window.onscroll = scrollPercentage