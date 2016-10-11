# Javascript Objects

Objects are Javascript's most used and fundamental data type. Javascript has 6 data types, 5
primitive (simple) types and 1 complex type. Object is the complex data type.

## Primitive Types

Primitive types are immutable, that means they can't be changed

* Number (1, 2, 1.5, -1.5, etc.)
* String ('cat', 'dog', "fish", 'This is a sentence.', etc.)
* Boolean (true, false)
* Undefined
* Null

## Object (Complex Type)

Objects are mutable, they can be changed

You can think of objects as a dictionary or a list with items, where each item is key: value. (Just
think of them as dictionaries).

In this object literal
```js
const obj = {
  id: 1,
  name: 'Bob Smith'
};
```
`id` and `name` are property names while `1` and `'Bob Smith'` are properties.

To access the properties (values) of the object you can use dot notation:
```js
obj.id    // 1
obj.name  // "Bob Smirth"
```
or you can use bracket notation:
```js
obj['id']    // 1
obj['name']  // "Bob Smirth"
```

Property names can be numbers or strings (keep in mind that if you use a number as property name
you must use bracket notation).

Properties (values) can be any primitive type or object. This pretty much means properties can be
anything, even functions/methods. And that is because functions/methods are objects in Javascript.

I don't recommend doing this because it's a little weird but you can actually do this.
```js
const func = function(num) {
  return func.multiplier * num;
}

func.multiplier = 2;
func(2); // 4
```

For now I'll leave you with a more "complicated" object. Copy it into chrome console or node repl
and play around with it.

```js
const user = {
  id: 1,
  first: 'Perry',
  last: 'Platypus',
  email: 'perry@platypus.com',
  password: 'grrrrrrrrrrrr', // Note: NEVER STORE PASSWORDS IN PLAIN TEXT OR LIKE THIS
  comparePassword: function(email, attempt) {
    // This is not how you compare passwords or how you would store them
    // 
    // Normally, you would do something likegenerate a large salt and then hash
    // the password appended to their email, and unique id. Then you compare the hashes.
    // This is a very simple and still not that secure of a way to store passwords but
    // this isn't about security.
    // 
    // Whatever you do, don't try to implement your secure password store by yourself,
    // use something like bcrypt.
    //
    if (email + attempt === this.email + this.pasword) {
      return true;
    }
    return false;
  },
  types: {
    tv: 'true',
    movie: 'true',
    game: 'true',
    book: 'false'
  }
};
```

