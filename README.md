# date-formats

This module returns a date format. You can write the format you want and it returns the date.

# Usage

Just require the module like any other npm module 
```js
const date = require('date-formats');
```

# Methods

This module has one method:

- format: returns a date with the format date which one the user pass by param.

# Example
## format
Input:
```js
const date = require('date-formats');

const dateFormat1 = date.format('DD-MM-YYYY');
console.log(dateFormat1);

const dateFormat2 = date.format('YYYY/MM/DD');
console.log(dateFormat2);
```
Output:
```js
01-11-1999

1999/11/01
```