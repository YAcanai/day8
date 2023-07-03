export let cart = [];

document
  .querySelector(".products__body")
  .addEventListener("click", function (e) {
    if (e.target.classList.contains("buy")) {
      let product = {};
      product.image = e.target.parentNode.children[0].children[0].src;
      product.name = e.target.parentNode.children[1].textContent;
      product.ml = e.target.parentNode.children[2].textContent;
      product.price = 100;
      cart.push(product);
      showCart();
    }
    console.log(cart);
  });

function showCart() {
  document.querySelector(".cart").textContent = `${cart.length}`;
  document.querySelector(".cart-items").replaceChildren();
  let fullPrice = 0;
  cart.forEach((item) => {
    fullPrice += item.price;
    let elem = document.createElement("div");
    elem.classList.add("cart-item");
    let image = document.createElement("img");
    image.classList.add("image");
    image.src = `${item.image}`;
    elem.append(image);
    let name = document.createElement("div");
    name.classList.add("name");
    name.textContent = `${item.name}`;
    elem.append(name);
    let ml = document.createElement("div");
    ml.classList.add("ml");
    ml.textContent = `${item.ml}`;
    elem.append(ml);
    let price = document.createElement("div");
    price.classList.add("price");
    price.textContent = `${item.price}`;
    elem.append(price);
    document.querySelector(".cart-items").append(elem);
  });
  document.querySelector(".price").textContent = `${fullPrice}`;
  makeInput();
}

function makeInput() {
  let Name = "";
  let Ml = "";
  let Price = "";

  cart.forEach((item) => {
    Name += ` ${item.name}`;
    Ml += ` ${item.ml}`;
    Price += ` ${item.price}`;
  });

  document.querySelector(".Iname").value = `${Name}`;
  document.querySelector(".Iml").value = `${Ml}`;
  document.querySelector(".Iprice").value = `${Price}`;
}

document.querySelector(".cart").addEventListener("click", () => {
  document.querySelector(".cart-popup").style.display = "flex";
  document.querySelector(".popup-bg").style.display = "flex";
  document.querySelector("body").style.overflowY = "hidden";
});

document.querySelector(".popup-bg").addEventListener("click", () => {
  document.querySelector(".cart-popup").style.display = "none";
  document.querySelector(".popup-bg").style.display = "none";
  document.querySelector("body").style.overflowY = "auto";
});
