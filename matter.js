var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite;
const canvas = document.getElementById("canvas")
// create an engine
var engine = Engine.create();
// create a renderer
var render = Render.create({
    canvas: canvas,
    engine: engine,
    options:{
        background: '#f7dfa8',
        wireframes: false,
        width: window.innerWidth,
        height: window.innerHeight
    }
});
// create two boxes and a ground
// var boxA = Bodies.rectangle(400, 200, 100, 100,{
//     render: {
//         fillStyle: 'red',
//     }
// });
// var boxB = Bodies.polygon(450, 50, 3, 80,{
//     restitution: 0.8,
//     density: 0.04,
// });
const shoes = []
const randomNum = (min,max)=>{
    return Math.random()* (max-min) + min
}

const createRectangle = ()=>{
    const x = randomNum(0,canvas.width)
    const y = randomNum(0,canvas.height/2)
    const circle = Bodies.polygon(x,y,3,50,{
        density: 0.04,
        friction: 0.01,
        frictionAir: 0.00001,
        restitution: 0.95,
        render:{
            sprite:{
                texture: '/shoe.png'
            }
        }
    })
    shoes.push(circle)
}

for(let i=0;i<100;i++){
    createRectangle()
}



var ground = Bodies.rectangle(600, 720, 1920, 5, { 
    isStatic: true,
    render: {
        fillStyle: '#f7dfa8'
    } 
});

// add all of the bodies to the world
const btn = document.querySelector(".hero--header--btn")
const firstSec = document.getElementById("firstSection")

function runmatter(){
    Composite.add(engine.world, [ground].concat(shoes));

    // run the renderer
    Render.run(render);
    
    // create runner
    var runner = Runner.create();
    
    // run the engine
    Runner.run(runner, engine);
}


btn.addEventListener("click",()=>{
    console.log("clicked")
    btn.style.transform = "translateY(-100vh)";
    btn.style.pointerEvents = "none";
    setTimeout(()=>firstSec.classList.add("shake-horizontal"),600)
    setTimeout(runmatter,1400)
})