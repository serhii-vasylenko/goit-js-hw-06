const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsUl = document.querySelector("#ingredients");

// v1
// ingredients.forEach((item) => {
//   const ulItem = document.createElement("li");
//   ulItem.textContent = item;
//   ulItem.classList.add("item");
//   ingredientsUl.append(ulItem);
// });

// v2
const ingredientsElements = ingredients.map((item) => {
  const ulItem = document.createElement("li");
  ulItem.textContent = item;
  ulItem.classList.add("item");
  return ulItem;
});
ingredientsUl.append(...ingredientsElements);