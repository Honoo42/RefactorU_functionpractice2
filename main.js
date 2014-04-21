// 1. create a function that takes a single object argument and returns the value of the 'name' property
// this seachers an abject for the name property and returns that value
var getName = function(obj) {
	return obj.name;
};
// returns the name argument
var getTheName = function (name, age) {
	this.name = name;
	this.age = age;
	return name;
}
var Person = function(name) {
	this.name = name;
	this.age = '';
};

var luisa = new Person('Luisa');

// 2.A function that takes an array of strings and returns the total number of letters in all strings 
// by joining the strings together and calling the length property
var totalLetters = function (str) {
	str = str.join('');
	console.log(str);
	total = str.length;
	return total;
};
// 3.A function that translates two arguments into a single object with a key of
// the first argument and the value of the second argument
var keyValue = function(k ,value) {
	this.k = k;
	console.log(k);
	this.value= value;
	object = { k : k}
	return object;
}