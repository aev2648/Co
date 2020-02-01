var lastTime = 0;

function cursorInsideNode(x, y, node) {
	var dx = x - node.x;
	var dy = y - node.y;
	return dx * dx + dy * dy <= node.radius * node.radius;
} 

function clamp(min, max, val){
    return Math.max(min, Math.min(max, val));
}

function calculateDeltaTime(){
    var now,fps;
    now = performance.now(); 
    fps = 1000 / (now - this.lastTime);
    fps = clamp(fps, 12, 60);
    this.lastTime = now; 
    return 1/fps;
}