const northEast = ['up', 'left', -1];
const southWest = ['down', 'right', 1];

export default function getCorner(element, dir, {
    xrange = 10, yrange = 10, depth = 5, reverse = false
} = {}){

    let el, parent, i=0;
    let ne = northEast;
    let sw = southWest;

    if(reverse){
        ne = southWest;
        sw = northEast;
    }

    if(ne.indexOf(dir) !== -1){
        let rect = element.getBoundingClientRect();
        el = document.elementFromPoint(
            rect.left + xrange,
            rect.top + yrange
        );
    }else if(sw.indexOf(dir) !== -1){
        let rect = element.getBoundingClientRect();
        el = document.elementFromPoint(
            rect.right - xrange,
            rect.bottom - yrange
        );
    }

    parent = el;

    for(let i=0; i<depth; i++){
        el = parent;
        if(!parent) return;
        parent = parent.parentNode;
        if(parent === element){
            return el;
        }
    }
}
