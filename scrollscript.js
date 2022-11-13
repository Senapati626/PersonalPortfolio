
gsap.registerPlugin(ScrollTrigger)

const setupScrollAnimation = ()=>{
    const projectA = document.querySelector('#firstPointer')
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

    tl.to('.hero--scroll--icon',{rotate:720,
        scrollTrigger:{
            trigger: 'first',
            start:'top top',
            end: "+=1000",
            scrub:true
        }
    })
}

setupScrollAnimation()