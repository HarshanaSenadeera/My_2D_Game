var robot = document.getElementById("robot");
var idleImageNumber=0;
var idleAnimationNumber=0;
var runImageNumber=0;
var runAnimationNumber=0;
var backgroundImagePositionX=0;
var moveBackgroundAnimationId=0;
var background=document.getElementById("background");


/*---------------------------Idle Animation---------------------*/
function idleAnimation(){

    robot.src="resources/Idle (" + idleImageNumber + ").png";

    idleImageNumber =idleImageNumber+1;

    if(idleImageNumber === 11){
        idleImageNumber=1;
    }
}

function idleAnimationStart(){
   idleAnimationNumber=setInterval(idleAnimation,100);
}


/*---------------------------Run Animation---------------------*/
function runAnimation(){
    robot.src="resources/Run (" + runImageNumber + ").png";

    runImageNumber=runImageNumber+1;

    if(runImageNumber===8){
        runImageNumber=1;
    }
}

function runAnimationStart(){
    runAnimationNumber=setInterval(runAnimation,100);

    //while run stop idle
    clearInterval(idleAnimationNumber);
}

//enter buttons key catch
function keyCheck(event){

    let keyCode = event.which;

    if(keyCode === 13){
        if(runAnimationNumber === 0){
            runAnimationStart();
        }
    }

    if(moveBackgroundAnimationId===0){
        moveBackgroundAnimationId=setInterval(moveBackground,100);
    }
}


/*---------------------------Run Animation---------------------*/

function moveBackground(){

    /*document.getElementById("background").style.backgroundPositionX=backgroundImagePositionX+"px";*/
    background.style.backgroundPositionX=backgroundImagePositionX+"px";

    backgroundImagePositionX=backgroundImagePositionX-60;
}