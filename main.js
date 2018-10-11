$(document).ready(function() {
	'use strict';
	paper.install(window);
	paper.setup(document.getElementById('mainCanvas'));
	
	var tool = new Tool();
	
	var c = Shape.Circle(200,200,80);
	c.fillColor = 'black';
	var text = new PointText(200, 200);
	text.justification = 'center';
	text.fillColor = 'white';
	text.fontSize = 25;
	text.content = 'hello world';
	
	tool.onMouseDown = function(event) {
		var c = Shape.Circle(event.point.x, event.point.y, 15);
		c.fillColor = 'green';
	};
	
	// Вывод кругов в цикле
	/*var c;
	for (var x=25; x<400; x+=50) {
		for (var y=25; y<400; y+=50) {
			c = Shape.Circle(x,y, 25);
		c.fillColor = 'green';
		}
	}*/
	// вывод круга
	/*var c = Shape.Circle(200,200,50);
	c.fillColor = 'green'; */
	
	paper.view.draw();
	
	// Объекты
	//const
});
