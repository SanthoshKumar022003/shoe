const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 1300,
    colors: [
      {
        code: "black",
        img: "image.1.jpg",
      },
      {
        code: "lightgray",
        img: "image.01.jpg",
      },
    ],
  },{
    id: 2,
    title: "Air Jordan",
    price: 1750,
    colors: [
      {
        code: "black",
        img: "image.2.jpg",
      },
      {
        code: "lightgray",
        img: "image.02.jpg",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 2000,
    colors: [
      {
        code: "hightwight",
        img: "image.3.jpg",
      },
      {
        code: "lightgray",
        img: "image.03.jpg",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 2400,
    colors: [
      {
        code: "blue",
        img: "image.4.jpg",
      },
      {
        code: "lightgray",
        img: "image.04.jpg",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 2500,
    colors: [
      {
        code: "gray",
        img: "image.5.jpg",
      },
      {
        code: "black",
        img: "image.05.jpg",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "Rs." + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});