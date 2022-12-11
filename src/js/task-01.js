const refs = document.querySelector("#categories");
console.log(`Number of categories: ${refs.children.length}\n\n`);

refs.querySelectorAll(".item").forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}\n\n`);
});