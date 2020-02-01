"use strict";

var controller = document.querySelector("#controller");
var display = document.querySelector("#display");

controller.width = 400;
controller.height = 400;

display.width = 400;
display.height = 400;

var controllerCtx = controller.getContext("2d");
var displayCtx = display.getContext("2d");

var nodes = []; //a list of all the nodes
var connectedNodes = [];
var edges = []; //all the connections between said node. 

var displayStage;
var controllerStage;

var displayRenderer;
var controllerRenderer;

function init(){

    displayStage = new PIXI.Container();
    controllerStage = new PIXI.Container();
    
    displayRenderer = PIXI.autoDetectRenderer(
        400,
        400,
        {view:document.getElementById("display")}
    );

    controllerRenderer = PIXI.autoDetectRenderer(
        400,
        400,
        {view:document.getElementById("controller")}
    );

    debugger;
    var circle = new PIXI.Graphics();
    circle.lineStyle(5, 0xFFFFFF, 1);
    circle.beginFill(0x0000FF, 1);
    circle.drawCircle(150, 150, 100);
    circle.endFill();
    circle.alpha = 0.5;
    controllerStage.addChild(circle);

    requestAnimationFrame(update);   
}

function update(){

    controllerRenderer.render(controllerStage);
    displayRenderer.render(displayStage);
    requestAnimationFrame(update);   

}


controller.addEventListener('mousemove', function(e){
    var x = e.x;
    var y = e.y;

    displayCtx.beginPath();
    displayCtx.arc(x, y, 20, 0, 2 * Math.PI);
    displayCtx.stroke();

    displayCtx.fillStyle = "rgba(255, 255, 255, 0.01)";
    displayCtx.fillRect(0,0,400,400);

    nodes.forEach(node => node.checkHover(x,y))
});

makeNodes();
init();