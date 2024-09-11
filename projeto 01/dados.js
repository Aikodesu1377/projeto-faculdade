let dados = [
    {
        classe: "ninja",
        vida: "100",
        ataqueCorpo: "200",
        ataqueDistancia: "0"
    },
    {
        classe: "anjo-caido",
        vida: "150",
        ataqueCorpo: "20",
        ataqueDistancia: "200"
    },
    {
        classe: "guerreiro",
        vida: "200",
        ataqueCorpo: "150",
        ataqueDistancia: "0"
    },
    {
        classe: "gato-arqueiro",
        vida: "50",
        ataqueCorpo: "10",
        ataqueDistancia: "300"
    },
    {
        classe: "cervo-guerreiro",
        vida: "600",
        ataqueCorpo: "50",
        ataqueDistancia: "0"
    }
]
// Adiciona os dados aos personagens
let dadosPersonagem = document.getElementById('dados-jogador')
dadosPersonagem.innerHTML = 
`
<p>vida:${dados[0].vida}</p>
<p>ataqueCorpo:${dados[0].ataqueCorpo}</p>
<p>ataqueDistancia:${dados[0].ataqueDistancia}</p>
`
let dadosPersonagem1 = document.getElementById('dados-jogador1')
dadosPersonagem1.innerHTML = 
`
<p>vida:${dados[1].vida}</p>
<p>ataqueCorpo:${dados[1].ataqueCorpo}</p>
<p>ataqueDistancia:${dados[1].ataqueDistancia}</p>
`
let dadosPersonagem2 = document.getElementById('dados-jogador2')
dadosPersonagem2.innerHTML = 
`
<p>vida:${dados[2].vida}</p>
<p>ataqueCorpo:${dados[2].ataqueCorpo}</p>
<p>ataqueDistancia:${dados[2].ataqueDistancia}</p>
`
let dadosPersonagem3 = document.getElementById('dados-jogador3')
dadosPersonagem3.innerHTML = 
`
<p>vida:${dados[3].vida}</p>
<p>ataqueCorpo:${dados[3].ataqueCorpo}</p>
<p>ataqueDistancia:${dados[3].ataqueDistancia}</p>
`
let dadosPersonagem4 = document.getElementById('dados-jogador4')
dadosPersonagem4.innerHTML = 
`
<p>vida:${dados[4].vida}</p>
<p>ataqueCorpo:${dados[4].ataqueCorpo}</p>
<p>ataqueDistancia:${dados[4].ataqueDistancia}</p>
`


