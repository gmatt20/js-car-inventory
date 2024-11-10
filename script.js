function car(make, model, year, price) {
  return {
    make: make,
    model: model,
    year: year,
    price: price,
    display: function () {
      console.log(`${this.make}, ${this.model}, ${this.year}, ${this.price}`);
    },
    displaySpecs: function carSpecs(engine, horsepower, MPG) {
      this.display();
      console.log(`${engine} engine ${horsepower} horsepower ${MPG} MPG`);
    },
  };
}

const honda = car("Honda", "Fit", 2014, 10000);
honda.displaySpecs("Inline V4", 130, 36);
