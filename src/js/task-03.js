const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const imagesUl = document.querySelector(".gallery");

// v1
// images.forEach((image) => {
//   const galleryItem = `<li><img src="${image.url}" alt="${image.alt}" ></li>`;
//   imagesUl.insertAdjacentHTML("beforeend", galleryItem);
// });

// v2.1
// const galleryElements = images.map(
//   (image) => `<li><img src="${image.url}" alt="${image.alt}" ></li>`
// );
// imagesUl.insertAdjacentHTML("beforeend", galleryElements);

// v2.2
imagesUl.insertAdjacentHTML(
  "beforeend",
  images.map(({url, alt}) => `<li><img src="${url}" alt="${alt}" ></li>`)
);