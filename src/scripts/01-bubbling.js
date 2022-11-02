/* 
- event.target
- event.currentTarget

- stopPropagation()
- stopImmediatePropagation()

*/

let refs = {
  parrent: document.querySelector('.js-parent'),
  child: document.querySelector('.js-child'),
  descendant: document.querySelector('.js-descendant'),
};

refs.parrent.addEventListener('click', e => {
  console.log('parrent');
  count[1]++;
  e.stopPropagation();
  console.log(count);
});

refs.child.addEventListener('click', e => {
  console.log('child');
  count[2]++;
  e.stopPropagation();
  console.log(count);
});

refs.descendant.addEventListener('click', e => {
  console.log('descendant');
  count[3]++;
  e.stopPropagation();
  console.log(count);
});

let count = [0, 0, 0, 0];

document.addEventListener('click', e => {
  count[0]++;
  console.log(count);
});
