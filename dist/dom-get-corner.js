var domGetCorner = (function () {
'use strict';

var northEast = ['up', 'left', -1];
var southWest = ['down', 'right', 1];

function getCorner(element, dir, ref){
    if ( ref === void 0 ) ref = {};
    var xrange = ref.xrange; if ( xrange === void 0 ) xrange = 10;
    var yrange = ref.yrange; if ( yrange === void 0 ) yrange = 10;
    var depth = ref.depth; if ( depth === void 0 ) depth = 5;
    var reverse = ref.reverse; if ( reverse === void 0 ) reverse = false;


    var el, parent, i=0;
    var ne = northEast;
    var sw = southWest;

    if(reverse){
        ne = southWest;
        sw = northEast;
    }

    if(ne.indexOf(dir) !== -1){
        var rect = element.getBoundingClientRect();
        el = document.elementFromPoint(
            rect.left + xrange,
            rect.top + yrange
        );
    }else if(sw.indexOf(dir) !== -1){
        var rect$1 = element.getBoundingClientRect();
        el = document.elementFromPoint(
            rect$1.right - xrange,
            rect$1.bottom - yrange
        );
    }

    parent = el;

    for(var i$1=0; i$1<depth; i$1++){
        el = parent;
        parent = parent.parentNode;
        if(parent === element){
            return el;
        }
    }
}

return getCorner;

}());
//# sourceMappingURL=dom-get-corner.js.map
