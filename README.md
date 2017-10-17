dom-get-corner
==========

Install
----

`npm install --save dom-get-corner`

Usage
----

```javascript
import getCorner from 'dom-get-corner';

//Showing default values for options
let child = getCorner(document.querySelector('#parent-id'), 'left', {
    //The x distance from the parent's edge
    xrange: 10,
    //The y distance form the parent's edge
    yrange: 10,
    //The depth allowed for finding a child
    depth: 5,
    //Get the reverse corner
    reverse: false
});
```

About
----

`dom-get-corner` finds the child element at the corner relative to the given direction. `dom-get-corner` only gets the top/left, lower/right corners.

### getCorner(element, direction, options)

Pass one of these values to `direction` to get the upper left corner:

* up
* left
* -1

Pass one of these values to `direction` to get the lower right corner:

* down
* right
* 1
