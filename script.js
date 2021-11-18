document.getElementById('butao').addEventListener('click', iniciar);
import {color} from "./colors.js";

function iniciar () {
    var cores = color()
    var coresSorteadas = []
    var corEscolhida = ''
    var corUsuario = ''
    var vidas = 5
    var res = document.querySelector('p#res')

    while (coresSorteadas.length != 10) { //sortea 10 valores e adiciona no vetor
        coresSorteadas.push(cores[Math.floor((Math.random() * cores.length) + 1)].toLowerCase())
        coresSorteadas = [...new Set(coresSorteadas)] //remove valores duplicados
        coresSorteadas.sort() //ordena o vetor em ordem alfabética
    }
    corEscolhida = coresSorteadas[Math.floor((Math.random() * coresSorteadas.length) + 1)] //adiciona uma cor aleatoria na variavel

    coresSorteadas = coresSorteadas.join(', ') //adiciona espaço entre os valores no vetor

    while (vidas != 0) {   
        corUsuario = prompt(`Eu estou pensando em uma dessas cores:\n\n"${coresSorteadas.toString()}"\n\nQual cor eu estou pensando?\n\nVidas: ${vidas}`).toLowerCase()

        if (corUsuario.length === 0 || !corUsuario.trim()) { //verifica se o usuário não digitou a cor
            alert('Por favor, digite uma cor!!')
        } 
        else if (!coresSorteadas.includes(corUsuario)) { //verificar se a cor existe 
            alert('Essa cor não está entre as 10 possiveis ou não existe!\n\nTente novamente')
        } 
        else if (corUsuario != corEscolhida) { //verifica se o usuário acertou o valor ou não
            compararString(corEscolhida, corUsuario, vidas)
            vidas--
        } 
        else if (corUsuario == corEscolhida){
            alert('Parabéns, você acertou!!')
            document.body.style.backgroundColor = corUsuario //muda a cor de fundo para a cor acertada
            res.innerHTML = 'Obrigado por jogar!!!'
            vidas = 0
        }
    }

    function compararString(x,y,v) { //verificar a possição da cor esclhida para usuário para dar a dica
        if (x.charCodeAt(0) > y.charCodeAt(0)) {
            if (v == 1) {
                alert(`Desculpe, mas suas vidas acabaram!\n\nA correta era: "${x}"\n\nObrigado por jogar!!!`)
                res.innerHTML = 'Atualize a página ou dê um F5 para jogar novamente.'
            } else {
                alert('Você errou!!\n\nDica: Sua cor é alfabéticamente menor que a minha\n\nPor favor, tente novamente!')
            }
        } else {
            alert('Você errou!!\n\nDica: Sua cor é alfabéticamente maior que a minha\n\nPor favor, tente novamente!')
        }
    }
}

