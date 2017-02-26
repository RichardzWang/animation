var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
var but = document.getElementById("stop");
var cir = document.getElementById("circle");
var dvd = document.getElementById("dvd");
var ctr = 0;

ctx.fillStyle = "#990000";

//position variables
var radius = 0;
var expand = true;
var posx = c.width/2;
var posy = c.height/2;
var velx = 1.5;
var vely = -1.5;

var circle = function() {

    window.cancelAnimationFrame(ctr);

    var grow = function() {
	
	ctx.clearRect(0, 0, c.width, c.height);
	ctx.beginPath();
	ctx.arc(c.width/2,c.height/2,radius,0,2*Math.PI);
	ctx.fill();
	
	if (expand) {
	    if (radius < c.width/2) {
		radius ++;
	    } else {
		expand = false;
	    }
	} else {
	    if (radius > 0) {
		radius --;
	    } else {
		expand = true;
	    }
	};
	
	ctr = window.requestAnimationFrame( circle );
	
    };

    grow();

};
    
var stopIt = function() {
    window.cancelAnimationFrame(ctr);
};

var bounce = function() {

    window.cancelAnimationFrame(ctr);

    var ibounce = function() {
	
	console.log("hi");
	ctx.clearRect(0, 0, c.width, c.height);
	ctx.fillRect(posx, posy, 50, 20);

	posx += velx;
	posy += vely;

	console.log(posx);
	console.log(c.width);
	console.log(posy);
	console.log(c.height);

	if (posx + 50 > c.width) {
	    velx = -velx;
	}
	if (posx < 0) {
	    velx = -velx;
	}
	if (posy + 20 > c.height) {
	    vely = -vely;
	}
	if (posy < 0) {
	    vely = -vely;
	}

	ctr = window.requestAnimationFrame( bounce );
	
    };

    ibounce();
    
}

but.addEventListener('click', stopIt);

cir.addEventListener('click', circle);

dvd.addEventListener('click', bounce);


//window.requestAnimationFrame( circle );
