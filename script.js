let n1, n2 ,n3

n1 = Number(prompt("digite um valor"))
n2 = Number(prompt("digite um valor"))
n3 = Number(prompt("digite um valor"))


function valores(n1, n2, n3) {

let media= (n1 + n2 + n3)/3
return media
}

console.log("A média é " + valores(n1, n2, n3))