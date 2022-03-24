function gerarTabuada(){
    var n = document.getElementById("num")
    var res = document.getElementById("seltab")
    res.innerHTML = ""
    
    if(n.value.length == 0) {
        alert("DIGITE UM NÚMERO")
    }else{
        var numero = Number(n.value)
        var cont = 0

        for(let c = cont; c <= 10; c++){
            let item = document.createElement('option') // Criando um option em select
            item.text = `${numero} x ${c} = ${numero * c}`// imprimindo mensagem na tela
            item.value = `tab${c}` // criando valores para option
            res.appendChild(item) // adicionando option em select
        }
    }
}