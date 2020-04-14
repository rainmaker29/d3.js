var dataset = [1,2,3,4,5]

d3.selectAll('p').data(dataset).enter().append('p').text('Awesome d3')

// Here we are unaware of number of p elements available in the DOM for our dataset
// So we use a placeholder to dynamically create enough p or any selected element
// for our data size. That is the function enter()

d3.selectAll('h5').data(dataset).enter().append('h5').text(function(d){ return d;}).style('color',
function(d){

 if (d%2==0){
   return 'green'
 }
else{
  return 'red'
}


})
