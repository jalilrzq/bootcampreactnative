// Soal No 1. Animal
class Animal {
  constructor(name, legs = 4, cold_blooded = false) {
    this.name = name;
    this.legs = legs;
    this.cold_blooded = cold_blooded;
  }
}

console.log('----------------------------------------------------------------------');
console.log('Jawaban No 1. Animal Class');
console.log('----------------------------------------------------------------------');
console.log('Release 0');
console.log('------------------');
const sheep = new Animal("shaun");
console.log(sheep.name);
console.log(sheep.legs);
console.log(sheep.cold_blooded);

class Ape extends Animal {
  constructor(name, legs = 2, cold_blooded) {
    super(name, cold_blooded);
    this.legs = legs;
  }
  yell() {
    console.log('Auooo');
  }
}

class Frog extends Animal {
  constructor(name, legs, cold_blooded = true) {
    super(name, legs);
    this.cold_blooded = cold_blooded;
  }
  jump() {
    console.log('hop hop');
  }
}

console.log('------------------');
console.log('Release 1');
console.log('------------------');
const sungokong = new Ape("kera sakti");
console.log(sungokong.name);
console.log(sungokong.legs);
console.log(sungokong.cold_blooded);
sungokong.yell();

console.log('------------------');

const kodok = new Frog("buduk");
console.log(kodok.name);
console.log(kodok.legs);
console.log(kodok.cold_blooded);
kodok.jump();


// No. 2 Function to Class
class Clock {
  constructor({ template }) {
    this.template = template;
  }
  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }
  stop() {
    clearInterval(this.timer);
  }
  start() {
    this.render();
    // this.timer = setInterval(this.render, 1000);
    this.timer = setInterval(() => this.render(), 1000);
  }
}

console.log('----------------------------------------------------------------------');
console.log('Jawaban No 2. Function to Class');
console.log('----------------------------------------------------------------------');

let clock = new Clock({template: 'h:m:s'});
clock.start();