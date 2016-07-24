Class

A template definition of an object's properties and methods. An Object blueprint.

Basically a function that is used to construct an Object

Example:

function Example(name) {
    this.name = name;
}

Object

An instance of a class - the product of constructing according to the ‘blueprint’

A wrapper that stores properties

JavaScript has standard objects built into the Global Object (e.g Math, String, etc)


Property

An Object characteristic

Example:

var example = { ←--- the Object
     colour: “red”, ←--- colour is the property name and red is the property value
}

Method

An Object capability - a function associated with an Object

You can store functions inside Objects as properties, these functions are called Methods

Example:

function Person(job) { ←-- the constructor function (class)
    this.job = job;  ←--- a property is made
    this.speak = function () ←-|
        console.log("Hello!")  |--- a property that is a function (method)
    } ←------------------------|

var user = new Person("Student"); ←-- Object created
user.speak(); ←-- the method is called

---> prints out “Hello”


Another Example:

var example = { ←-- creating an Object
    aProperty: "some text", ←-- a property
    aMethod: function(){ ←---------------|
    console.log("did some stuff") ←------|--- a method
    } ←----------------------------------|
};

example.aMethod(); ←-- the method is called

---> prints out “did some stuff”

