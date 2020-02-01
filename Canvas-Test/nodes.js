function makeNodes(){
    
    var drawNode = function () {
        controllerCtx.fillStyle = this.color;
        controllerCtx.beginPath();
        controllerCtx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI)
        controllerCtx.fill();
        controllerCtx.closePath();
    }

    var handleHover = function(x, y){
        while(cursorInsideNode(x, y, this.position)){
            this.radius++;
        }
        radius = 20;
    }
    for(let i = 0; i < 4; i++)
    {
        var node = {};

        node.color = '';
        node.isActive = false; //if node is currently turned on / displaying something
        node.isConnected = false; //if node is connect to circuit, or if it is trying to be connected
        node.magnitude = 1; //power of the node based on how big the circuit is.
        node.position = {x: 75 + 75 * i, y: 200};
        node.radius = 20;
        
        node.parentNode = {}; //place holder for parent nodes

        node.draw = drawNode;
        node.checkHover = handleHover;

        nodes[i] = node;
    }

    nodes[0].color = "#FF0000";
    nodes[1].color = "#800080";
    nodes[2].color = "#0000FF";
    nodes[3].color = "#00FF00";

    //nodes.forEach(node => node.draw())
}