let num = [5, 8, 2, 9, 3]
console.log(num)
console.log("-----------------------------------------------")

num.push(1)
console.log(num)
console.log(`Adicionado o valor 1 no array`)
console.log("-----------------------------------------------")

console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
console.log("-----------------------------------------------")

num.sort() // Organiza o vetor em ordem
console.log(num)
console.log(`Agora depois de sort(), a primeira posição do vetor é: ${num[0]}`)
console.log("-----------------------------------------------")

let c = 0

/*for(c; c <= num.length; c++){
    console.log(`Na posição ${c} tem o valor: ${num[c]}`)
}
*/

// Também pode fazer desta forma para imprimir os valores do vetor
for(c in num){
    console.log(`Na posição ${c} tem o valor: ${num[c]}`)
}
console.log("-----------------------------------------------")

let pos = num.indexOf(8)

if(pos == -1){
    console.log("O valor não foi encontrado no vetor")
    console.log("-----------------------------------------------")
}else{
    console.log(`O número 8 está no posição ${pos}`)
    console.log("-----------------------------------------------")
}



