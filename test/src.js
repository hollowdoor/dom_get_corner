import getCorner from '../';
console.log('-- up/down --')
one('#vertical', 'up');
one('#vertical', 'down');
console.log('--- reverse ---')
one('#vertical', 'up', {reverse: true});
one('#vertical', 'down', {reverse: true});
console.log('-- left/right --')
one('#vertical', 'left');
one('#vertical', 'right');
console.log('--- reverse ---')
one('#vertical', 'left', {reverse: true});
one('#vertical', 'right', {reverse: true});

function one(selector, dir, options){

    let el = getCorner(document.querySelector(selector), dir, options);
    console.log(el.innerHTML);
}
