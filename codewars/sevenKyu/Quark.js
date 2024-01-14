class Quark {
    constructor(color, flavor) {
        Object.assign(this, {color, flavor, baryon_number: 1 / 3});
    }

    interact(quark) {
        [this.color, quark.color] = [quark.color, this.color];
    }
}
const q1 = new Quark("red", "up")
const q2 = new Quark("blue", "strange")
console.log(q1.color)
console.log(q2.color)
console.log(q1.baryon_number)
console.log(q2.baryon_number)
q1.interact(q2)
console.log(q1.color)
console.log(q2.color)
