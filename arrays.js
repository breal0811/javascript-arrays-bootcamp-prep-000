var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray() {
  var addElementToBeginningOfArray = ['foo', 1]; 
  return addElementToBeginningOfArray; 
}
//GOOD ABOVE 

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);	  
  return array;	
}	
 function addElementToEndOfArray(array, element)  {
  return [...array, element];	 
}
 	
function destructivelyAddElementToEndOfArray(array, element) {	
  array.push(element);
  return array;
}
//GOOD ABOVE

function accessElementInArray(array, index) {
  return array[index];
}
//GOOD ABOVE

<<<<<<< HEAD
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift(1);
  return array;
=======


function destructivelyRemoveElementFromBeginningOfArray(array) {
  return array.slice(1);
>>>>>>> b9bf53ac7d9e3809b97fa63318861802f6f3424d
}
//GOOD ABOVE

function removeElementFromBeginningOfArray(array) {
<<<<<<< HEAD
 return array.slice(1);
=======
  array.pop();
  return array;
  
>>>>>>> b9bf53ac7d9e3809b97fa63318861802f6f3424d
}
//GOOD ABOVE

function destructivelyRemoveElementFromEndOfArray(array) {
 array.pop();
 return array;
}
//GOOD ABOVE

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1);
}











