// Declaring height,width of first svg element that has lines
var width = 500;
var height = 300;

// Select body element and add p element

d3.select('body').append('p').text('Lines').style('text-align','center');

//Think of SVG as a canvas

// Appending svg element to body
var svg = d3.select('body')
.append('svg').attr('width',width).attr('height',height)
.attr("transform","translate(250,0)");

//Appending line element to svg
svg.append('line').attr('x1',100).attr('x2',500)
.attr('y1',50).attr('y2',50).attr('stroke','black');
//Inclined line
svg.append('line').attr('x1',100).attr('x2',500)
.attr('y1',100).attr('y2',250).attr('stroke','black');


// Redifining height and width for rectangles
var width = 500;
var height = 180;


d3.select('body').append('p').text('Rectangles').style('text-align','center');

var svg = d3.select('body')
.append('svg').attr('width',width).attr('height',height)
.attr("transform","translate(500,0)");

svg.append('rect').attr('x',0).attr('y',0).attr('width',300).attr('height',100);




var width = 500;
var height = 150;

d3.select('body').append('p').text('Ellipse').style('text-align','center');
var svg = d3.select('body')
.append('svg').attr('width',width).attr('height',height)
.attr("transform","translate(400,0)");

svg.append('ellipse').attr('cx',250).attr('cy',50).attr('rx',150).attr('ry',50);

//Here we create one more svg for ellipse this time with more
//styles like color and text

var width = 500;
var height = 300;

d3.select('body').append('p').text('Ellipse with text').style('text-align','center');

var svg = d3.select('body')
.append('svg').attr('width',width).attr('height',height)
.attr("transform","translate(400,0)");

// To join an ellipse and text element of svg, we need a connecting element called g

var g = svg.append("g");

var ellipse = g.append('ellipse').attr('cx',250).attr('cy',50).attr('rx',150)
.attr('ry',50).attr("fill","green");

g.append("text").attr("x",200).attr("y",50)
.attr("stroke","#fff").text("This is ellipse");
