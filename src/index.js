import Car from "./Car";
import Wishlist from "./Wishlist";

let form = document.querySelector("#submitForm");
let makeInput = document.querySelector("#makeInput");
let modelInput = document.querySelector("#modelInput");
let yearInput = document.querySelector("#yearInput");
let colorInput = document.querySelector("#colorInput");

let wishlistUl = document.querySelector("#wishListContainer > ul");
let makeP = document.querySelector("#car-make");
let modelP = document.querySelector("#car-model");
let yearP = document.querySelector("#car-year");
let colorP = document.querySelector("#car-color");
let removeBtn = document.querySelector(".removeBtn");

let wishlist = new Wishlist();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let make = makeInput.value;
  let model = modelInput.value;
  let year = yearInput.value;
  let color = colorInput.value;

  let car = new Car(make, model, year, color);

  wishlist.add(car);

  let li = document.createElement("li");
  li.classList.add("list-group-item");
  li.textContent = car.model;

  li.addEventListener("click", (event) => {
    makeP.textContent = car.make;
    modelP.textContent = car.model;
    yearP.textContent = car.year;
    colorP.textContent = car.color;

    removeBtn.disabled = false;
    removeBtn.onclick = (event) => {
      wishlist.remove(car);

      makeP.textContent = "";
      modelP.textContent = "";
      yearP.textContent = "";
      colorP.textContent = "";

      removeBtn.disabled = true;

      wishlistUl.removeChild(li);
    };
  });
  wishlistUl.appendChild(li);

  makeInput.value = "";
  modelInput.value = "";
  yearInput.value = "";
  colorInput.value = "";
});
