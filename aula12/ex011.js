var nome = "Maria"
var idade = 14

console.log(`${nome} tem ${idade} anos, portanto...`)

if(idade < 16){
    console.log(`${nome} NÃO ESTÁ LIBERADO(a) PARA VOTAR!`)
}else if(idade >= 18 && idade <=60 ){
    console.log(`${nome} É OBRIGADO(a) A VOTAR`)
}else{
    console.log(`${nome} NÃO É OBRIGADO(a) A VOTAR`)
}