## Description 🐱‍🏍
A callback is a function passed as an argument to another function

```js
const goToLondon(onceArrived, error) {
    const hasArrived = true;
    if (hasArrived === true) {
        return onceArrived();
    }

    return error();
}
goToLondon(function() {
    console.log("Welcome to london :D");
})
```