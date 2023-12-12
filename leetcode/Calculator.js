class Calculator {
    constructor(value) {
        this.result = value
    }
    add(value){
        this.result +=value
        return this
    }
    subtract(value){
        this.result -= value
        return this
    }
    multiply(value) {
        this.result *= value
        return this
    }
    divide(value) {
        if(value === 0){
            throw new Error("Division by zero is not allowed") }
        this.result /= value
        return this
    }
    power(value) {
        this.result**=value
        return this

    }
    getResult() {
        return this.result
    }
}

const calc = new Calculator(10)
console.log(calc.add(5).subtract(7).getResult())
console.log(new Calculator(2).multiply(5).power(2).getResult())
console.log(new Calculator(20).divide(0).getResult())
