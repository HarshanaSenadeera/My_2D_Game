var robot = document.getElementById("robot");
var background=document.getElementById("background");
var idleImageNumber=1;
var idleAnimationNumber=0;
var runImageNumber=1;
var runAnimationNumber=0;
var backgroundImagePositionX=0;
var moveBackgroundAnimationId=0;
var jumpAnimationNumber=0;
var jumpImageNumber=1;
var robotMarginTop=472;
var boxMarginLeft=1400;
var boxMarginLeft1=1400;
var boxAnimationId=0;
var boxAnimationId1=0;
var box;
var box2;
var currentMarginLeft;
var currentMarginLeft1;
var newMarginLeft;
var newMarginLeft1;



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

// buttons key catch
function keyCheck(event){

    let keyCode = event.which;

    if(keyCode === 13){
        if(runAnimationNumber === 0){
            runAnimationStart();
        }

        if(moveBackgroundAnimationId===0){
            moveBackgroundAnimationId=setInterval(moveBackground,100);
        }

        if(boxAnimationId===0){
            boxAnimationId=setInterval(boxAnimation,100);
        }

        if(boxAnimationId1===0){
            boxAnimationId1=setInterval(boxAnimation2,100);
        }
    }

    if(keyCode ===32){
        if(jumpAnimationNumber===0){
            jumpAnimationStart();
        }

        if(moveBackgroundAnimationId===0){
            moveBackgroundAnimationId=setInterval(moveBackground,100);
        }
    }

    if(boxAnimationId===0){
        boxAnimationId=setInterval(boxAnimation,100);
    }
    if(boxAnimationId1===0){
        boxAnimationId1=setInterval(boxAnimation2,100);
    }

}


/*---------------------------Background move Animation---------------------*/

function moveBackground(){

    /*document.getElementById("background").style.backgroundPositionX=backgroundImagePositionX+"px";*/
    background.style.backgroundPositionX=backgroundImagePositionX+"px";

    backgroundImagePositionX=backgroundImagePositionX-60;
}

/*---------------------------Jump Animation---------------------*/

function jumpAnimation(){


    robot.src="resources/jump (" + jumpImageNumber + ").png";
    jumpImageNumber=jumpImageNumber+1;


    //Increase robot jumping height
    if(jumpImageNumber <=6){
        robotMarginTop=robotMarginTop-20;
        robot.style.marginTop=robotMarginTop+"px";
    }

    //Reduce robot jumping height
    if(jumpImageNumber >=7){
        robotMarginTop=robotMarginTop+20;
        robot.style.marginTop=robotMarginTop+"px";
    }

    if(jumpImageNumber===11){
        jumpImageNumber=1;
        clearInterval(jumpAnimationNumber);
        jumpAnimationNumber=0;
        runImageNumber=0;
        runAnimationStart();
    }
}

function jumpAnimationStart(){
    clearInterval(idleAnimationNumber);
    runImageNumber=0;
    clearInterval(runAnimationNumber);
    jumpAnimationNumber=setInterval(jumpAnimation,100);
}

/*---------------------------Create Obstacles---------------------*/

function createBoxes(){

    for (var i=0; i<=150; i++){


    var box = document.createElement("div");
    box.className="box";
    document.getElementById("background").appendChild(box);
    box.style.marginLeft=boxMarginLeft+"px";
    box.id="box"+i;

    if(i<5){
        boxMarginLeft=boxMarginLeft+1500;
    }

        if(i>=5 && i<=10){
            boxMarginLeft=boxMarginLeft+500;
        }

        if(i>=10 && i<=15){
            boxMarginLeft=boxMarginLeft+500;
        }

        if(i>=15 && i<=25){
            boxMarginLeft=boxMarginLeft+300;
        }

        if(i>=25 && i<=30){
            boxMarginLeft=boxMarginLeft+200;
        }

        if(i>=30 && i<=40){
            boxMarginLeft=boxMarginLeft+1500;
        }
        if(i>=40 && i<=50){
            boxMarginLeft=boxMarginLeft+500;
        }
        if(i>=50 && i<=55){
            boxMarginLeft=boxMarginLeft+500;
        }
        if(i>=55 && i<=70){
            boxMarginLeft=boxMarginLeft+700;
        }
        if(i>=70 && i<=75){
            boxMarginLeft=boxMarginLeft+300;
        }

        if(i>=75 && i<=90){
            boxMarginLeft=boxMarginLeft+600;
        }
        if(i>=90 && i<=100){
            boxMarginLeft=boxMarginLeft+1500;
        }
        if(i>=100 && i<=110){
            boxMarginLeft=boxMarginLeft+400;
        }
        if(i>=110 && i<=115){
            boxMarginLeft=boxMarginLeft+600;
        }
        if(i>=115 && i<=125){
            boxMarginLeft=boxMarginLeft+300;
        }
        if(i>=125 && i<=130){
            boxMarginLeft=boxMarginLeft+1500;
        }
        if(i>=130 && i<=140){
            boxMarginLeft=boxMarginLeft+400;
        }
        if(i>=140 && i<=150){
            boxMarginLeft=boxMarginLeft+1600;
        }

    }
}

function boxAnimation() {
    for (var i=0;i<150; i++){
       box =document.getElementById("box"+i);
        currentMarginLeft=getComputedStyle(box).marginLeft;
        newMarginLeft=parseInt(currentMarginLeft)-25;
        box.style.marginLeft=newMarginLeft+"px";
    }
}


function createBoxes2(){

    for (var i=0; i<=150; i++){


        var box = document.createElement("div2");
        box.className="box2";
        document.getElementById("background").appendChild(box);
        box.style.marginLeft=boxMarginLeft1+"px";
        box.id="box2"+i;

        if(i<5){
            boxMarginLeft1=boxMarginLeft1+1500;
        }

        if(i>=5 && i<=10){
            boxMarginLeft1=boxMarginLeft1+500;
        }

        if(i>=10 && i<=15){
            boxMarginLeft1=boxMarginLeft1+500;
        }

        if(i>=15 && i<=25){
            boxMarginLeft1=boxMarginLeft1+300;
        }

        if(i>=25 && i<=30){
            boxMarginLeft1=boxMarginLeft1+200;
        }

        if(i>=30 && i<=40){
            boxMarginLeft1=boxMarginLeft1+1500;
        }
        if(i>=40 && i<=50){
            boxMarginLeft1=boxMarginLeft1+500;
        }
        if(i>=50 && i<=55){
            boxMarginLeft1=boxMarginLeft1+500;
        }
        if(i>=55 && i<=70){
            boxMarginLeft1=boxMarginLeft1+700;
        }
        if(i>=70 && i<=75){
            boxMarginLeft1=boxMarginLeft1+300;
        }

        if(i>=75 && i<=90){
            boxMarginLeft1=boxMarginLeft1+600;
        }
        if(i>=90 && i<=100){
            boxMarginLeft1=boxMarginLeft1+1500;
        }
        if(i>=100 && i<=110){
            boxMarginLeft1=boxMarginLeft1+400;
        }
        if(i>=110 && i<=115){
            boxMarginLeft1=boxMarginLeft1+600;
        }
        if(i>=115 && i<=125){
            boxMarginLeft1=boxMarginLeft1+300;
        }
        if(i>=125 && i<=130){
            boxMarginLeft1=boxMarginLeft1+1500;
        }
        if(i>=130 && i<=140){
            boxMarginLeft1=boxMarginLeft1+400;
        }
        if(i>=140 && i<=150){
            boxMarginLeft1=boxMarginLeft1+1600;
        }

    }
}

function boxAnimation2() {
    for (var i=0;i<150; i++){
        box2 =document.getElementById("box2"+i);
        currentMarginLeft1=getComputedStyle(box2).marginLeft;
        newMarginLeft1=parseInt(currentMarginLeft1)-25;
        box2.style.marginLeft=newMarginLeft1+"px";
    }
}
