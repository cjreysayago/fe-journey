### Description 🐱‍🏍
Arrow functions are a compact alternative to a traditional function expression. These have difference and limitations:
- Does not have its own bindings to `this` or `super`, and should not be used as methods
- Does not have `arguments`, or `new.target` keywords.
- Not suitable for `call`, `apply` and `bind` methods, which generally rely on establishing a `scope`.
- Can not be used as `constructors`.
- Can not use `yield`, within its body.

```js
var obj = { // does not create a new scope
  i: 10,
  b: () => console.log(this.i, this),
  c: function() {
    console.log(this.i, this);
  }
}

obj.b(); // prints undefined, Window {...} (or the global object)
obj.c(); // prints 10, Object {...}
```
So we have to be careful unless we use tools like Babel to transpile our code. Arrow functions do not work the way normal expressions do, specially while working with `OOP`. 