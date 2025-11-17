let umaString = "umma string"
const pag = document.body

console.log(umaString.indexOf("m"))
console.log(umaString.lastIndexOf("m"))

const num1 = prompt("digite um numero")
const num2 = prompt("digite outro numero")

let num1res = Number(num1)
let num2res = Number(num2)
let soma = num1res + num2res

alert(` a soma do ${num1res} + ${num2res} é igual a ${soma}`)