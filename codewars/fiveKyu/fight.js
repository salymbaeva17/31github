function fight(robot1, robot2, tactics) {
    const [r1, r2] = [robot1.name, robot2.name];

    const s = {
        attacker: robot2.speed > robot1.speed ? r2 : r1,
        health: {
            [r1]: robot1.health,
            [r2]: robot2.health
        },
        tactics: {
            [r1]: [...robot1.tactics],
            [r2]: [...robot2.tactics]
        }
    }
    while (
        (s.tactics[r1].length + s.tactics[r2].length) > 0
        && s.health[r1] > 0 && s.health[r2] > 0
        ) {
        const attacker = s.tactics[s.attacker].length
            ? s.attacker
            : s.attacker === r1 ? r2 : r1

        const defender = attacker === r1 ? r2 : r1
        const attackTactic = s.tactics[attacker].shift()
        const attackDamage = tactics[attackTactic]

        s.health[defender] -= attackDamage
        s.attacker = defender
    }

    if (s.health[r1] === s.health[r2]) {
        return 'The fight was a draw.'
    }

    const winner = s.health[r1] > s.health[r2] ? r1 : r2

    return `${winner} has won the fight.`
}

let robot1 = {
    "name": "Rocky",
    "health": 100,
    "speed": 20,
    "tactics": ["punch", "punch", "laser", "missile"]
}
let robot2 = {
    "name": "Missile Bob",
    "health": 100,
    "speed": 21,
    "tactics": ["missile", "missile", "missile", "missile"]
}
let tactics = {
    "punch": 20,
    "laser": 30,
    "missile": 35
}
console.log(fight(robot1, robot2, tactics))

let r1 = {
    "name": "Rocky",
    "health": 200,
    "speed": 20,
    "tactics": ["punch", "punch", "laser", "missile"]
}
let r2 = {
    "name": "Missile Bob",
    "health": 100,
    "speed": 21,
    "tactics": ["missile", "missile", "missile", "missile"]
}
let t = {
    "punch": 20,
    "laser": 30,
    "missile": 35
}
console.log(fight(r1, r2, t))
