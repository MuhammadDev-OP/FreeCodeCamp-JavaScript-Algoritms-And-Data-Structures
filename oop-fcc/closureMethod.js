function Bird() {
  this.weight = 15;

  this.getBirdWeight = () => {
    return this.weight;
  };
}

let duck = new Bird();

console.log(duck.getBirdWeight());
