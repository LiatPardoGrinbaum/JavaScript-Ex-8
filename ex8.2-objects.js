const myCountry = {
  country: "Norway",
  capital: "Oslo",
  language: "Norwegian",
  population: 5.4,
  neighbours: ["Sweden", "Finland", "Russia"],
  describe() {
    console.log(`${this.country} has ${this.population} million people, their mother tongue is ${this.language}, they have ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}. `);
  },
  checkIsland() {
    this.island = this.neighbours.length === 0;
  },
};

myCountry.checkIsland();
console.log(myCountry);
