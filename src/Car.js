class Car {
  constructor(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
  }

  displayinfo() {
    document.querySelector("#car-make").textContent = this.make;
    document.querySelector("#car-model").textContent = this.model;
    document.querySelector("#car-year").textContent = this.year;
    document.querySelector("#car-color").textContent = this.color;
    document.querySelector(".removeBtn").disabled = false;
  }
}

export default Car;
