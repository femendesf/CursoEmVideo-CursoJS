function contar(){
    //res.innerHTML = "Contando: "

    var ini = document.getElementById("inicio")
    var fm = document.getElementById("fim")
    var ps = document.querySelector("#passo")
    var res = document.getElementById("res")

    if(ini.value.length == 0 || fm.value.length == 0 || ps.value.length == 0){
        res.innerHTML= "Impossível contar, EXISTE CAMPO VAZIO!"
    }else if(ps.value == 0){
        alert("PASSO igual a zero, vou considerar 1")
        ps.value = 1
    }else{
        res.innerHTML = "Contando: "
        var inicio = Number(ini.value)
        var fim = Number(fm.value) 
        var passo = Number(ps.value)

       
        if(inicio < fim){
             // Contagem crescente
            for(let c = inicio; c <= fim; c += passo){
                res.innerHTML += `\u{1F449} ${c}  `
            }
        }else{
            // Contagem regressiva
            for(let c = inicio; c >= fim; c -= passo){
                res.innerHTML += `\u{1F449} ${c}`
            }
        }

        res.innerHTML += `\u{1F3F4}`
    }

}



