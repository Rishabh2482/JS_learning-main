# Internal Working of new KeyWord when the new KeyWord is Called.

```Text
When we use the new keyword to create an object in JavaScript, several steps occur internally. Here's a breakdown of what happens:

# Step 1: Create a new empty object: A new object is created, and it's linked to the constructor function's prototype.

# Step 2: Set the constructor function's this context: The this keyword is set to the newly created object.

# Step 3: Call the constructor function: The constructor function is called with the provided arguments, and the this context is set to the new object.

# Step 4: Return the new object: If the constructor function doesn't explicitly return an object, the new keyword returns the newly created object.
```

## Here is an Example code Snippet with illustration.

``` Javascript
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

const myCar = new Car("Toyota", "Corolla", 2022);
```

## Explanation
``` Text
In this example, when we use the new keyword to create a Car object, the following steps occur:

Step 1> A new empty object is created, and it's linked to the Car function's prototype.

Step 2> The this context is set to the new object.

Step 3> The Car function is called with the arguments "Toyota", "Corolla", and 2022 and the Car function sets the properties make, model, and year on the new object.

Step 4> The new keyword returns the newly created object, which is assigned to the myCar variable.
```

The resulting myCar object would have the following properties:

``` js
{
  make: "Toyota",
  model: "Corolla",
  year: 2022
}
```