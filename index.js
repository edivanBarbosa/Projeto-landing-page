var SetaDireita = window.document.getElementById("seta-direta")
var Leonardo = window.document.getElementById("leonardo")
var Samantha = window.document.getElementById("samantha")
var Bruna = window.document.getElementById("bruna")
var SetaEsquerda = window.document.getElementById("seta-esquerda")

function RolarParaaDireita() {
    Leonardo.style = "display:none"
    Samantha.style = "display:flex"
    SetaEsquerda.style = "display:flex; margin-top:55px"
    SetaDireita.style = "display:none"
}
function RolarParaEsuqerda() {
    Leonardo.style = "display:flex"
    Samantha.style = "display:none"
    SetaEsquerda.style = "display:none"
    SetaDireita.style = "display:flex"
}
