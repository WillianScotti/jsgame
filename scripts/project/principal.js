
// Import any other script files here, e.g.:
// import * as myModule from "./mymodule.js";

const moveSpeed = 200;
const jumpForce = 500;
const gravity = 1000;
let isJumping = false;
let velocityY = 0;
let  side = 0;



runOnStartup(async runtime =>
{
	// Code to run on the loading screen.
	// Note layouts, objects etc. are not yet available.
	
	runtime.addEventListener("beforeprojectstart", () => OnBeforeProjectStart(runtime));
});

async function OnBeforeProjectStart(runtime)
{
	// Code to run just before 'On start of layout' on
	// the first layout. Loading has finished and initial
	// instances are created and available to use here.
	
	runtime.addEventListener("tick", () => Tick(runtime));
}

function Tick(runtime)
{

    const dt = runtime.dt;
	
    const player = runtime.objects.Player.getFirstInstance();
	const chao = runtime.objects.Chao.getFirstInstance();
	
	const rectA = player.getBoundingBox();
	const rectB = chao.getBoundingBox();
	
	const colideChao = !(
	rectA.lefr > rectB.right ||
	rectA.right < rectB.left ||
	rectA.top > rectB.bottom || 
	rectA.bottom < rectB.top);
	
	
	if(colideChao){
	
	   if(player.y >= chao.y){
         player.y=chao.y;
		 velocityY = 0;
		 if(side == 1){
            player.setAnimation("idleD")
               }
			   if(side == 2){
               player.setAnimation("idleE")

           }
}
	
	
}
	
	
	
	
	if (runtime.keyboard.isKeyDown("ArrowRight")){
	    player.x += moveSpeed * dt;
		player.setAnimation("runD");
		side = 1;
	}
	
	if (runtime.keyboard.isKeyDown("ArrowLeft")){
		 player.x -= moveSpeed * dt;
		 player.setAnimation("runE");
		 side = 2;


	}
	
	
    if (runtime.keyboard.isKeyDown("ArrowUp") && !isJumping){
	    isJumping = true
		velocityY = isJumping
	
	
	
	
	}




	
	
	
	
	velocityY += gravity * dt;
	player.y += velocityY * dt;
	
}
