const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsUl = document.querySelector("#ingredients");

ingredients.forEach((item) => {
  const ulItem = document.createElement("li");
  ulItem.textContent = item;
  ulItem.classList.add("item");
  ingredientsUl.append(ulItem);
});