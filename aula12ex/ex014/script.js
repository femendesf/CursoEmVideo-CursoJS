function carregar(){

    var hora = document.querySelector("#hora")
    var fundo = document.querySelector("#fundo")
    var img = document.getElementById("imagem")

    var data = new Date()
    var horaAtual = data.getHours()

    hora.innerHTML = `Agora são ${horaAtual} horas`

    if(horaAtual < 5){
        fundo.style.background = "rgb(44, 44, 44)"
        img.src = `fotomadrugada.png`
    }else if(horaAtual < 12){
        fundo.style.background = "rgb(236, 207, 74)"
        img.src = "fotomanha.png"
    }else if(horaAtual < 18){
        fundo.style.background = "rgb(184, 109, 24)"
        img.src = "fototarde.png"
    }else{
        fundo.style.background = "rgb(29, 20, 9)"
        img.src = "fotonoite.png"
    }
 
}
    