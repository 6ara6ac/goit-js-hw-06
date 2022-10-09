const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsEl = document.querySelector('#ingredients');

// 


const item = ingredients.map(option => {
const ingrEL = document.createElement('li');
ingrEL.classList.add('item');
ingrEL.textContent = option;
return ingrEL;
});

ingredientsEl.append(...item);




// const item = options => {

// // return options.map(option => {
// //   const ingrEL = document.createElement('li');
// //   ingrEL.classList.add('item');
// //   ingrEL.textContent = option;

// //   return ingrEL;
// //   });
// //   };

// //   const element = item(item);

// //   ingredientsEl.append(...element);
