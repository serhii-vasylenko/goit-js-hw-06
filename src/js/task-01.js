const refs = document.querySelector("#categories");
console.log(`Number of categories: ${refs.children.length}\n\n`);

refs.querySelectorAll(".item").forEach((item) => {
  console.log(`Category: ${item.querySelector("h2").textContent}`);
  console.log(`Elements: ${item.querySelector("ul").children.length}\n\n`);
});