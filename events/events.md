### Description 🐱‍🏍
The events are performed actions over an Html document. Javascript can react on these events and execute logic for each of them.

Check this example
```html
<button onclick="doSomething()">Click Me!</button>
<script>
    function doSomething() {
        alert("Doing something");
    }
</script>
```
On the example above, we declared an event using the HTML attribute `onclick` the value needs to be a valid JS expression so it can be executed anytime the event is performed over that element. On this case, we're displaying an `alert()` as soon as an user clicks over the button.

We can attach an event programmatically directly into an element using the `addEventListener()` method. Check this out:
```js
function callMiranda() {
    alert("Ring ring");
}

const button = document.getElementById("call-btn");
button.addEventListener("click", callMiranda)
```

### Event Bubbling
Javascript propagates the events from the innermost element to the outer elements. This is specially useful for applying technics like `Event Delegation` this allow us to invoke handlers from dynamically added DOM elements without worrying about adding them each time. Check the attached example