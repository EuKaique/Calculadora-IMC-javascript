 function selecionado(){
    var sexoM = document.getElementById("sexoM")
    var sexoF = document.getElementById("sexoF")

    if(sexoM.checked == true){
        sexoF.disabled = true
    }else if(sexoF.checked == true){
        sexoM.disabled = true
    }
}

function resultadoImc(){
    selecionado()

    var idade = document.getElementById("idade").value
    var peso = document.getElementById("peso").value
    var altura = document.getElementById("altura").value
    var resultado = document.getElementById("resultado")
    var imc = peso / (altura * altura)
    var resultadoImc = parseFloat(imc.toFixed(2))

    var h3IMC = document.createElement("h2")
    var info = document.createElement("p")
    var imagem = document.createElement("div")
    /*
    h3IMC.style.fontWeight = "500"
    h3IMC.style.textAlign = "center"
    h3IMC.style.margin = "30px"
    */
    h3IMC.textContent = "IMC: " + resultadoImc

    /*
    info.style.lineHeight = "30px"
    info.style.textAlign = "center"
    info.style.fontSize = "24px"
    info.style.marginLeft = "100px"
    info.style.marginRight = "100px"
    info.style.marginTop = "50px"

    imagem.style.marginTop = "30px"
    imagem.style.marginLeft = "570px"
    imagem.style.width = "150px"
    imagem.style.height = "230px"
    */

    //HOMEM ABAIXO DO PESO
    if((sexoM.checked == true) && 
    (idade <= 120 && idade >= 12) && 
    (resultadoImc < 18) && 
    (peso <= 200 && peso >= 20) && 
    (altura < 2.20 && altura >= 1.40)){
        document.getElementById("formulario").style.display = "none"
        h3IMC.style.color = "#f00"

        info.innerHTML = "Você está abaixo do peso. <br>"
        info.innerHTML += "Você tem <b>" 
        + idade + " anos</b>, o seu peso é de <b>" 
        + peso + "kg</b> e a sua altura é de <b>"
        + altura + "cm</b>"
        info.innerHTML += "<br>Pratique exercícios, alimente-se e durma bem pra ter uma vida saudável" 

        imagem.style.height = "200px"
        imagem.style.backgroundImage = "url('./images/abaixoMas.jpg')"
        imagem.style.backgroundSize = "cover"

        resultado.appendChild(h3IMC)
        resultado.appendChild(info)
        resultado.appendChild(imagem)
    }

    //MULHER ABAIXO DO PESO
    if((sexoF.checked == true) && 
    (idade <= 120 && idade >= 12) && 
    (resultadoImc < 18) && 
    (peso <= 200 && peso >= 20) && 
    (altura < 2.20 && altura >= 1.40)){
        document.getElementById("formulario").style.display = "none"
        h3IMC.style.color = "#f00"

        info.innerHTML = "Você está abaixo do peso. <br>"
        info.innerHTML += "Você tem <b>" 
        + idade + " anos</b>, o seu peso é de <b>" 
        + peso + "kg</b> e a sua altura é de <b>"
        + altura + "cm</b>"
        info.innerHTML += "<br>Pratique exercícios, alimente-se e durma bem pra ter uma vida saudável" 

        imagem.style.backgroundImage = "url('./images/abaixoFem.jpg')"
        imagem.style.backgroundSize = "cover"

        resultado.appendChild(h3IMC)
        resultado.appendChild(info)
        resultado.appendChild(imagem)
    }

    //HOMEM COM PESO NORMAL
    if((sexoM.checked == true) && 
    (idade <= 120 && idade >= 12) && 
    (resultadoImc >= 18 && resultadoImc < 25) && 
    (peso <= 200 && peso >= 20) && 
    (altura < 2.20 && altura >= 1.40)){
        document.getElementById("formulario").style.display = "none"
        h3IMC.style.color = "#00f"

        info.innerHTML = "Você está no peso ideal. <br>"
        info.innerHTML += "Você tem <b>" 
        + idade + " anos</b>, o seu peso é de <b>" 
        + peso + "kg</b> e a sua altura é de <b>"
        + altura + "cm</b>"
        info.innerHTML += "<br>Continue se cuidando. Parabéns ^^" 

        imagem.style.backgroundImage = "url('./images/normalMas.jpg')"
        imagem.style.backgroundSize = "cover"

        resultado.appendChild(h3IMC)
        resultado.appendChild(info)
        resultado.appendChild(imagem)
    }

    //MULHER COM PESO NORMAL
    if((sexoF.checked == true) && 
    (idade <= 120 && idade >= 12) && 
    (resultadoImc >= 18 && resultadoImc < 25) && 
    (peso <= 200 && peso >= 20) && 
    (altura < 2.20 && altura >= 1.40)){
        document.getElementById("formulario").style.display = "none"
        h3IMC.style.color = "#00f"

        info.innerHTML = "Você está no peso ideal. <br>"
        info.innerHTML += "Você tem <b>" 
        + idade + " anos</b>, o seu peso é de <b>" 
        + peso + "kg</b> e a sua altura é de <b>"
        + altura + "cm</b>"
        info.innerHTML += "<br>Continue se cuidando. Parabéns ^^" 

        imagem.style.backgroundImage = "url('./images/normalFem.jpg')"
        imagem.style.backgroundSize = "cover"

        resultado.appendChild(h3IMC)
        resultado.appendChild(info)
        resultado.appendChild(imagem)
    }

    //HOMEM ACIMA DO PESO
    if((sexoM.checked == true) && 
    (idade <= 120 && idade >= 12) && 
    (resultadoImc > 25 && resultadoImc <= 30) && 
    (peso <= 200 && peso >= 20) && 
    (altura < 2.20 && altura >= 1.40)){
        document.getElementById("formulario").style.display = "none"
        h3IMC.style.color = "#f0d"

        info.innerHTML = "Você está acima do peso. <br>"
        info.innerHTML += "Você tem <b>" 
        + idade + " anos</b>, o seu peso é de <b>" 
        + peso + "kg</b> e a sua altura é de <b>"
        + altura + "cm</b>"
        info.innerHTML += "<br>Pratique exercícios, alimente-se e durma bem pra ter uma vida saudável" 

        imagem.style.backgroundImage = "url('./images/acimaMas.jpg')"
        imagem.style.backgroundSize = "cover"

        resultado.appendChild(h3IMC)
        resultado.appendChild(info)
        resultado.appendChild(imagem)
    }
 
    //MULHER ACIMA DO PESO
    if((sexoF.checked == true) && 
    (idade <= 120 && idade >= 12) && 
    (resultadoImc > 25 && resultadoImc <= 30) && 
    (peso <= 200 && peso >= 20) && 
    (altura < 2.20 && altura >= 1.40)){
        document.getElementById("formulario").style.display = "none"
        h3IMC.style.color = "#f0d"

        info.innerHTML = "Você está acima do peso. <br>"
        info.innerHTML += "Você tem <b>" 
        + idade + " anos</b>, o seu peso é de <b>" 
        + peso + "kg</b> e a sua altura é de <b>"
        + altura + "cm</b>"
        info.innerHTML += "<br>Pratique exercícios, alimente-se e durma bem pra ter uma vida saudável" 

        imagem.style.backgroundImage = "url('./images/acimaFem.jpg')"
        imagem.style.backgroundSize = "cover"

        resultado.appendChild(h3IMC)
        resultado.appendChild(info)
        resultado.appendChild(imagem)
    }

    //HOMEM OBESO
    if((sexoM.checked == true) && 
    (idade <= 120 && idade >= 12) && 
    (resultadoImc > 30) && 
    (peso <= 200 && peso >= 20) && 
    (altura < 2.20 && altura >= 1.40)){
        document.getElementById("formulario").style.display = "none"
        h3IMC.style.color = "#f00"

        info.innerHTML = "Você está obeso. <br>"
        info.innerHTML += "Você tem <b>" 
        + idade + " anos</b>, o seu peso é de <b>" 
        + peso + "kg</b> e a sua altura é de <b>"
        + altura + "cm</b>"
        info.innerHTML += "<br>Pratique exercícios, alimente-se e durma bem pra ter uma vida saudável" 

        imagem.style.marginLeft = "520px"
        imagem.style.width = "200px"
        imagem.style.backgroundImage = "url('./images/obesoMas.jpg')"
        imagem.style.backgroundSize = "cover"

        resultado.appendChild(h3IMC)
        resultado.appendChild(info)
        resultado.appendChild(imagem)
    }
 
    //MULHER OBESA
    if((sexoF.checked == true) && 
    (idade <= 120 && idade >= 12) && 
    (resultadoImc > 30) && 
    (peso <= 200 && peso >= 20) && 
    (altura < 2.20 && altura >= 1.40)){
        document.getElementById("formulario").style.display = "none"
        h3IMC.style.color = "#f00"

        info.innerHTML = "Você está obesa. <br>"
        info.innerHTML += "Você tem <b>" 
        + idade + " anos</b>, o seu peso é de <b>" 
        + peso + "kg</b> e a sua altura é de <b>"
        + altura + "cm</b>"
        info.innerHTML += "<br>Pratique exercícios, alimente-se e durma bem pra ter uma vida saudável" 

        imagem.style.marginLeft = "520px"
        imagem.style.width = "200px"
        imagem.style.backgroundImage = "url('./images/obesoFem.jpg')"
        imagem.style.backgroundSize = "cover"

        resultado.appendChild(h3IMC)
        resultado.appendChild(info)
        resultado.appendChild(imagem)
    }    
}

document.getElementById("calcular").addEventListener("click", resultadoImc)      

