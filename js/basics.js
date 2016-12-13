//Class/Constructor

	//a template definition of an object's properties and methods. An Object blueprint.
	//Basically a function that is used to contruct an Object

//Example:

function Example(name, age) {
	this.name = name;	
	this.age = age
}

var Alena = new Example("Alena", 21); // creating an instance(Object) of the Class Example
				      // console.log(Alena) outputs Example {name: "Alena", age: 21}

//Object 

	//An instance of a class - the product of constructing according to the ‘blueprint’
	//A wrapper that stores properties
	//Javascript has standard objects built into the Global Object (e.g Math, String, etc)

//Property

	//An Object characteristic

//Example:

var example = {		//the Object
	colour: "red",	//colour is the property name, red is the property value
};

//Method
	
	//an Object capability
	//you can store functions inside Objects as properties, these are called Methods

//Example:

function Person(job){			//the contructor function
	this.job = job;			//a property
	this.speak = function (){	//--|
		console.log("Hello") 	//  |--a Method
	}				//--|	
}

var user = new Person("Student");	//Object created
user.speak();				//the method is called
					//output of the method is Hello

//Prototype

//a prototype is a pointer to an Object's origins 

//Variables

var x = 1 //var is the standard variable

let y = 1 //let is a new variable declaration introduced in ES6

//it uses block scoping, making it superior to var. Only works in new browsers

const q = 1 //stands for "constant", also a new variable declaration introduced in ES6

//this variable cannot be redefined 
