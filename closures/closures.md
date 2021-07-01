## Description 🐱‍🏍
A closure is a function that has access to its outer function scope even after the outer function has returned. This means a closure can remember and access variables and arguments of its outer function even after the function has finished (Thanks to the stored Lexical environment reference)

This is how the JS engine executes our code:
![Context Example](https://miro.medium.com/max/700/1*fYq9aQ9OMhO-THHrr7N54w.png)

The JavaScript engine creates a global execution context to execute the global code, and when it encounters the call to first() function, it creates a new execution context for that function and pushes it to the top of the execution stack. `Inner contexts will have a reference to it's parent context (For the global this value is null)`

Then, JS it also creates a Lexical environment to store the variable defined in that function during the execution of that function.
A lexical environment is a data structure that holds identifier-variable mapping. (here identifier refers to the name of variables/functions, and the variable is the reference to actual object [including function type object] or primitive value).
A Lexical Environment has two components: 

1- The environment record
2- A reference to the outer environment. (This is actually a `Closure`)
