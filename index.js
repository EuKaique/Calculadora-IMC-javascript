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
    var divImagem = document.createElement("div")
    divImagem.classList.add("res-imagem")
    var imagem = document.createElement("img")
    var voltar = document.getElementById("voltar")

    voltar.addEventListener('click', ()=>{
        document.location.reload(true);
    })

    h3IMC.textContent = "IMC: " + resultadoImc

    //HOMEM ABAIXO DO PESO
    if((sexoM.checked == true) && 
    (idade <= 120 && idade >= 12) && 
    (resultadoImc < 18) && 
    (peso <= 200 && peso >= 20) && 
    (altura < 2.20 && altura >= 1.40)){
        document.getElementById("formulario").style.display = "none"
        document.getElementById("voltar").style.display = "block"
        h3IMC.style.color = "#f00"

        info.innerHTML = "Você está abaixo do peso. <br>"
        info.innerHTML += "Você tem <b>" 
        + idade + " anos</b>, o seu peso é de <b>" 
        + peso + "kg</b> e a sua altura é de <b>"
        + altura + "cm</b>"
        info.innerHTML += "<br>Pratique exercícios, alimente-se e durma bem pra ter uma vida saudável" 

        imagem.style.height = "200px;"
        imagem.src = 'images/abaixoMas.jpg'

        resultado.appendChild(h3IMC)
        resultado.appendChild(info)
        divImagem.appendChild(imagem)//Coloca a imagem dentro da div
        resultado.appendChild(divImagem)
        voltar.style.display = "block";
    }

    //MULHER ABAIXO DO PESO
    if((sexoF.checked == true) && 
    (idade <= 120 && idade >= 12) && 
    (resultadoImc < 18) && 
    (peso <= 200 && peso >= 20) && 
    (altura < 2.20 && altura >= 1.40)){
        document.getElementById("formulario").style.display = "none"
        document.getElementById("voltar").style.display = "block"
        h3IMC.style.color = "#f00"

        info.innerHTML = "Você está abaixo do peso. <br>"
        info.innerHTML += "Você tem <b>" 
        + idade + " anos</b>, o seu peso é de <b>" 
        + peso + "kg</b> e a sua altura é de <b>"
        + altura + "cm</b>"
        info.innerHTML += "<br>Pratique exercícios, alimente-se e durma bem pra ter uma vida saudável" 

        imagem.src = 'images/abaixoFem.jpg'

        resultado.appendChild(h3IMC)
        resultado.appendChild(info)
        divImagem.appendChild(imagem)//Coloca a imagem dentro da div
        resultado.appendChild(divImagem)
        voltar.style.display = "block";
    }

    //HOMEM COM PESO NORMAL
    if((sexoM.checked == true) && 
    (idade <= 120 && idade >= 12) && 
    (resultadoImc >= 18 && resultadoImc < 25) && 
    (peso <= 200 && peso >= 20) && 
    (altura < 2.20 && altura >= 1.40)){
        document.getElementById("formulario").style.display = "none"
        document.getElementById("voltar").style.display = "block"
        h3IMC.style.color = "#00f"

        info.innerHTML = "Você está no peso ideal. <br>"
        info.innerHTML += "Você tem <b>" 
        + idade + " anos</b>, o seu peso é de <b>" 
        + peso + "kg</b> e a sua altura é de <b>"
        + altura + "cm</b>"
        info.innerHTML += "<br>Continue se cuidando. Parabéns ^^" 

        imagem.src = 'images/normalMas.jpg'

        resultado.appendChild(h3IMC)
        resultado.appendChild(info)
        divImagem.appendChild(imagem)//Coloca a imagem dentro da div
        resultado.appendChild(divImagem)
        voltar.style.display = "block";
    }

    //MULHER COM PESO NORMAL
    if((sexoF.checked == true) && 
    (idade <= 120 && idade >= 12) && 
    (resultadoImc >= 18 && resultadoImc < 25) && 
    (peso <= 200 && peso >= 20) && 
    (altura < 2.20 && altura >= 1.40)){
        document.getElementById("formulario").style.display = "none"
        document.getElementById("voltar").style.display = "block"
        h3IMC.style.color = "#00f"

        info.innerHTML = "Você está no peso ideal. <br>"
        info.innerHTML += "Você tem <b>" 
        + idade + " anos</b>, o seu peso é de <b>" 
        + peso + "kg</b> e a sua altura é de <b>"
        + altura + "cm</b>"
        info.innerHTML += "<br>Continue se cuidando. Parabéns ^^" 

        imagem.src = 'images/normalFem.jpg'

        resultado.appendChild(h3IMC)
        resultado.appendChild(info)
        divImagem.appendChild(imagem)//Coloca a imagem dentro da div
        resultado.appendChild(divImagem)
        voltar.style.display = "block";
    }

    //HOMEM ACIMA DO PESO
    if((sexoM.checked == true) && 
    (idade <= 120 && idade >= 12) && 
    (resultadoImc > 25 && resultadoImc <= 30) && 
    (peso <= 200 && peso >= 20) && 
    (altura < 2.20 && altura >= 1.40)){
        document.getElementById("formulario").style.display = "none"
        document.getElementById("voltar").style.display = "block"
        h3IMC.style.color = "#f0d"

        info.innerHTML = "Você está acima do peso. <br>"
        info.innerHTML += "Você tem <b>" 
        + idade + " anos</b>, o seu peso é de <b>" 
        + peso + "kg</b> e a sua altura é de <b>"
        + altura + "cm</b>"
        info.innerHTML += "<br>Pratique exercícios, alimente-se e durma bem pra ter uma vida saudável" 

        imagem.src = 'images/acimaMas.jpg'

        resultado.appendChild(h3IMC)
        resultado.appendChild(info)
        divImagem.appendChild(imagem)//Coloca a imagem dentro da div
        resultado.appendChild(divImagem)
        voltar.style.display = "block";

    }
 
    //MULHER ACIMA DO PESO
    if((sexoF.checked == true) && 
    (idade <= 120 && idade >= 12) && 
    (resultadoImc > 25 && resultadoImc <= 30) && 
    (peso <= 200 && peso >= 20) && 
    (altura < 2.20 && altura >= 1.40)){
        document.getElementById("formulario").style.display = "none"
        document.getElementById("voltar").style.display = "block"
        h3IMC.style.color = "#f0d"

        info.innerHTML = "Você está acima do peso. <br>"
        info.innerHTML += "Você tem <b>" 
        + idade + " anos</b>, o seu peso é de <b>" 
        + peso + "kg</b> e a sua altura é de <b>"
        + altura + "cm</b>"
        info.innerHTML += "<br>Pratique exercícios, alimente-se e durma bem pra ter uma vida saudável" 

        imagem.src = 'images/acimaFem.jpg'

        resultado.appendChild(h3IMC)
        resultado.appendChild(info)
        divImagem.appendChild(imagem)//Coloca a imagem dentro da div
        resultado.appendChild(divImagem)
        voltar.style.display = "block";
    }

    //HOMEM OBESO
    if((sexoM.checked == true) && 
    (idade <= 120 && idade >= 12) && 
    (resultadoImc > 30) && 
    (peso <= 200 && peso >= 20) && 
    (altura < 2.20 && altura >= 1.40)){
        document.getElementById("formulario").style.display = "none"
        document.getElementById("voltar").style.display = "block"
        h3IMC.style.color = "#f00"

        info.innerHTML = "Você está obeso. <br>"
        info.innerHTML += "Você tem <b>" 
        + idade + " anos</b>, o seu peso é de <b>" 
        + peso + "kg</b> e a sua altura é de <b>"
        + altura + "cm</b>"
        info.innerHTML += "<br>Pratique exercícios, alimente-se e durma bem pra ter uma vida saudável" 

        imagem.style.marginLeft = "auto"
        imagem.style.width = "200px"
        imagem.src = 'images/obesoMas.jpg'

        resultado.appendChild(h3IMC)
        resultado.appendChild(info)
        divImagem.appendChild(imagem)//Coloca a imagem dentro da div
        resultado.appendChild(divImagem)
        voltar.style.display = "block";
    }
 
    //MULHER OBESA
    if((sexoF.checked == true) && 
    (idade <= 120 && idade >= 12) && 
    (resultadoImc > 30) && 
    (peso <= 200 && peso >= 20) && 
    (altura < 2.20 && altura >= 1.40)){
        document.getElementById("formulario").style.display = "none"
        document.getElementById("voltar").style.display = "block"
        h3IMC.style.color = "#f00"

        info.innerHTML = "Você está obesa. <br>"
        info.innerHTML += "Você tem <b>" 
        + idade + " anos</b>, o seu peso é de <b>" 
        + peso + "kg</b> e a sua altura é de <b>"
        + altura + "cm</b>"
        info.innerHTML += "<br>Pratique exercícios, alimente-se e durma bem pra ter uma vida saudável" 

        imagem.style.marginLeft = "auto;"
        imagem.style.width = "200px;"
        imagem.src = 'images/obesoFem.jpg'

        resultado.appendChild(h3IMC)
        resultado.appendChild(info)
        divImagem.appendChild(imagem)//Coloca a imagem dentro da div
        resultado.appendChild(divImagem)
        voltar.style.display = "block";
    } 

}   

document.getElementById("calcular").addEventListener("click", resultadoImc)      

