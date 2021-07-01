// Basic bubbling example

const child = document.getElementById("child");
const parent = document.getElementById("parent");
child.addEventListener("click", function () {
    alert("You clicked the Child element!");
}, false);
parent.addEventListener("click", function () {
    alert("You clicked the parent element!");
}, false);

// Event delegation example

const addRowsElement = document.querySelector(".rows");
addRowsElement.addEventListener("click", function(e) {
    this.innerHTML += "<tr><td>New row</td></tr>";
});