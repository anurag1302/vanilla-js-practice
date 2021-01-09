# vanilla-js-practice

## Primitive & Non Primitive Data Types ##
### Strings, Numbers, Booleans, null, undefined are primitive data types ###
### Objects, Arrays, Functions are non-primitive data types,these are collectively known as Objects ###
### Primitive data types are stored by value, while non primitive ones are stored by reference ###

## Null & Undefined ##
### Null is something which the developer sets ###
### null is an assignment value. ###
### It can be assigned to a variable as a representation of no value ###
### Undefined refers to something whose value is not found by JavaScript ###
### undefined means a variable has been declared but has not yet been assigned a value,or even a variable hasn't been defined at all ###
### Ex: 1) variable without value 2) missing function parameters 3) missing object properties ###
### typeof null is object - its an error in the original javascript implementation ###

## Truthy & Falsy ##
### Apart from Booleans in IF statements pertaining to true and false, we have almost everything as truthy in Javascript apart from few falsy values. ###
### The falsy ones are "", '',``, 0, -0, NaN, false, null, undefined ###

## Global & Local Scope ##
### Anything outside the code blocks {} is global scope, can be accessed anywhere, can be modified within functions, within expressions ###
### Local Scope - variables withing a code block {} are locally scoped ###
### These can't be accessed outside the code block ###
### Locally scoped variabl;es need to be declared with keywords inside the code block, else they will act as Global vars and will be accessible outside. ###

## Callbacks ##
### Callback functions are passed as a parameter to another function. ###
### When the parent function is invoked, the callback function is passed as a reference and is not invoked there. ###
### The callback function is invoked inside the parent function, as and when needed. ###
### A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action. ###

## forEach ##
### Array Methods - forEach() - does not return a new array ###
### array.forEach(callback); takes in a callback, we don't invoke the callback, we just pass it. ###

## Array.map() ##
### returns a new array, doesn't change the size of the original array, uses original array contents to create the new array. ###

## Array.filter() ##
### returns a new array based upon condition, the new array size can be diff than the original array ###
### returns an empty array if the condition doesn't yield any result ###

