function verificar(){
    // Armazeando os dados
    var nasc = document.querySelector("#nasc") // Ano nascimento
    var res = document.getElementById("res") // Resultado
    var atual = new Date()
    var ano = atual.getFullYear() // Ano atual
    var fundo = document.body
    //------------------------------------------------------------

    if(nasc.value.lenght == 0 || nasc.value > atual){ 
        alert("[ERRO] Verifique os dados e tente novamente!")
    }// Verificando se foi digitado

    var sexo = document.getElementsByName("radsex")
    var idade = ano - Number(nasc.value)  // Calculo para ver a idade
    var genero = ""

    // Criando um elemento dinamicamente, sem precisar ter que criar no HTML
    var img = document.createElement('img') // Imagem 
    img.setAttribute('id', 'foto')
    //---------------------------------------------------------------------

    //Verificando qual o sexo seleconado
    if(sexo[0].checked){ // Verificando se foi seleciona o radsex na posição 0, que é o genero Masculino

        genero = "HOMEM"
        fundo.style.background = "rgb(42, 143, 168"

        if(idade <= 3){
            //bebe
            img.setAttribute('src', 'bebemenino.png')
        }else if(idade <= 12){
            //criança
            img.setAttribute('src', 'menino.png')
        }else if(idade < 19){
            //adolescente
            img.setAttribute('src', 'adolescentehomem.png')
        }else if(idade < 24){
            //jovem
            img.setAttribute('src', 'jovemhomem.png')
        }else if(idade < 45){
            //adulto
            img.setAttribute('src', 'homem.png')
        }else{
            // idoso
            img.setAttribute('src', 'idoso.png')
        }


    }else{

        genero ="MULHER"
        fundo.style.background = "rgb(180, 35, 180)"

        if(idade <= 3){
            //bebe
            img.setAttribute('src', 'bebemenina.png')
        }else if(idade <= 12){
            //criança
            img.setAttribute('src', 'menina.png')
        }else if(idade < 19){
            //adolescente
            img.setAttribute('src', 'adolescentemulher.png')
        }else if(idade < 24){
            //jovem
            img.setAttribute('src', 'jovemmulher.png')
        }else if(idade < 45){
            //adulto
            img.setAttribute('src', 'mulher.png')
        }else{
            // idoso
            img.setAttribute('src', 'idosa.png')
        }
    }
    //------------------------------------------------------------------------
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    res.appendChild(img) // Adicionando um elemento, que no caso é a imagem
    

}