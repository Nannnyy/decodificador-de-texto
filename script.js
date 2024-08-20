function adquirirTexto() {
    return document.getElementById("caixa_texto").value;
}

function criptografarTexto() {
    let texto = adquirirTexto();

    const criptografar = {
        "e" : "enter",
        "i" : "imes",
        "a" : "ai",
        "o": "ober",
        "u": "ufat"
    };

    let novo_texto = texto.split('').map(char => criptografar[char] || char).join('');

    document.getElementById('resultado__processo__texto').innerText = novo_texto;
    mostrarResultado()
}

function descriptografarTexto() {
    let texto = adquirirTexto();

    const descriptografar = {
        'enter' : 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u',
    };

    let novo_texto = texto;
    for (let [letra_criptografada, letra] of Object.entries(descriptografar)) {
        let expressao_criptografada = new RegExp(letra_criptografada, 'g');
        
        novo_texto = novo_texto.replace(expressao_criptografada, letra);
    };

    document.getElementById('resultado__processo__texto').innerText = novo_texto;
    mostrarResultado()
}

function mostrarResultado() {

    document.getElementById('resultado__processo').style.display = "flex";
    document.getElementById('resultado__procura').style.display = "none"
}

function copiar() {
    elemento = document.getElementById('resultado__processo__texto');
    navigator.clipboard.writeText(elemento.value);
}

if (window.innerWidth <= 1320) {
    let imagem = document.getElementById('resultado__procura__imagem');
    imagem.parentNode.removeChild(imagem);

    let titulo = "Nenhuma mensagem encontrada";
    document.getElementById('titulo__procura__resultado').innerText = titulo;

    let paragrafo = "Digite o texto que você deseja criptografar ou descriptografar";
    document.getElementById('paragrafo__procura__resultado').innerText = paragrafo;

}