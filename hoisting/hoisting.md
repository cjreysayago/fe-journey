### Description 🐱‍🏍
Hoisting is a JavaScript core behaviour that move all declarations to the top

```js
dog = "Pluto";
let dog; // This will result in a ReferenceError
```

## Important notes 🐱‍🚀
*1)* Variables defined with `let` and `const` are hoisted to the top of the block but not initilialized. An example for `let` variables would be:
```js
dog = "Pluto";
let dog; // This will result in a ReferenceError
```
For `const` variables it would be something like this:
```js
dog = "Scooby";
const dog; // This code will not even run. JS marks this as a syntax error
```
*2-* `Javascript only hoists declarations, not initializations.` This is extremly important
```js
var brand = "Jhon";
console.log(brand, category); // This will results in undefined for category
var category = "Doe";
```