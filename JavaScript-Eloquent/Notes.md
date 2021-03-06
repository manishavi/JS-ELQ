# Javascripts Notes

## Automatic type conversion

- COERCION: When an operator is applied to "wrong" type of value, Javascript will quietly convert that value to the type it needs, using a set of rules that aren't what you want or expect. This is called `coercion`.

- The rules for converting strings and numbers to Boolean values state that 0, NaN, and the empty string ("") count as false, while all the other values count as true.

- When you do not want any automatic type conversions to happen, there are two additional operators: === and !==.

## Expressions and statements

- A fragment of code that produces a value is called an expression.

- If an expression corresponds to a sentence fragment, a JavaScript statement corresponds to a full sentence. A program is a list of statements.

## Bindings

- To catch and hold values, JavaScript provides a thing called a binding, or variable.
  `let ten = 10;`
- The = operator can be used at any time on existing bindings to disconnect them from their current value and have them point to a new one.

```bash
  let mood = "light";
  console.log(mood);
  mood = "dark";
  console.log(mood);
```

## The environment

The collection of bindings and their values that exist at a given time is called the environment.

## Functions

- A function is a piece of program wrapped in a value. Such values can be applied in order to run the wrapped program.
- Executing a function is called invoking, calling, or applying it. You can call a function by putting parentheses after an expression that produces a function value.

## Control Flow

When your program contains more than one statement, the statements are executed as if they are a story, from top to bottom.

`----->`

## Conditional execution(if-else)

Not all programs are straight roads. We may, for example, want to create a branching road, where the program takes the proper branch based on the situation at hand. This is called conditional execution.

```bash
    1-> /\
    -->    -->
    2-> \/
```

## while and do loops

- A statement starting with the keyword while creates a loop. The word while is followed by an expression in parentheses and then a statement, much like if. The loop keeps entering that statement as long as the expression produces a value that gives true when converted to Boolean.

- A do loop is a control structure similar to a while loop. It differs only on one point: a do loop always executes its body at least once, and it starts testing whether it should stop only after that first execution. To reflect this, the test appears after the body of the loop.

```bash
    -->\  /->-->
        ()
```

## FOR Loops

The parentheses after a for keyword must contain two semicolons. The part before the first semicolon initializes the loop, usually by defining a binding. The second part is the expression that checks whether the loop must continue. The final part updates the state of the loop after every iteration. In most cases, this is shorter and clearer than a while construct.

## Dispatching on a value with switch

There is a construct called switch that is intended to express such a “dispatch” in a more direct way. Unfortunately, the syntax JavaScript uses for this (which it inherited from the C/Java line of programming languages) is somewhat awkward—a chain of if statements may look better.

## Function

- A function definition is a regular binding where the value of the binding is a function.

- A function is created with an expression that starts with the keyword function. Functions have a set of parameters and a body.

## Bindings and Scopes

- For bindings(variables) defined outside of any function or block, the scope is the whole program—you can refer to such bindings wherever you want. These are called global.

- Bindings created for function parameters or declared inside a function can only be referenced in that function, so they are known as local bindings.

- Bindings declared with let and const are in fact local to the block that they are declared in, so if you create one of those inside of a loop, the code before and after the loop cannot “see” it. In pre-2015 JavaScript, only functions created new scopes, so old-style bindings, created with the var keyword, are visible throughout the whole function that they appear in—or throughout the global scope, if they are not in a function.

```z
    let x = 10;
    if (true) {
        let y = 20;
        var z = 30;
        console.log(x + y + z);
    // → 60
    }
    // y is not visible here
    console.log(x + z);
    // → 40
```

## Nested Scope

- Each local scope can also see all the local scopes that contain it, and all scopes can see the global scope. This approach to binding visibility is called lexical scoping.

## Functions as values

A function binding usually simply acts as a name for a specific piece of the program. Such a binding is defined once and never changed. This makes it easy to confuse the function and its name.

But the two are different. A function value can do all the things that other values can do—you can use it in arbitrary expressions, not just call it. It is possible to store a function value in a new binding, pass it as an argument to a function, and so on. Similarly, a binding that holds a function is still just a regular binding and can, if not constant, be assigned a new value.

```bash
function square(x) {
  return x * x;
}
```

## Declaration notation

When the function keyword is used at the start of a statement, it is a function declaration.

```bash
function future() {
  return "You'll never have flying cars";
}
```

## Arrow functions

Instead of the function keyword, it uses an arrow (=>) made up of equals and greater-than characters (not to be confused with the greater-than-or-equal operator, which is written >=).

```bash
const power = (base, exponent) => {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
};
```

## The call stack

The place where the computer stores the context is the call stack. Every time a function is called, the current context is stored on top of this stack. When a function returns, it removes the top context from the stack and uses that context to continue execution.

```bash
function greet(who) {
  console.log("Hello " + who);
}
greet("Harry");
console.log("Bye");
```

Storing this stack requires space in the computer’s memory. When the stack grows too big, the computer will fail with a message like “out of stack space” or “too much recursion”.

## Optional Arguments

JavaScript is extremely broad-minded about the number of arguments you pass to a function. If you pass too many, the extra ones are ignored. If you pass too few, the missing parameters get assigned the value undefined.

The downside of this is that it is possible—likely, even—that you’ll accidentally pass the wrong number of arguments to functions. And no one will tell you about it.

The upside is that this behavior can be used to allow a function to be called with different amounts of arguments.

## Closure

The feature—being able to reference a specific instance of a local binding in an enclosing scope—is called closure. A function that references bindings from local scopes around it is called a closure. This behavior not only frees you from having to worry about lifetimes of bindings but also makes it possible to use function values in some creative ways.

## Growing functions

There are two more or less natural ways for functions to be introduced into programs.

The first is that you find yourself writing similar code multiple times. So you take the repeated functionality, find a good name for it, and put it into a function.

The second way is that you find you need some functionality that you haven’t written yet and that sounds like it deserves its own function. You’ll start by naming the function, and then you’ll write its body. You might even start writing code that uses the function before you actually define the function itself.

A useful principle is to not add cleverness unless you are absolutely sure you’re going to need it.

## Functions and side effects

A pure function is a specific kind of value-producing function that not only has no side effects but also doesn’t rely on side effects from other code—for example, it doesn’t read global bindings whose value might change. A pure function has the pleasant property that, when called with the same arguments, it always produces the same value (and doesn’t do anything else). A call to such a function can be substituted by its return value without changing the meaning of the code. When you are not sure that a pure function is working correctly, you can test it by simply calling it and know that if it works in that context, it will work in any context. Nonpure functions tend to require more scaffolding to test.

```bash
// Define f to hold a function value
const f = function(a) {
  console.log(a + 2);
};

// Declare g to be a function
function g(a, b) {
  return a * b * 3.5;
}

// A less verbose function value
let h = a => a % 3;
```

## Data Sets

JavaScript provides a data type specifically for storing sequences of values. It is called an array and is written as a list of values between square brackets, separated by commas.

## Properties

Almost all JavaScript values have properties. The exceptions are null and undefined. If you try to access a property on one of these nonvalues, you get an error.

### The two main ways to access properties in JavaScript are with a dot and with square brackets

When using a dot, the word after the dot is the literal name of the property. When using square brackets, the expression between the brackets is evaluated to get the property name. Whereas value.x fetches the property of value named “x”, value[x] tries to evaluate the expression x and uses the result, converted to a string, as the property name.

## Methods

Both string and array objects contain, in addition to the length property, a number of properties that hold function values.

### Properties that contain functions are generally called methods of the value they belong

e.g. `toUpperCase is a method of a string`.

## Objects

Values of the type object are arbitrary collections of properties. One way to create an object is by using braces as an expression.

### Reading a property that doesn’t exist will give you the value undefined

You may think of objects as octopuses with any number of tentacles, each of which has a name tattooed on it.

The `delete` operator cuts off a tentacle from such an octopus. It is a unary operator that, when applied to an object property, will remove the named property from the object.

The binary `in` operator, when applied to a string and an object, tells you whether that object has a property with that name.

To find properties of an object, you can use the `Object.keys` function.

`Object.assign` function copies all properties from one object into another.

`Arrays` are just a kind of object specialized for storing sequences of things.typeof [], produces "object".

## Mutability

Bindings can also be changeable or constant, but this is separate from the way their values behave. Even though number values don’t change, you can use a `let` binding to keep track of a changing number by changing the value the binding points at. Similarly, though a `const` binding to an object can itself not be changed and will continue to point at the same object, the contents of that object might change.

When you compare objects with JavaScript’s `==` operator, it compares by identity: it will produce true only if both objects are precisely the same value. Comparing different objects will return false, even if they have identical properties. There is no “deep” comparison operation built into JavaScript, which compares objects by contents, but it is possible to write it yourself.

### The lycanthrope’s log

`Correlation` is a measure of dependence between statistical variables. A statistical variable is not quite the same as a programming variable. In statistics you typically have a set of measurements, and each variable is measured for every measurement. Correlation between variables is usually expressed as a value that ranges from -1 to 1. Zero correlation means the variables are not related. A correlation of one indicates that the two are perfectly related—if you know one, you also know the other. Negative one also means that the variables are perfectly related but that they are opposites—when one is true, the other is false.
To compute the measure of correlation between two Boolean variables, we can use the phi coefficient (ϕ).

`ϕ = (n11n00 − n10n01)/(√ n1•n0•n•1n•0)`

The notation `n01` indicates the number of measurements where the first variable false (0) and the second variable is true (1).

### Computing correlation

We can represent a `two-by-two` table in JavaScript with a f`our-element array` ([76, 9, 4, 1]). We could also use other representations, such as an array containing two two-element arrays `([[76, 9], [4, 1]])` or an object with property names like "11" and "01", but the flat array is simple and makes the expressions that access the table pleasantly short.

`Math.sqrt` is the square root function, as provided by the Math object in a standard JavaScript environment.

To extract a `two-by-two table` for a specific event from the journal, we must loop over all the entries and tally how many times the event occurs in relation to squirrel transformations.

```bash
function tableFor(event, journal) {
  let table = [0, 0, 0, 0];
  for (let i = 0; i < journal.length; i++) {
    let entry = journal[i], index = 0;
    if (entry.events.includes(event)) index += 1;
    if (entry.squirrel) index += 2;
    table[index] += 1;
  }
  return table;
}

console.log(tableFor("pizza", JOURNAL));
// → [76, 9, 4, 1]
```

Arrays have an `includes` method that checks whether a given value exists in the array.

## Array loops

```bash
for (let i = 0; i < JOURNAL.length; i++) {
  let entry = JOURNAL[i];
  // Do something with entry
}
```

This kind of loop is common in classical JavaScript—going over arrays one element at a time is something that comes up a lot, and to do that you’d run a counter over the length of the array and pick out each element in turn.

There is a simpler way to write such loops in modern JavaScript.

```bash
for (let entry of JOURNAL) {
  console.log(`${entry.events.length} events.`);
}
```

When a for loop looks like this, with the word `of` after a variable definition, it will loop over the elements of the value given after `of`. This works not only for arrays but also for strings and some other data structures.

### Array Methods

`push` and `pop`, which add and remove elements at the end of an array.

Methods for adding and removing things at the start of an array are called `unshift` and `shift`.

`indexOf` method searches through the array from the start to the end and returns the index at which the requested value was found—or -1 if it wasn’t found. To search from the end instead of the start, there’s a similar method called `lastIndexOf`.

Both `indexOf` and `lastIndexOf` take an optional second argument that indicates where to start searching.

Method `slice` takes start and end indices and returns an array that has only the elements between them. The start index is inclusive, the end index exclusive.

The `concat` method can be used to glue arrays together to create a new array, similar to what the + operator does for strings.

## Strings and their properties

Every string value has a number of methods. Some very useful ones are `slice` and `indexOf`, which resemble the array methods of the same name.

The `trim` method removes whitespace (spaces, newlines, tabs, and similar characters) from the start and end of a string.

`padStart` method takes the desired length and padding character as arguments.

You can split a string on every occurrence of another string with `split` and join it again with `join`.

A string can be repeated with the `repeat` method, which creates a new string containing multiple copies of the original string, glued together.

## REST PARAMETERS

It can be useful for a function to accept any number of arguments.
`Math.max` computes the maximum of all the arguments it is given.
To write such a function, you put three dots before the function’s last parameter.

```bash
function max(...numbers) {
  let result = -Infinity;
  for (let number of numbers) {
    if (number > result) result = number;
  }
  return result;
}
console.log(max(4, 1, 9, -2));
// → 9
```

When such a function is called, the rest parameter is bound to an array containing all further arguments. If there are other parameters before it, their values aren’t part of that array.

You can use a similar three-dot notation to call a function with an array of arguments.

```bash
let numbers = [5, 1, 7];
console.log(max(...numbers));
// → 7
```

This “spreads” out the array into the function call, passing its elements as separate arguments.

Square bracket array notation similarly allows the triple-dot operator to spread another array into the new array.

## The Math Object

The Math object is used as a container to group a bunch of related functionality. There is only one `Math` object, and it is almost never useful as a value. Rather, it provides a namespace so that all these functions and values do not have to be global bindings.

Since JavaScript’s built-in `max` function is tucked safely inside the Math object, we don’t have to worry about overwriting it.

Math object contains cos (cosine), sin (sine), and tan (tangent), as well as their inverse functions, acos, asin, and atan, respectively. The number π (pi)—or at least the closest approximation that fits in a JavaScript number—is available as Math.PI. There is an old programming tradition of writing the names of constant values in all caps.

`Math.random` function returns a new pseudorandom number between zero (inclusive) and one (exclusive) every time you call it.

If we want a whole random number instead of a fractional one, we can use `Math.floor` (which rounds down to the nearest whole number) on the result of Math.random.

`Math.ceil` (for “ceiling”, which rounds up to a whole number), Math.round (to the nearest whole number), and `Math.abs`, which takes the absolute value of a number, meaning it negates negative values but leaves positive ones as they are.

## Destructuring

```bash
function phi(table) {
  return (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt((table[2] + table[3]) *
      (table[0] + table[1]) *
      (table[1] + table[3]) *
      (table[0] + table[2])
    );
}
```

`let n00 = table[0]`

```bash
function phi([n00, n01, n10, n11]) {
  return (n11 * n00 - n10 * n01) /
    Math.sqrt((n10 + n11) * (n00 + n01) *
      (n01 + n11) * (n00 + n10)
    );
}
```

Note that if you try to destructure `null` or `undefined`, you get an error, much as you would if you directly try to access a property of those values.

## JSON

If you want to save data in a file for later or send it to another computer over the network, you have to somehow convert these tangles of memory addresses to a description that can be stored or sent.

We can serialize the data. That means it is converted into a flat description. A popular serialization format is called `JSON` which stands for `JavaScript Object Notation`. It is widely used as a data storage and communication format on the Web, even in languages other than JavaScript.

JSON looks similar to JavaScript’s way of writing arrays and objects, with a few restrictions. All property names have to be surrounded by double quotes, and only simple data expressions are allowed—no function calls, bindings, or anything that involves actual computation. Comments are not allowed in JSON.
e.g.

```bash
{
  "squirrel": false,
  "events": ["work", "touched tree", "pizza", "running"]
}
```

JavaScript gives us the functions `JSON.stringify` and `JSON.parse` to convert data to and from this format. The first takes a JavaScript value and returns a JSON-encoded string. The second takes such a string and converts it to the value it encodes.

### LIST

A list is a nested set of objects, with the first object holding a reference to the second, the second to the third, and so on.

```bash
let list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};
```

The resulting objects form a chain.
A nice thing about lists is that they can share parts of their structure. For example, if I create two new values {value: 0, rest: list} and {value: -1, rest: list} (with list referring to the binding defined earlier), they are both independent lists, but they share the structure that makes up their last three elements. The original list is also still a valid three-element list.

## ABSTRACTION

Abstractions hide details and give us the ability to talk about problems at a higher (or more abstract) level.

## Higher-order functions

Functions that operate on other functions, either by taking them as arguments or by returning them, are called `higher-order functions`.

Higher-order functions allow us to abstract over actions, not just values. They come in several forms. For example, we can have functions that create new functions.
And we can have functions that change other functions.
We can even write functions that provide new types of control flow.

There is a built-in array method, `forEach`, that provides something like a for/of loop as a higher-order function.

## FILTERING ARRAYS

The `filter` function, rather than deleting elements from the existing array, builds up a new array with only the elements that `pass the test`. This function is pure. It does not modify the array it is given.

Like `forEach`, `filter` is a standard array method.

## Transforming with map

The `map` method transforms an array by applying a function to all of its elements and building a new array from the returned values. The new array will have the same length as the input array, but its content will have been mapped to a new form by the function.

## Summarizing with reduce

The higher-order operation that compute a single value from array is called `reduce` (sometimes also called fold). It builds a value by repeatedly taking a single element from the array and combining it with the current value. When summing numbers, you’d start with the number zero and, for each element, add that to the sum.

The parameters to `reduce` are, apart from the array, a combining function and a start value.

```bash
function reduce(array, combine, start) {
  let current = start;
  for (let element of array) {
    current = combine(current, element);
  }
  return current;
}

console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0));
// → 10
```

The standard array method `reduce`, has an added convenience i.e. If your array contains at least one element, you are allowed to leave off the `start` argument. The method will take the first element of the array as its start value and start reducing at the second element.

## Composability

Higher-order functions start to shine when you need to `compose` operations.

```bash
function average(array) {
  return array.reduce((a, b) => a + b) / array.length;
}

console.log(Math.round(average(
  SCRIPTS.filter(s => s.living).map(s => s.year))));
// → 1188
console.log(Math.round(average(
  SCRIPTS.filter(s => !s.living).map(s => s.year))));
// → 188

let total = 0, count = 0;
for (let script of SCRIPTS) {
  if (script.living) {
    total += script.year;
    count += 1;
  }
}
console.log(Math.round(total / count));
// → 1188
```

It is harder to see what was being computed and how. And because intermediate results aren’t represented as coherent values, it’d be a lot more work to extract something like `average` into a separate function.

In terms of what the computer is actually doing, these two approaches are also quite different. The first will build up new arrays when running `filter` and `map`, whereas the second computes only some numbers, doing less work. You can usually afford the readable approach, but if you’re processing huge arrays, and doing so many times, the less abstract style might be worth the extra speed.

