var dado = document.querySelector("input#num")
var tab = document.getElementById("tabdados")
var res =  document.getElementById("res")

let list = []

function maiorMenor(n){
   
    let maior = list[0]
    let menor = list[0]

    for(i in list){
        if(Number(list[i]) > maior){
            maior = Number(list[i])

        }else if(Number(list[i]) < menor){
            menor = Number(list[i])
            
        }
    }

    if(n == 1){
        return maior
    }else{
        return menor
    }
}
function soma(){
    let s = 0

    for(i in list){
        s += list[i]
    }

    return s
}
function media(){
    return soma() / list.length
}
function isNumVal(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}
function inList(v, l){
    if(l.indexOf(Number(v)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){

    res.innerHTML = ""
    
    if(isNumVal(dado.value) && !inList(dado.value, list)){

        list.push(Number(dado.value))

        var item = document.createElement('option')
        item.text = `O valor ${dado.value} foi adicionado`
        tab.appendChild(item)

    }else{
        alert("valor inválido ou ja encontrado na lista")
    }

    dado.value = '' // Limpa a caixa onde é digitado o número
    dado.focus() // Colocando o foco na caixa onde é digitado o número, ou seja, como se estivesse clicando novamente para digitar


}

function finalizar(){
    res.innerHTML = `Ao todo, temos ${list.length} números cadastrados<br><br>`
    res.innerHTML += `O maior valor informado foi ${maiorMenor(1)}<br><br>` 
    res.innerHTML += `O menor valor informado foi ${maiorMenor(2)}<br><br>` 
    res.innerHTML += `Somando todos os valores, temos ${soma()}<br><br>`
    res.innerHTML += `A média dos valores digitados é: ${media()}<br><br>`

}











/* TENTATIVA

    if(dado.value.length == 0){
        alert("Digite um número!")
    }else if(dado.value < 1 || dado.value > 100){
        alert("Digite um valor correto")
    }else{
        var d = Number(dado.value)
        var lista = []
        lista.push(d)



        for(let c = 0; c <= lista.length; c++){

            var item = document.createElement('option')

            for(i in lista){

                item.text = lista[i]
                tab.appendChild(item)
            }
        }
    */