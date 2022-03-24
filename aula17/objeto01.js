let amigo = {nome: "José", sexo: "M", peso: 85.4, 
engordar(p = 0){
    console.log(`${amigo.nome} comeu bastante e engordou ${p}Kg`)
    this.peso += p
}
}
var ária = 10
console.log(ária)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)

amigo.engordar(2)

console.log(`${amigo.nome} agora pesa ${amigo.peso}Kg`)