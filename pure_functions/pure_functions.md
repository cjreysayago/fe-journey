## Description 🐱‍🏍
In JS, a `pure function` is a function (a block of code ) that always returns the same result if the same arguments are passed. It does not depend on any state, or data change during a program’s execution rather it only depends on its input arguments.

```js
function calculateGST( productPrice ) {
    return productPrice * 0.05;
}
```